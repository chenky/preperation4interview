作者：Akara
链接：https://www.nowcoder.com/discuss/486572
来源：牛客网

字节跳动 一面
自我介绍，介绍项目。

几个小题目，看代码说结果

[] == ![]和[] == []的值（事后发现自己完全答反，万恶的隐式转换，神奇的JS）

new 操作符原理

盒模型 content-box和border-box

display:none;visibility: hidden;opacity:0的区别

事件模型，看代码说结果

状态码301，302，304

知道referer头部吗，直接请求服务器时refer是多少，顺便聊了其在CSRF中的作用

CSS动画，transition和animation，哪一个性能更好

Koa和Express的区别，以及Koa中间键的原理

Vue的v-model的原理，Vue实例是怎么拿到data属性的

Hash和History模式的区别，原理

React的Fiber的原理，知道怎么实现的吗，是否了解Hook的实现原理

聊了一下Redux和React-Redux

给定一个字符串，输出该字符串所有排列的可能。如输入“abc”，输出“abc,acb,bca,bac,cab,cba”。

复制代码
1
function fullpermutate(str) { var result = []; return result;}
多行字符串转二维数组

复制代码
1
2
3
const str=` 1 21    3
 4 5  6
7   8 9 ` [ ['1', '12', '3'], ['4', '5', '6'], ['7', '8', '9'], ]
获得页面所有节点数

有什么问我的吗

聊了一下项目

算法题。判断堆栈的出栈顺序是否合理。

复制代码
1
validStack(inArr, outArr)
两个同域的页面之间的通信。postMessage，storage（之前没了解过，原来这个可以监听的？）

如何统计用户的浏览时长，要考虑到用户会切换页面，缩放页面等。多个点进行上报时，如何区分这些数据来自于同一个会话？

https://yq.aliyun.com/articles/635301

实现一个sleep方法

函数防抖，函数节流

HTTP和Websocket的联系

重排，重绘，合成层

了解过puppeteer吗


自我介绍

聊项目的一些东西，难点啥的，解决方案。

写代码。倒计时 截止时间 2020年11月11日 0点

显示 “剩余XX天XX时XX分XX秒”

每秒刷新一次

怎么学习前端的，聊一下接下来的打算



一面
css 盒模型，清除浮动，BFC
border-radius
垂直居中
vue 生命周期
vuex
vue-router
寻找字符串中最长无重复子串
寻找数组中两个值和为给定值的所有整数对（map）
二面
项目技术介绍，vuex 使用，难点
缓存
https
浏览器事件机制，和 nodejs 事件机制有什么不同
实现 eventBus（on，off，emit）
weakMap
浏览器性能优化
vue 的 computed
vue 中 data 为什么用 return
箭头函数（this 指向）
请写出一个可以生成整型随机数数组（内部元素不重复）的函数，并可以根据参数设置随机数生成的范围和数量。例如：函数 madeRandomList(a,b,c)，可以生成 [a,b] 范围内，长度为 c 的随机数数组。
有 n 个硬币，其中 1 个为假币，假币重量较轻，你有一把天平，请问，至少需要称多少次能保证一定找到假币?
css 实现球体（径向渐变，内外阴影）
跨域
三面
vue-router 路由更新
token
vue 指令
js bridge
螺旋输出数组
为所有数组对象添加一个方法
跨域



如何获取上传文件后缀名
var const let 区别
js 数据类型，Object.prototype.toString.call()
[1, 2, 3] => [2, 4 6] 实现数组元素翻倍方法，尽可能多的使用不同方法，考察array方法的熟悉度
vue 中如何实现阻止事件冒泡和捕获
重写覆盖原生方法
flex-baisc
transform animate
position 取值
http1.1 http 2.0 相对于 1.0
缓存的头
二面
vue 生命周期
v-if、v-for 优先级，v-for 中 key
http 2.0 特性，多路复用
url 输入到页面显示
链表中插入节点
二叉树遍历
路径简化，a/b/c/../../d/e ==> a/d/e
cookie 缺点，sessionStorage，localStorage
tcp 三次握手，四次挥手



Q1 
输入一个整形数组，数组里有正数也有负数。数组中连续的一个或多个整数组成一个子数组，每个子数组都有一个和。 求所有子数组的和的最大值，要求时间复杂度为O(n)。 
例如输入的数组为1, -2, 3, 10, -4, 7, 2, -5，和最大的子数组为3, 10, -4, 7, 2， 因此输出为该子数组的和18。 

Q2 
实现 sum 
要求 
sum(1,2).result === 3 
sum(1,2)(3).result == 6 
sum(1,2)(3,4).result == 10 
sum(1,2)(3,4)(5).result == 15 

之后开始面试
1.自我介绍
2.对JavaScript的理解 （es6 es4...) 
3.对于Node.js理解 了不了解Node里的子进程
follow up：进程和线程的区别
4.对XSS CSRF的理解 如何实现一次CSRF攻击
5.阐述HTTPS的握手过程


一面
React组件传值，如何传递组件， 按条件显示。
display:none; visibility:hidden;opacity:0;的区别
函数参数有没有长度限制？
写个函数，查找参数最大长度。
如何优化，最快找到这个最大长度。
new 100w个 Obj(){}，会怎样。
CSS如何实现透过点击。
实现输入框点击下拉，再实现，点击外部收起下拉框。
事件代理。
实现动画div left: 0 => left: 100 1s 线性，transation、animation、js动态修改left。
你知道那些异步事件，他们的优先级如何？事件、script、setTimeOut、Promise、async、generator、RAF。
写个同步处理队列。
实现垂直居中的几种方式，line-height设置在父元素还是子元素
str = ‘1 apple costs 300’ 输出’输出之前的数字，正则表达式
中文abc => abc中文
生成结构树
二面
自我介绍
项目中的问题（跨域）
平时如何学习（由此及彼：浅拷贝，由浅入深：解决跨域->跨域的原理->多种跨域的方式）
做个题: 函数声明时，如果没有指定挂载到哪个对象，则默认挂载到window全局对象上
500ms，left: 0到left: 100，知道多少种说多少种
一个函数，从编写到执行，经历了什么
一段字符包含a-z、0-9，计算出里面最长不重复字段
简述一下浏览器输入一个网址按下回车键后到看到页面之间发生了一些什么事。
cookie和session



原生JS与React的区别
ES6常用扩展
let、const、var的区别
作用域
什么是块
讲以下JS的this
箭头函数特性
react render 绑定方法时直接click = {this.method}吗？为什么
绑定this的方法
bind和call的区别
如何判断function里this的指向
为什么会有原型链
原型链是什么
HTML5兼容性问题有哪些
文件上传要做些什么
页面做个过度效果用什么
cookie是做什么的，怎么存储获取
CSS预处理器用过些什么
使用原生JS创建一个表格
为什么建议使用innerHtml和innerText而不是creatElement/insertBefore