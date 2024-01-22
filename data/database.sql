DROP DATABASE IF EXISTS VKodersDB;

CREATE DATABASE VKodersDB;

USE VKodersDB;

CREATE TABLE clients (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  endpoint VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE client_info (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  site_url VARCHAR(255) NOT NULL,
  col02 VARCHAR(255) NOT NULL,
  col03 VARCHAR(255) NOT NULL,
  col04 VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
