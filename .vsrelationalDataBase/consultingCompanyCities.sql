select e.nome, c.nome
from company e, unitis_Company eu, citys c
where e.id = eu.company_id
and c.id = eu.city_id


--the code above don't execute in VScode. But you can change to:
select e.nome Empresa, c.nome Cidade
from company e, unitis_Company eu, citys c
where e.id = eu.company_id
and c.id = eu.city_id


-- or
select e.nome Empresa, c.nome as Cidade
from company e, unitis_Company eu, citys c
where e.id = eu.company_id
and c.id = eu.city_id

--or 

select e.nome Empresa, c.nome as 'Cidade'
from company e, unitis_Company eu, citys c
where e.id = eu.company_id
and c.id = eu.city_id