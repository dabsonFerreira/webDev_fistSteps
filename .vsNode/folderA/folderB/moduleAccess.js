//to access the file moduleA in the folder Node:
const moduleA = require('../../moduleA')//../ you exited from folderB ../ now you exited folderA and is in folder Node
console.log(moduleA.hi)//observe that you can use with or without .js

const greeting = require('greetings')//you don't need to use the address of a folder in nodule_modules.

//now.. to access a file inside another folder inside the folder you already are:
//we want here to access the index.js inside folderC that is inside folderB

const c = require('./folderC/index')//this is the way to get the file itself
console.log(c.hello)
//if you want you can omit the name index because it is a defauld file that node will look first