'use strict'

let mongoose = require('mongoose')

let biduleModel = mongoose.model('Bidule', new mongoose.Schema({
    title : {
        type: String,
        unique : true,
        required: true
    },
    date:{
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true
}))

module.exports = biduleModel
