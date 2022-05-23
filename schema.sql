CREATE TABLE clients (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(50),
    lastname varchar(50),
    email varchar(255),
    phone varchar(44),
    address varchar(120),
    PRIMARY KEY (id)
);

INSERT INTO clients (firstname, lastname, email, phone, address)
VALUES ('Fernando', 'Barrios', 'barriosluis01@gmail.com', '5588234234', 'Cerrded #43');


-- UPDATE clients SET firstname = %s, lastname = %s, email = %s, phone = %s, address = %s WHERE clients.id = %s; 