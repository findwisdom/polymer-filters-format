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
format.money(round) // 12.34%
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

后续方法持续更新中......