export function percent (data) {
    if (data === null) {
        return '--'
    }
    var value = Math.round(parseFloat(data) * 10000) / 100
    var xsd = value.toString().split('.')
    if (xsd.length === 1) {
        value = value.toString() + '.00'
        if (value === '0.00' | value === '-0.00') {
            return '0.00' + '%'
        } else {
            return value + '%'
        }
    }
    if (xsd.length > 1) {
        if (xsd[1].length < 2) {
            value = value.toString() + '0'
        }
        if (value === '0.00' | value === '-0.00') {
            return '0.00' + '%'
        } else {
            return value + '%'
        }
    }
}
