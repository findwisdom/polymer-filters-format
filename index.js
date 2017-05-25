/**
 * Created by wisdom on 2017/5/25.
 */
var date = require('./filter/filter-date')
var exacttime = require('./filter/filter-exacttime')
var money = require('./filter/filter-money')
var percent = require('./filter/filter-percent')
var round = require('./filter/filter-round')
var uppercase = require('./filter/filter-uppercase')

const polymerFilter = {
    date,
    exacttime,
    money,
    percent,
    round,
    uppercase
}

module.exports = polymerFilter
