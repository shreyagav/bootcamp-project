const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dbURI = 'mongodb+srv://acaditi2004:Aditic04@h4i-week10.0zrwlzs.mongodb.net/test'

mongoose.connect(dbURI)
.then(success=>app.listen(3000))
.then( (result) => console.log("connected"))
.catch( (err) => console.log(err));