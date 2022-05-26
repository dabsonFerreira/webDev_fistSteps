//It is a node project
//all the commands are doing in the terminal! 

/*
cd vsNode
cd employee
npm init                       it let you define how will be your package.json file

to not respond this questions you can use another command:

npm init -y            the -y will answer yes to every question of this



pwd is a command that let you see where you are in the directory

npm i --save axios
the command i is to install. This will create a folder in the directory employee.
The --save is to save the dependency installed. This file describes your project and
describes all the dependencies in your project.
You must observe the version of the package installed. It also can be accompanied with
^ or ~. The first one means that it will let be updated the middle numbers of that extension an
the second one will let be updated the lest numbers. Without any of these no updates will be allowed. 
To do that, you can use the command -E.

Another intersting command is to install a dependency that is only necessary in the development. You 
use the command -dev after --save.

npm install --save-dev axios@0.17.1 -E. This is just demonstrative. Do not execute it during the exercise

An archive that is created is package-lock.json. This must be in your repository because it describes
precisely the versions used in your program. It don't update even if ^ or ~ is used.


for the activity go to: files.cod3r.com.br/curso-js/funcionarios.json

*/

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const employees = response.data
    console.log(employees)

//then() is a resource of ecmascript - the true name of js. With this command we will
//get the content inside the url.

//the challenge is to get the chinese woman with the lowest salary

const emp = employees
const woman = emp.filter(country => country.pais === 'China').filter(woman => woman.genero === 'F').reduce((salary,lowestSalary) => {
    return salary.salario > lowestSalary.salario ? lowestSalary.salario : salary.salario
} )


})





//it will only work if you set the commented commands in terminal!!