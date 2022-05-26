select * from states e, citys c --e and c are nicknames... it is not mandatory but it is usuall
where e.id = c.state_id

-- another way

select 
    e.names as States,
    c.names as City,
    region  as Região
from states e, citys c,
where e.id = c.state_id

-- another way
select
    c.names as Citys,
    e.names as States,
    region  as Region,
from states e 
inner join citys c on e.id = c.state_id