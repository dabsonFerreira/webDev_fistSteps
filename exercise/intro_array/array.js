//1) create a function that returns a string "Olá, " concatenated with an argument text with 
//an exclamation point at the end

const hi = text => `olá,  ${text}!` 
console.log(hi("Dabson"))

//2) write a function that takes a person ages in years and returns it in days (disregard leap years)
//and days after the birthday

const livinDays = age => age*365
console.log(`the age of this person is: ${livinDays(25)}`)

/*
3) Develop a function that takes two parameters, the amount of a employee worked hours in a month and
how much he gains in an hour. The return of the function must be a string "Salary equals to $X" in 
where X is how much that employee gained in a month. 
*/

const monthlyEarns = (monthlyWorkedHours, gainsPerHour) => monthlyWorkedHours*gainsPerHour
console.log(`this employee gains $${monthlyEarns(44,300)} per month`)

/*
4) creates a function that takes a number between 1 to 12 and returns the correspondent month with
a string.
*/

months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'semptember', 'october', 'november', 'december']
const returnMonth = monthNumber => months[monthNumber-1]
console.log(`the month with this number is ${returnMonth(2)}`)