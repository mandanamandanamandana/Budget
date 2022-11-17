//require express so we can make our app
const { response } = require('express');
const express = require('express');
//create our app
const app = express();
//allows us to access dotenv and retrieve values from .env file 
const budget = require("./models/budget");
const dotenv = require('dotenv')
const budgetTwo = require('./controllers/budget')
dotenv.config()

const PORT = process.env.PORT || 3001

app.use("/budget", budgetRouter)

app.get('/', (req, res) =>{
    //res.render looks for a ejs file and we can send data to ejs file
    res.render('budget_index.ejs', { budget: budget })
});

app.get('/budgets', (request, response)=> {
     response.send('Whats up Doc')
})

app.get('/budgets/:index', (request, response)=> {
    response.send('Whats up Doc')
})
app.get('/budgets/new', (request, response)=> {
    response.send('Whats up Doc')
})

app.post('/budgets', (request, response)=> {
    response.send('Whats up Doc')
})

app.listen(PORT, () => {
    console.log(`can you feel the love on ${PORT}`)
})