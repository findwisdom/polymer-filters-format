/**
 * Created by wisdom on 2017/5/25.
 */
var date = require('./filter/filter-date')
var money = require('./filter/filter-money')
var percent = require('./filter/filter-percent')
var round = require('./filter/filter-round')

const polymerFilter = {
    date: date.default,
    money: money.default,
    percent: percent.default,
    round: round.default
}

module.exports = polymerFilter
