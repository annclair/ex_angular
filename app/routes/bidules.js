'use strict'
let BidulesController = require('../controllers/BidulesController')

module.exports = (app)=> {

let ctrl = new BidulesController()

app.get('/bidules', (req, res, next) => {
    return ctrl.find(req,res,next)
})

app.get('/bidules/:id', (req, res, next) => {
    return ctrl.findById(req,res,next)
})

app.post('/bidules', (req, res, next) => {
    return ctrl.create(req,res,next)
})

app.put('/bidules/:id', (req, res, next) => {
    return ctrl.update(req,res,next)
})

app.delete('/bidules/:id', (req, res, next) => {
    return ctrl.delete(req,res,next)
})
}
