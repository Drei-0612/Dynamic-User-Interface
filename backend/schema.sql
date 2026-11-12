-- Run this SQL in phpMyAdmin (SQL tab) or MySQL CLI

CREATE DATABASE IF NOT EXISTS librarydb;
USE librarydb;

-- Table for students
CREATE TABLE IF NOT EXISTS student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    srCode VARCHAR(100) NOT NULL,
    program VARCHAR(100) NOT NULL
);

-- Table for books
CREATE TABLE IF NOT EXISTS book (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

-- Table for users
CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
