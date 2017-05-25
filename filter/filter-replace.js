/**
 * Created by wisdom on 2017/5/25.
 */
export default function (str, old, new_, maxCount) {
    var res = str.toString();
    var last = res;
    var count = 1;
    res = res.replace(old, new_);
    
    while (last !== res) {
        if (count >= maxCount) {
            break;
        }
        
        last = res;
        res = res.replace(old, new_);
        count++;
    }
    
    return res;
};
