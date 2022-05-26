CREATE TABLE IF NOT EXISTS Mayors(
    id INT UNSIGNED NOT NULL AUTO_INCREMENTED
    nome VARCHAR(255) NOT NULL, 
    city_id INT INSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (city_id),--chave estrageira e unica
    FOREIGN KEY (city_id) REFERENCES citys(id)
);