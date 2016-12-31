'use strict'
let Controller = require('./Controller')
const BIDULE = require('../models/bidule')

class BidulesController extends Controller {

    constructor(){
        super(BIDULE)
    }
}

module.exports = BidulesController
