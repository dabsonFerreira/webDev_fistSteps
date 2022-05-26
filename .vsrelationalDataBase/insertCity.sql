INSERT INTO citys(names, area, state_id)
VALUES ('Niterói', 133.9, (SELECT id FROM states WHERE sail = 'RJ'))

INSERT INTO citys(names, area, state_id)
VALUES ('Juiz de Fora', 1.437, (SELECT id FROM states WHERE sail = 'MG'))

INSERT INTO citys(names, area, state_id)
VALUES ('Juazeiro do Norte', 248.2,(SELECT id FROM states WHERE sail= 'CE'))