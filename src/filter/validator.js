
export default {
    IsNull,
    IsLen,
    IsLetter
}


// 判断输入内容是否为空
function IsNull (s) {
    if(!s || s.trim().length === 0) return false
    return true
}

// 判断输入内容是否为实数
function isNumber(s){
    var r = /^[-+]?\d+(\.\d+)?$/　　//正整数
    if (s && r.test(s)) return true
    return false
}


// 判断输入内容是否为整数
function isIntNumber(s){
    var r = /^[-\+]?\d+$/　
    if (s && r.test(s)) return true
    return false
}

// 判断输入是否为Email
function isEmail(s){
    var r = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (s && r.test(s)) return true
    return false
}

// 判断输入内容是否不超过多少
function IsLen (s, len) {
    var str = s.trim()
    if(str.length > len) return false
    return true
}


//判断输入的字符是否为数字或字母
function IsLetter(s)
{
    var str = s.trim()
    if(str.length!==0){
        reg=/^[A-Za-z0-9]+$/
        if(!reg.test(str)) false
        true
    }
}

//校验登录名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串


// Require : /.+/,
//     Email : /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
//     Phone : /^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}$/,
//     Mobile : /^((\(\d{3}\))|(\d{3}\-))?13\d{9}$/,
//     Url : /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
//     IdCard : /^\d{15}(\d{2}[A-Za-z0-9])?$/,
//     Currency : /^\d+(\.\d+)?$/,
//     Number : /^\d+$/,
//     Zip : /^[1-9]\d{5}$/,
//     QQ : /^[1-9]\d{4,8}$/,
//     Integer : /^[-\+]?\d+$/,
//     Double : /^[-\+]?\d+(\.\d+)?$/,
//     Float: /^[-\+]?\d+(\.\d+)?$/,
//     Float2: /^(0|[1-9]\d{0,3})(\.\d{0,2})?$/,
//     English : /^[A-Za-z]+$/,
//     Chinese : /^[\u0391-\uFFE5]+$/,
//     DateTime:/^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))(\s\d{1,2}:\d{1,2}:\d{1,2})?$/,
//     UnSafe : /^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\'\"]*)|.{0,5})$|\s/,
//     IsSafe : function(str){return !this.UnSafe.test(str);},
// SafeString : "this.IsSafe(value)",
//     Limit : "this.limit(value.length,getAttribute('min'), getAttribute('max'))",
//     LimitB : "this.limit(this.LenB(value), getAttribute('min'), getAttribute('max'))",
//     Date : "this.IsDate(value, getAttribute('min'), getAttribute('format'))",
//     Repeat : "value == document.getElementsByName(getAttribute('to'))[0].value",
//     Range : "getAttribute('min') < value && value < getAttribute('max')",
//     Compare : "this.compare(value,getAttribute('operator'),getAttribute('to'))",
//     Custom : "this.Exec(value, getAttribute('regexp'))",
//     Group : "this.MustChecked(getAttribute('name'), getAttribute('min'), getAttribute('max'))",
