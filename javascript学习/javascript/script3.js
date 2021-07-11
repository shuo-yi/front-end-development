{/*垃圾回收(GC)
    浏览器自动回收，释放内存
    对于不用的对象 obj=null;浏览器就会回收它
 */
}

{/*数组(Array)
    创建：var arr=new Array();(数组也是对象，使用构造函数创建对象)
         var arr2=[];
    数组中的元素可以是任意类型(对象、函数、数组)
    数组的所有属性、方法见w3c参考手册
 */
//数组创建初始化
var arr=new Array("ysy","123");

var arr2=["ysy","123"];

//数组对象的length属性
console.log(arr.length);
arr.length=10;
console.log(arr);
arr.length=1;
console.log(arr);
arr.length=2;
arr[arr.length]="向数组最后一位添加数组";
console.log(arr[arr.length-1]);
/*forEach方法
     -需要一个函数作为参数(由我们创建但不由我们调用，该类函数称为回调函数)
      数组中有几个函数就执行几次，
      浏览器向这个函数传递三个参数
      正在遍历的元素、正在遍历的元素的索引、正在遍历的数组
*/
arr.forEach(function (value,index,obj){
    console.log(value);
});
}

{/*函数的call() apply()方法
     -是函数对象的方法，通过函数对象来调用
     -这两个方法可用于修改函数的this
     -call()括号内第一个参数为this,后面的参数成为函数的实参
     -apply()第一个参数为this,需要将实参封装进一个数组中统一传递
*/
obj={name:"ysy"};
function fun(a,b){
    console.log(this);
    console.log("a="+a);
    console.log("b="+b);

}
fun(1,2);//this是window
fun.call();//this是window
fun.apply();//this是window
fun.call(obj,1,2);//this是obj
fun.apply(obj,[1,2]);//this是obj

}

{/*在调用函数时，浏览器每次会传递两个隐含参数
    1.this
    2.封装实参的对象 arguments
      -类数组对象，可通过索引操作数据，可获取长度
      -调用函数时，实参在arguments中保存(函数中不定义形参，调用函数时传实参也会在arguments中保存)
      -arguments对象的callee属性，属性值是函数对象(当前正在执行的函数对象)    
*/

function fun2(a,b){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments);//去控制台看arguments对象的属性
    console.log(arguments.callee);
    //console.log(arguments.callee(1,2));无限套娃
}
fun2("我是第一个实参",2);

}

{/*Date对象(Date()是一个构造函数)
    -Date()当前代码执行的时间
    -Date("月/日/年 h:m:s")指定时间
  方法属性见参考手册(getTime()返回时间戳)
*/

var d1=new Date();
console.log(d1);
var d2=new Date("7/10/2021 11:28:30");
console.log(d2);

//获取当前时间戳
//用时间戳测试代码执行的性能
time=Date.now();
console.log("当前时间戳是"+time);

}

{/*Math
    -Math不是构造函数，他是工具类，
     不用创建对象，里面封装了数学运算相关的属性和方法
    -计算工具包，里面有各种常量和运算   
*/

//取绝对值
console.log(Math.abs(-2));

/*随机数的生成
Math的random()方法可以返回一个0~1之间的随机数，再通过各种运算得到想要范围的随机数
   -生成一个0-x之间的随机数
        Math.round(Math.random()*x)
   -生成一个x-y的随机数
       Math.round(Math.random()*(y-x)+x)
*/

console.log(Math.random());
console.log(Math.round(Math.random()*5));

}

{/*包装类
    JS提供三个包装类，通过包装类可以将基本数据类型转换为对象
    String()
    Number()
    Boolean()
包装类是给浏览器用的，当我们对一些基本数据类型调用方法和属性时，
浏览器会使用包装类临时将其转换成对象，再调用方法和属性
*/
var num=new Number(3);
console.log(typeof num);

num=num.toString();

}

{/*字符串的方法去
    -在底层字符串是以字符数组的形式保存的(可以取下标等)
    方法见手册   
*/
var str="ysy!!!",str2="hhh!";
console.log(str[0]);
console.log(str.length);

//fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串
console.log(String.fromCharCode(74));
//concat()
var str3=str.concat(str2);
console.log(str3);
var str4=str+str2;
console.log(str4);

//indexof()
result=str.indexOf("y");
console.log(result);
result2=str.indexOf("y",1);
console.log(result2);

//slice()截取片段


}
