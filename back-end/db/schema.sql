DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS soaps;

CREATE TABLE soaps (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    image TEXT,
    smell TEXT,
    ingredients TEXT NOT NULL,
    description TEXT,
    type TEXT,
    price TEXT NOT NULL,
    adult BOOLEAN DEFAULT true,
    baby BOOLEAN DEFAULT true,
    featured BOOLEAN DEFAULT true,
    rating INT,
    CHECK (rating >= 0 AND rating <=5)

);