const express = require("express")
const budget = require("../models/budget")

//create router object

const router = express.Router()

//register routes with the router

router.get("/", (req, res) => {
    res.render("budget_index.ejs", {

    })

})

module.exports = router