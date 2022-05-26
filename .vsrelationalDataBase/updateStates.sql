update states
set region  = 'North'
where sail = 'PA'

update states
set region  = 'South'
where sail = 'SC'

update states
set region  = 'North East'
where sail = 'BA'

update states
set region  = 'Midwest'
where sail = 'MT'


update states
set region  = 'Southeast'
where sail = 'MG'

select * from states

update states
set named = 'Pará'
where sail = 'PA' 

select region from states where named = 'Pará'
select sta.region from states sta where named = 'Pará'

-- for some reason I cannot change the region name