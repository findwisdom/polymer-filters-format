/**
 * Created by wisdom on 2017/5/25.
 */
// 货币格式化
// formatMoney(54321); // $54,321
// formatMoney(12345, 0, "£ "); // £ 12,345
// formatMoney(12345, 2, "£ "); // £ 12,345.00
// formatMoney(12345.232, 2, "£ "); // £ 12,345.23
export function formatMoney (number, places, symbol, thousand, decimal) {
    number = number || 0
    places = !isNaN(places = Math.abs(places)) ? places : 2
    symbol = symbol !== undefined ? symbol : ' $ '
    thousand = thousand || ', '
    decimal = decimal || ' . '
    var negative = number < 0 ? '-' : ''
    var i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + ''
    var j = (j = i.length) > 3 ? j % 3 : 0
    var value = symbol + negative + (j ? i.substr(0, j) + thousand : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : '')
    value.toString()
    console.log(value)
    if (value === symbol + '-0 . 00' || value === symbol + '0 . 00') {
        return symbol + '0 . 00'
    } else {
        return value
    }
}
