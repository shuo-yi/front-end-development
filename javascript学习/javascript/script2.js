{/* 对象
     分类：内建对象，宿主对象（BOM DOM），自定义对象
     创建对象(两种方法)
       使用new关键字调用的函数是构造函数constructor(专门用来创建对象的函数)
       对象中保存的值称为属性 对象.属性名=属性值 
       属性值可以是任何类型（可以是对象）
 */
var obj= new Object();
obj.name="ysy";
obj.age="19";
console.log(obj);
console.log(obj.name);
obj.age="18";
console.log(obj.age);
//属性名双引号可加可不加
var obj2={name:"ysy",age:"19"};
console.log(obj2);

//删除属性：delete 对象.属性名
delete obj.age;
console.log(obj);

//使用特殊属性名 对象["属性名"]=属性值
obj["123"]="456";
console.log(obj["123"]);

//!!!
var a="123"
console.log(obj[a]);

//in 运算符 检查一个属性中是否有指定属性
console.log("name"in obj);
console.log("aaa"in obj);

//枚举对象中的属性
for (var n in obj){
      console.log("属性："+n);
      console.log(obj[n]);
}

//使用工厂方法创建对象(用于大批量创建对象)
function creatPerson(name,age,gender){
      var obj=new Object();
      obj.name=name;
      obj.age=age;
      obj.gender=gender;
      return obj;
}
ysy=creatPerson("ysy","19","female");
console.log(ysy);

}
{/* 基本数据类型 引用数据类型
   基本数据类型保存的是值，引用数据类型保存的是地址
   对象是引用数据类型，储存在堆内存，变量保存的是地址
   obj2=obj，把obj对应的内存地址复制到obj2，修改obj.name,obj2.name的值也会变
*/
}

