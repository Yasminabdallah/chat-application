module.exports = {
    "up": "CREATE TABLE message (id int(11) NOT NULL AUTO_INCREMENT,from_user_id varchar(45) DEFAULT NULL,to_user_id varchar(45) DEFAULT NULL, message text,PRIMARY KEY (id) )",
    "down": "DROP TABLE message"
}