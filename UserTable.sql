CREATE TABLE Account (
	id 			VARCHAR(20) 	PRIMARY KEY,
	name 		VARCHAR(100) 	NOT NULL,
	surname 	VARCHAR(100) 	NOT NULL,
	email 		VARCHAR(355) 	NOT NULL UNIQUE,
	password 	VARCHAR(100) 	NOT NULL,
	is_admin 	BOOLEAN 		NOT NULL,
	created_on 	TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	last_login 	TIMESTAMP
);

INSERT INTO Account
(id,name,surname,email,password,is_admin,last_login)
VALUES
(1,'Testas','Testauskas','test@test.com','123',true,'2020-03-04');