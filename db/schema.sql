DROP DATABASE IF EXISTS hamburger_db;
CREATE DATABASE hamburger_db;
USE hamburger_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR (150) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);