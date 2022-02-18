DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS test;

CREATE TABLE soaps (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    smell TEXT NOT NULL,
    ingredients TEXT,
    qualities TEXT,
    type TEXT,
    price TEXT NOT NUll,
    adult BOOLEAN,
    baby BOOLEAN

);
