select * from states -- consult * all columns from
-- it is not a good way of consulting because it could have lots of data.

select named, sail from states
select sail, named from states
select sail, named as `State Name` from states
select sail, named as `State Name` from states where region = 'Sul'
select sail, named as `State Name` from states where people >= 10
select sail, named as `State Name` from states where people >= 10 order by people
select sail, named    `State Name` from states where people >= 10 order by people desc

select
    region,
    named,
    people
from states
where people >= 10
order by people desc