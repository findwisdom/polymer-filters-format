/**
 * Created by wisdom on 2017/5/25.
 */

export default function  round(val, precision, method) {
    precision = precision || 0;
    var factor = Math.pow(10, precision);
    var rounder;
    
    if (method == 'ceil') {
        rounder = Math.ceil;
    } else if (method == 'floor') {
        rounder = Math.floor;
    } else {
        rounder = Math.round;
    }
    
    return rounder(val * factor) / factor;
};