{/*函数
      函数是一个对象
      (可以把要封装的代码以字符串形式传递给构造函数)
      函数的创建
        1.使用函数声明来创建函数
            function 函数名（形参1，形参2...）{
                  要封装的语句
            }
        2.使用函数表达式来创建函数
            var 函数名 =function([形参1，形参2]){
                  语句
            }
    
*/
var fun=new Function();
fun();

function fun2(){
      console.log("使用函数声明来创建函数");
}
fun2();

var fun3=function(){
      console.log("使用函数表达式来创建函数");
}
fun3();
//立即执行函数(函数对象加括号，可以不用赋变量)（不知道有啥用>_<）
(function(a,b){
      console.log(a+b);
})(1,2)

/*对象的属性值可以是任何类型，可以是函数
     当一个函数作为一个对象的属性保存，
     则该函数称为这个对象的方法，
     调用函数就称为调用对象的方法（method）
*/
obj.sayname=function(){
      console.log(obj.name);
}
obj.sayname();//函数对象+括号 调用函数

{/*this
     解析器在调用函数时会向函数内部传递进一个隐含的参数this
     this指向一个对象，指向调用方法的那个对象
       1.以函数形式调用时，this为window(函数为window对象的方法)
       2.以方法形式调用时，this为调用方法的对象
       3.当以构造函数的形式调用时，this是新创建的那个对象
*/
function fun4(){
      console.log(this);
}
function fun5(){
      console.log(this.a);
}
var obj3={
      a:"aaa",
      b:fun4,
      c:fun5
};
obj3.b();
fun4();
obj3.c();

/*构造函数
      -构造函数和普通函数的区别在于调用方式，
       构造函数要使用new关键字来调用
      -构造函数的执行流程：
       1.立即创建一个新的对象
       2.将新建的对象设置为函数中的this，
         在构造函数中可以使用this来引用新建的对象
       3.逐行执行函数中的代码
       4.将新建的对象作为返回值返回
   类  
      -使用同一个构造函数构建的对象称为一类对象，
       也将一个构造函数称为一个类
      -通过同一个构造函数创建的对象称为是该类的实例(该构造对象的实例)
      -使用instanceof可以检查一个对象是否是一个类的实例
           用法：对象名 instanceof 构造函数名
                 返回true false
   
*/
var t;
function sayage(){
      console.log("在构造函数外部定义函数，然后在构造函数内把它设置为方法");
}
function Persion(name,age,gender){
      this.name=name;
      this.age=age;
      this.gender=gender;
      console.log("逐行执行函数中的代码");
      t=this;
      this.sayname=function(){
            console.log("在构造函数里面定义函数")
      }
      this.sayage=sayage;

}
var ysy=new Persion("ysy","19","female");//该函数中的this和ysy存储的是同一块内存的地址
console.log(ysy);
console.log(ysy==t);
}
//instance
console.log(ysy instanceof Persion);
//所有对象都是Object的后代
console.log(ysy instanceof Object);//返回true
//不要在构造函数里完成方法对应代码的封装，否则每调用一次就创建一个函数
var someone=new Persion("aaa","18","male");
console.log(ysy.sayname==someone.sayname);//返回false，
console.log(ysy.sayage==someone.sayage);//返回true
/*原型对象
      对于创建的每一个函数(函数是对象)，解析器会向函数中添加一个属性prototype
      属性prototype的属性值是一个对象，即原型对象(prototype的属性值是原型对象的地址)
      -当函数以构造函数的形式被调用时，所创建的对象中都会有一个隐函属性
       隐含属性的值是构造函数原型对象的地址
       __proto__
      -所有用构造函数创建的对象都能访问到同一原型对象，
       原型对象相当于所有对象的公共区域，可以将共有内容
       写在构造函数的原型对象中
      -当访问一个对象的属性或方法时首先在自身属性里寻找，找不到再在原型对象中寻找
 */
function Myclass(){

}

Myclass.prototype.a=123;
Myclass.prototype.b=function(){
        console.log("在原型对象里")
    
}
var mc1=new Myclass();
var mc2=new Myclass();
console.log(Myclass.prototype==mc1.__proto__);//true
console.log(mc1.__proto__==mc2.__proto__);//true
console.log("b" in mc1);//true
mc1.b();//在Myclass.prototype里添加一个b属性，mc1就可以用
mc2.b();
console.log(mc1.a);
//使用对象的hasOwnProperty()方法检查该对象自己是否有某个对象(不在原型对象中)
//而hasOwnProperty()方法在原型的原型里(原型对象也是对象，原型对象也有原型，也有__proto__属性)
console.log(mc1.hasOwnProperty("b"));//false
console.log(mc1.hasOwnProperty("hasOwnProperty"));//false
console.log((mc1.__proto__).hasOwnProperty("hasOwnProperty"));//false
console.log(Object.hasOwnProperty("hasOwnProperty"));//false
console.log(mc1.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));//true
console.log(mc1.__proto__.__proto__);
console.log(mc1.__proto__.__proto__.__proto__);//null
console.log(Object.__proto__.hasOwnProperty("hasOwnProperty"));//false
console.log(Object.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));//true 找到啦！！
//使用原型的方法时，先在自己里面找，找不到再在原型里找，找不到再在原型的原型里找，直到找到Object的原型停止，一路找到头也没找到就返回undefined

}

{/*作用域
    1.全局作用域
          -直接写在script标签里的JS代码作用域为全局
          -全局作用域在页面打开时创建，页面关闭时销毁
          -全局作用域中有一个由浏览器创建的全局对象window,
           它代表的是一个浏览器的窗口，可直接使用 
          -在全局作用域中:
               创建的变量都会作为window对象的属性保存 
               创建的函数都会作为window对象的方法保存
    2.函数作用域      
      
      
*/
var win="创建的变量都会作为window对象的属性保存";
console.log(window.win);
function winfun(){
      console.log("创建的函数都会作为window对象的方法保存");
}
window.winfun();
/*变量声明提前
     -用var关键字声明的变量，在所有代码执行之前被声明
      不使用var时不会提前
  函数声明提前
     -用函数声明形式创建的函数function(){}
      会在所有代码执行前被创建(不光被声明，而且被创建)
     -使用函数表达式创建的函数不会被声明提前，不能在声明前调用

*/
}



