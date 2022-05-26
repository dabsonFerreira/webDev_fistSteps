select 
    region as 'Region'
    sum(people) as Total
from states
group by region
order by Total asc

select 
    sum(people) as Total
from states