DROP DATABASE IF EXISTS hamburger_db;
CREATE DATABASE hamburger_db;
USE hamburger_db;

CREATE TABLE burgers
(
    id intNOT NULL AUTO_INCREMENT,
    name VARCHAR (150) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);