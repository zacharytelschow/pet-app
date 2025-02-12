-- these 2 lines are needed windows
CREATE DATABASE PetDB;
\c PetDB;

-- Ensure Pets table exists with correct casing
CREATE TABLE IF NOT EXISTS "Pets" (
    "Id" SERIAL PRIMARY KEY,
    "Name" VARCHAR(255) NOT NULL,
    "Type" VARCHAR(100) NOT NULL,
    "Age" INT NOT NULL
);

-- Insert sample pets
INSERT INTO "Pets" ("Name", "Type", "Age") VALUES
    ('Buddy', 'Dog', 3),
    ('Whiskers', 'Cat', 2),
    ('Charlie', 'Bird', 1)
ON CONFLICT DO NOTHING;
