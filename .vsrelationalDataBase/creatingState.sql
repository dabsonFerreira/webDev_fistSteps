-- Creating the table State


create table estados(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- id is a integer, unsigned, not null and auto-incremented

    named VARCHAR(45) NOT NULL, -- not null makes it a required field
    sail VARCHAR(2) NOT NULL,
    region ENUM('Norte', 'Nordeste', 'Sul', 'Sudeste', 'Centro-Oeste') NOT NULL,
    people DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id), -- it is formed with only one column
    UNIQUE KEY (named),
    UNIQUE KEY (sail)
);