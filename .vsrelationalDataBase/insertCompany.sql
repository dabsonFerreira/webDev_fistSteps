ALTER TABLE company MODIFY cnpj VARCHAR(14)

INSERT INTO company (names, cnpj)
VALUES ('BRADESCO' 11285649969633)
       ('VALE',    11447555877910)
       ('CIELO',   22235885266641)

INSERT INTO unitis_Company(company_id, city_id, headquarter)
VALUES 
    (1,1,1)
    (1,2,0)
    (2,1,0)