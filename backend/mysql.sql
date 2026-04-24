CREATE DATABASE IF NOT EXISTS nodejs;
USE nodejs;

CREATE TABLE create_event(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    descriptions TEXT,
    event_date DATETIME NOT NULL,
    balance INT NOT NULL,
    total INT NOT NULL
);

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE book_event(
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT NOT NULL,
    user_id INT NOT NULL,
    booking_code VARCHAR(100) NOT NULL UNIQUE,
    booking_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    tickets_booked INT DEFAULT 1,

    FOREIGN KEY (event_id) REFERENCES create_event(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE attendance(
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_code VARCHAR(100) NOT NULL UNIQUE,
    event_id INT NOT NULL,
    entry_time DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (event_id) REFERENCES create_event(id) ON DELETE CASCADE
);