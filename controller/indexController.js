const { body, validationResult, matchedData } = require("express-validator")
const db = require("../db/queries")

const alphError = 'Username must be alphanumeric.'
const lenError = 'length must be between 3 and 15.'

const validateUser = [
    body('username').trim().isAlphanumeric().withMessage(alphError)
    .isLength({min: 1, max: 15}).withMessage(`Username ${lenError}`),
    body('text').trim().isLength({min: 5, max: 200}).withMessage(`Text ${lenError}`)
]

exports.listMessagesGet = (req,res) => {
        db.listAllMessages().then((response) => {
            console.log(response)
            res.render("index", {
                title: "Mini Message Board",
                messages: response
            })
        })
    }

exports.newMessageGet = (req,res) => {
    res.render("form");
}

exports.newMessagePost = [
    validateUser,
    (req,res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).render("form.ejs", {
                errors: errors.array()
            })
        }

        db.newMessage(matchedData(req)).then((response) => {
            res.redirect("/");
        })
    }]


