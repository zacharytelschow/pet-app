# Use .NET SDK to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy project files and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy everything and build the app
COPY . ./
RUN dotnet publish -c Release -o /out

# Use .NET ASP.NET runtime for the final container
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copy built files from the build stage
COPY --from=build /out ./

# Expose the API port
EXPOSE 5001
# Start the application - Make sure this matches your DLL name!
CMD ["dotnet", "api.dll"]
