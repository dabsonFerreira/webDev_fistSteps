const express = require('express')
const app = express()
const bodyParser = require('body-parser')//once the data is submited, it will make a parse in the 
//body of the requisition and the request will get this data and will put it in request.body
app.use(bodyParser.urlencoded({extended: true}))
app.post('/users', (req, resp) => {
    console.log(req.body)
    resp.send('Você Foi Cadastrado!')
})
app.listen(3003)