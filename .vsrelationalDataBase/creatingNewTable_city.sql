--um para muitos
CREATE TABLE IF NOT EXISTS citys(
    id INT UNSIGNED NOT NULL AUTO_INCREMENTED,
    names VARCHAR(255) NOT NULL,
    state_id INT INSIGNED NOT NULL,
    area DECIMAL(10,2),
    PRIMARY KEY (id)
    FOREIGN KEY (state_id) REFERENCES states(id)   
);