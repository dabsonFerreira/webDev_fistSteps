CREATE TABLE IF NOT EXISTS company(
    id INT UNSIGNED NOT NULL AUTO_INCREMENTED
    names VARCHAR(255) NOT NULL,
    cnjp INT UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);

CREATE TABLE IF NOT EXISTS unitis_Company(
    company_id INT UNSIGNED NOT NULL,
    city_id INT UNSIGNED NOT NULL,
    headquarter TINYINT(1) NOT NULL,        
    PRIMARY KEY (company_id, city_id)

);