module.exports = {
    "up": "CREATE TABLE users (user_id INT NOT NULL, UNIQUE KEY user_id (user_id), name VARCHAR(20) NOT NULL,email VARCHAR(20)  NOT NULL UNIQUE,password VARCHAR(20)  NOT NULL,socketid VARCHAR(20) NULL) ",
    "down": "DROP TABLE users"
}