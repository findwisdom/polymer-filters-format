!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("filterSrc",[],t):"object"==typeof exports?exports.filterSrc=t():e.filterSrc=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);var n={IsNull:function(e){return!(!e||0===e.trim().length)},IsLen:function(e,t){return!(e.trim().length>t)},IsLetter:function(e){var t=e.trim();0!==t.length&&(reg=/^[A-Za-z0-9]+$/,reg.test(t))}};t.default={date:function(e,t){var r=new Date(e),n=r.getDate(),o=r.getMonth()+1,i=r.getFullYear(),u=r.getHours(),a=r.getMinutes(),l=r.getSeconds();return t||(t="MM/dd/yyyy"),(t=t.replace("MM",o.toString().replace(/^(\d)$/,"0$1"))).indexOf("yyyy")>-1?t=t.replace("yyyy",i.toString()):t.indexOf("yy")>-1&&(t=t.replace("yy",i.toString().substr(2,2))),(t=t.replace("dd",n.toString().replace(/^(\d)$/,"0$1"))).indexOf("t")>-1&&(t=u>11?t.replace("t","pm"):t.replace("t","am")),t.indexOf("HH")>-1&&(t=t.replace("HH",u.toString().replace(/^(\d)$/,"0$1"))),t.indexOf("hh")>-1&&(u>12&&(u-=12),0===u&&(u=12),t=t.replace("hh",u.toString().replace(/^(\d)$/,"0$1"))),t.indexOf("mm")>-1&&(t=t.replace("mm",a.toString().replace(/^(\d)$/,"0$1"))),t.indexOf("ss")>-1&&(t=t.replace("ss",l.toString().replace(/^(\d)$/,"0$1"))),t},money:function(e,t,r,n,o){e=e||0,t=isNaN(t=Math.abs(t))?2:t,r=void 0!==r?r:" $ ",n=n||", ",o=o||" . ";var i=e<0?"-":"",u=parseInt(e=Math.abs(+e||0).toFixed(t),10)+"",a=(a=u.length)>3?a%3:0,l=r+i+(a?u.substr(0,a)+n:"")+u.substr(a).replace(/(\d{3})(?=\d)/g,"$1"+n)+(t?o+Math.abs(e-u).toFixed(t).slice(2):"");return l.toString(),l===r+"-0 . 00"||l===r+"0 . 00"?r+"0 . 00":l},percent:function(e){if(null===e)return"--";var t=Math.round(1e4*parseFloat(e))/100,r=t.toString().split(".");return 1===r.length?"0.00"==(t=t.toString()+".00")|"-0.00"===t?"0.00%":t+"%":r.length>1?(r[1].length<2&&(t=t.toString()+"0"),"0.00"===t|"-0.00"===t?"0.00%":t+"%"):void 0},round:function(e,t,r){t=t||0;var n=Math.pow(10,t);return("ceil"==r?Math.ceil:"floor"==r?Math.floor:Math.round)(e*n)/n},trim:function(e){return e&&e.replace(/^\s*|\s*$/g,"")},replace:function(e,t,r,n){var o=e.toString(),i=o,u=1;for(o=o.replace(t,r);i!==o&&!(u>=n);)i=o,o=o.replace(t,r),u++;return o},validator:n}}])})npm
