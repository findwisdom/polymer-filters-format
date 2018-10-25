# polymer-filters-format
[![npm](https://img.shields.io/npm/v/polymer-filters-format.svg?style=flat-square)](https://www.npmjs.com/package/polymer-filters-format)

## 简介

polymer-filters-format 是一个常用的数据格式转换包

包内包括有货币格式转换， 浮点类型格式转换， 时间类型转换等

## 通过npm引入

安装polymer-filters-format

```shell
npm install polymer-filters-format
```
引入polymer-filters-format

```javascript
import format from 'polymer-filters-format'
```

>如果不支持import, 请使用

```javascript
var format = require('polymer-filters-format')
```

## 内置方法

- date - 时间格式转换方法

Example:

```javascript
let time = new Date()
console.log(format.date(time, 'yyyy/MM/dd/hh/mm/ss'))  // 2017/03/21/23/34/32

```

- money - 货币格式化

Example:

```javascript
// 货币格式化
format.money(54321); // $54,321
format.money(12345, 0, "£ "); // £ 12,345
format.money(12345, 2, "£ "); // £ 12,345.00
format.money(12345.232, 2, "£ "); // £ 12,345.23

```

- percent - 浮点类型转换为百分比且返回两位小数

Example:

```javascript
// 浮点类型格式化百分比
let round = 0.1234324
format.percent(round) // 12.34%
```

- round - 浮点类型保留小数N位

Example:

```javascript
// 浮点类型截取格式化
let round = 0.1234324323243
format.round(round，4) // 0.1234 默认四舍五入
format.round(round，4，'ceil') // 0.1235  进1法
format.round(round，4，'floor') // 0.1235  退1法
```
截至版本 1.0.3

- replace - 字符串替换（可控制个数,默认全局替换）

replace方法仅仅操纵字符串

Example:

```javascript
let round = 0.1234
let dd1 = 'www www www www www'
format.replace(round，'123', '111') // 0.1114
format.replace(dd1，'www', 'q') // q q q q q
format.replace(dd1，www，qq, 1) // qq www www www www
format.replace(dd1，www，qq, 2) // qq qq www www www
```


- trim - 去除两边空行空格

Example:

```javascript
let str1 = '               小明           '
let str2 = '
                小红          '
format.trim(str1) // 小明
format.trim(str2) // 小红

```
截至版本 1.0.5

## 验证validator方法

- .validator.IsNull - 判断是否为空

```javascript
let str = ''
format.validator.IsNull (str) // true

```


- .validator.isNumber - 判断输入内容是否为实数

```javascript

let str1 = 'sa'
let str2 = 11
format.validator.isNumber (str1) // false
format.validator.isNumber (str2) // true

```

- .validator.isIntNumber - 判断输入内容是否为整数

```javascript

let str1 = 11.5
let str2 = 11
format.validator.isIntNumber (str1) // false
format.validator.isIntNumber (str2) // true

```

- .validator.IsLen - 判断输入内容是否不超过多少

```javascript

let str1 = 'sa21111111111111121212121212'
let str2 = 'dsas'
format.validator.IsLen (str1, 5) // false
format.validator.IsLen (str2, 5) // true

```

- .validator.IsLetter - 判断输入的字符是否为英文或数字字母

```javascript

let str1 = 'sa21111111111111121212121212》'
let str2 = 'dsas'
format.validator.IsLetter (str1) // false
format.validator.IsLetter (str2) // true

```

- .validator.isEmail - 判断输入的字符是否为英文或数字字母

```javascript

let str1 = 'sa21111111111111121212121212》'
let str2 = '826206931@qq.com'
format.validator.isEmail (str1) // false
format.validator.isEmail (str2) // true

```
后续方法持续更新中......

截至版本 1.0.7

## 版本 1.0.6 弃用
