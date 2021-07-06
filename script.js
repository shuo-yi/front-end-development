{/*输出*/ 
document.write("\nysyaa");
//alert("come!ysy");
console.log("\nysy!");
}
/*变量*/
var a=123,b;
b=456;
document.write(b);

/*七种变量类型
  number 包括所有的数字，整数小数浮点数
  string
  boolean
  array
  object 
  Null null 表示为空的对象
  Undefined
*/
//用\表示转义 
var str1="ysy:\"hhh\"",str2="ysy:'hhh'";
document.write(str1);
//所有类型的变量和string相加都变成string类型
document.write(str2+b);
//typeof 变量 ->返回一个string类型的变量，内容为变量的类型
console.log(typeof a);
console.log(typeof(typeof a));
/* 特殊符号
 * Infinity 表示无穷
 * NaN 表示不是数字 not a number
 */
//JS中可以保存的最大值1.7976931348623157e+308,超过最大值则输出“infinity”
//Infinity的类型是number
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE*Number.MAX_VALUE);
var inf=Infinity;
console.log(typeof inf);
console.log("a"*"a");
/*
   强制类型转换   
 */
//转换为字符串类型 toString()方法，String()函数（Null和Undefined只能使用String()函数）
var num=123;
var str1=num.toString();
var str2=num+"";
var str3=String(num);
console.log(str1);
console.log(typeof str1);
console.log(typeof str3);

var c=null,d=undefined;
d=String(d);
console.log(d);
/*转换成Number类型 : 
  Number()函数
      字符串转
          1.纯数字直接转
          2.含非数字返回NaN
          3.空串、空格串返回0
      布尔转
          true->1
          false->0
      null->0
      undefined->NaN;
  parseInt()函数
  parseFloat()函数
*/
var e="123";
e=Number(e);
console.log(e);
console.log(typeof e);
var e="123aaa";
e=parseInt(e);
console.log(e);
/*
 * 转换成Boolean : Boolean()函数，除0,NaN;空串;null;undefined其余都为true
 */
//运算时会自动转换类型，“1”==1->true



