using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Get database connection string
var connectionString = Environment.GetEnvironmentVariable("DATABASE_URL") 
                       ?? "Host=db;Port=5432;Database=PetDB;Username=admin;Password=admin";

// Configure database
builder.Services.AddDbContext<PetDbContext>(options =>
    options.UseNpgsql(connectionString));

// ✅ Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder
            .AllowAnyOrigin()  // ✅ Allows requests from any origin
            .AllowAnyMethod()
            .AllowAnyHeader());
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<PetDbContext>();
    Console.WriteLine("✅ Database connection verified.");
}

// ✅ Apply CORS policy before defining API routes
app.UseCors("AllowAll");

// Define API routes
app.MapGet("/", () => "Hello, world! API is running.");
app.MapGet("/pet/{id}", async (int id, PetDbContext db) =>
{
    var pet = await db.Pets.FindAsync(id);
    return pet is not null ? Results.Ok(pet) : Results.NotFound();
});
app.MapGet("/pet", async (PetDbContext db) => await db.Pets.ToListAsync());

app.MapPost("/pet", async (Pet pet, PetDbContext db) =>
{
    db.Pets.Add(pet);
    await db.SaveChangesAsync();
    return Results.Created($"/pet/{pet.Id}", pet);
});

app.MapPut("/pet/{id}", async (int id, Pet inputPet, PetDbContext db) =>
{
    var pet = await db.Pets.FindAsync(id);
    if (pet is null) return Results.NotFound();

    pet.Name = inputPet.Name;
    pet.Type = inputPet.Type;
    pet.Age = inputPet.Age;

    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.MapDelete("/pet/{id}", async (int id, PetDbContext db) =>
{
    var pet = await db.Pets.FindAsync(id);
    if (pet is null) return Results.NotFound();

    db.Pets.Remove(pet);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.Run();

// Define Pet Model
public class Pet
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public int Age { get; set; }
}

// Define Entity Framework Database Context
public class PetDbContext : DbContext
{
    public PetDbContext(DbContextOptions<PetDbContext> options) : base(options) { }
    public DbSet<Pet> Pets => Set<Pet>();
}
