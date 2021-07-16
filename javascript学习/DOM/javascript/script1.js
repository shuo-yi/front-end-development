window.onload=function(){
/*
定义一个函数，专门用来为指定元素绑定单击响应函数
    参数：
        idStr 要绑定单击响应函数的对象的id属性值
        fun 事件的回调函数，当单击元素时，该函数将会被触发
*/
           function myClick(idStr , fun){
               var btn = document.getElementById(idStr);
               btn.onclick = fun;
           }
       
           
               
               {//为id为btn01的按钮绑定一个单击响应函数
               var btn01 = document.getElementById("btn01");
               btn01.onclick = function(){
                   //通过id查找#bj节点
                   var bj = document.getElementById("bj");
                   //innerHTML 通过这个属性可以获取到元素内部的html代码
                   alert(bj.innerHTML);
               };}
               
               {//为id为btn02的按钮绑定一个单击响应函数
               var btn02 = document.getElementById("btn02");
               btn02.onclick = function(){
                   //查找所有li节点
                   //getElementsByTagName()可以根据标签名来获取一组元素节点对象
                   //这个方法会返回一个类数组对象，所有查询到的元素都会封装到对象中
                   //即使查询到的元素只有一个，也会封装到数组中返回
                   var lis = document.getElementsByTagName("li");
                   
                   //打印lis
                   //alert(lis.length);
                   for(var i=0 ; i<lis.length ; i++){
                       alert(lis[i].innerHTML);
                   }
               };}
               
               
               
               //为id为btn03的按钮绑定一个单击响应函数
               var btn03 = document.getElementById("btn03");
               btn03.onclick = function(){
                   //查找name=gender的所有节点
                   var inputs = document.getElementsByName("gender");
                   
                   //alert(inputs.length);
                   
                   for(var i=0 ; i<inputs.length ; i++){
                       /*
                        * innerHTML用于获取元素内部的HTML代码的
                        * 	对于自结束标签，这个属性没有意义
                        */
                       //alert(inputs[i].innerHTML);
                       /*
                        * 如果需要读取元素节点属性，
                        * 	直接使用 元素.属性名
                        * 		例子：元素.id 元素.name 元素.value
                        * 		注意：class属性不能采用这种方式，
                        * 			读取class属性时需要使用 元素.className
                        */
                       alert(inputs[i].className);
                   }
               };
               
               //为id为btn04的按钮绑定一个单击响应函数
               var btn04 = document.getElementById("btn04");
               btn04.onclick = function(){
                   
                   //获取id为city的元素
                   var city = document.getElementById("city");
                   
                   //查找#city下所有li节点
                   var lis = city.getElementsByTagName("li");
                   
                   for(var i=0 ; i<lis.length ; i++){
                       alert(lis[i].innerHTML);
                   }
                   
               };
               
               //为id为btn05的按钮绑定一个单击响应函数
               var btn05 = document.getElementById("btn05");
               btn05.onclick = function(){
                   //获取id为city的节点
                   var city = document.getElementById("city");
                   //返回#city的所有子节点
                   /*
                    * childNodes属性会获取包括文本节点在呢的所有节点
                    * 根据DOM标签标签间空白也会当成文本节点
                    * 注意：在IE8及以下的浏览器中，不会将空白文本当成子节点，
                    * 	所以该属性在IE8中会返回4个子元素而其他浏览器是9个
                    */
                   var cns = city.childNodes;
                   
                   //alert(cns.length);
                   
                   /*for(var i=0 ; i<cns.length ; i++){
                       alert(cns[i]);
                   }*/
                   
                   /*
                    * children属性可以获取当前元素的所有子元素
                    */
                   var cns2 = city.children;
                   alert(cns2.length);
               };
               
               //为id为btn06的按钮绑定一个单击响应函数
               var btn06 = document.getElementById("btn06");
               btn06.onclick = function(){
                   //获取id为phone的元素
                   var phone = document.getElementById("phone");
                   //返回#phone的第一个子节点
                   //phone.childNodes[0];
                   //firstChild可以获取到当前元素的第一个子节点（包括空白文本节点）
                   var fir = phone.firstChild;
                   
                   //firstElementChild获取当前元素的第一个子元素
                   /*
                    * firstElementChild不支持IE8及以下的浏览器，
                    * 	如果需要兼容他们尽量不要使用
                    */
                   //fir = phone.firstElementChild;
                   
                   alert(fir);
               };
               
               //为id为btn07的按钮绑定一个单击响应函数
               myClick("btn07",function(){
                   
                   //获取id为bj的节点
                   var bj = document.getElementById("bj");
                   
                   //返回#bj的父节点
                   var pn = bj.parentNode;
                   
                   alert(pn.innerHTML);
                   
                   /*
                    * innerText
                    * 	- 该属性可以获取到元素内部的文本内容
                    * 	- 它和innerHTML类似，不同的是它会自动将html去除
                    */
                   //alert(pn.innerText);
                   
                   
               });
               
               
               //为id为btn08的按钮绑定一个单击响应函数
               myClick("btn08",function(){
                   
                   //获取id为android的元素
                   var and = document.getElementById("android");
                   
                   //返回#android的前一个兄弟节点（也可能获取到空白的文本）
                   var ps = and.previousSibling;
                   
                   //previousElementSibling获取前一个兄弟元素，IE8及以下不支持
                   //var pe = and.previousElementSibling;
                   
                   alert(ps);
                   
               });
               
               //读取#username的value属性值
               myClick("btn09",function(){
                   //获取id为username的元素
                   var um = document.getElementById("username");
                   //读取um的value属性值
                   //文本框的value属性值，就是文本框中填写的内容
                   alert(um.value);
               });
               
               
               //设置#username的value属性值
               myClick("btn10",function(){
                   //获取id为username的元素
                   var um = document.getElementById("username");
                   
                   um.value = "今天天气真不错~~~";
               });
               
               
               //返回#bj的文本值
               myClick("btn11",function(){
                   
                   //获取id为bj的元素
                   var bj = document.getElementById("bj");
                   
                   //alert(bj.innerHTML);
                   //alert(bj.innerText);
                   
                   //获取bj中的文本节点
                   /*var fc = bj.firstChild;
                   alert(fc.nodeValue);*/
                   
                   alert(bj.firstChild.nodeValue);
                   
                   
               });
               
           };
           

