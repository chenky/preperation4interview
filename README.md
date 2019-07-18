# preperation4interview

### 笔试
* https://www.jianshu.com/p/35a027c7e4d9

### 前端面试：
* https://github.com/azl397985856/fe-interview（或者https://lucifer.ren/fe-interview/#/）

### ReactNative原理:
* https://www.jianshu.com/p/038975d7f22d
* https://blog.cnbang.net/tech/2698/

### web components
custom element, shodaw dom, template模板（x-tag，polymer），小程序貌似使用web component标准
可重用，非侵入式，可维护，语义化组件
* https://www.w3cplus.com/web-components/why-web-components-are-important.html
* https://developer.mozilla.org/zh-CN/docs/Web/Web_Components
* http://taobaofed.org/blog/2018/10/31/a-tag/

### 小程序原理：
* https://juejin.im/post/5afd136551882542682e6ad7
* https://github.com/Lmagic16/blog/issues/31

### webRTC:
* https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API

### 装饰器模式：
* http://es6.ruanyifeng.com/#docs/decorator
* https://segmentfault.com/a/1190000014495089

### serviceWorker：
* 1.Service worker运行在worker上下文，因此它不能访问DOM。
* 2.相对于驱动应用的主JavaScript线程，它运行在其他线程中，所以不会造成阻塞。它设计为完全异步，同步API（如XHR和localStorage）不能在service worker中使用。
* 3.出于安全考量，Service workers只能由HTTPS承载，毕竟修改网络请求的能力暴露给中间人攻击会非常危险。在Firefox浏览器的用户隐私模式，Service Worker不可用。
* 4.Service workers大量使用Promise，因为通常它们会等待响应后继续，并根据响应返回一个成功或者失败的操作。Promise非常适合这种场景。
注册-》下载-》安装-》激活
* https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API
* http://www.alloyteam.com/2016/01/9274/
* http://taobaofed.org/blog/2018/08/08/workbox3/

### webpack
* https://github.com/gwuhaolin/dive-into-webpack
* https://github.com/ruanyf/webpack-demos#demo01-entry-file-source
* https://juejin.im/post/5acabd696fb9a028c97a5733

### react redux react-router
* 深入REACT技术栈+陈屹著.pdf （必看书目）
* https://github.com/renderedtext/react-redux-demo
* https://segmentfault.com/a/1190000004355491#articleHeader13
* https://github.com/huangtengfei/redux-demo
* https://coding.imooc.com/learn/list/313.html (综合实例)

### nodejs架构及大概介绍
* https://www.zhihu.com/question/33578075

### minxin, 高阶组件，react hooks
* https://segmentfault.com/a/1190000016950339
* https://zh-hans.reactjs.org/docs/hooks-intro.html

### react生命周期，对比vue，及vue的核心概念
* https://juejin.im/post/5a062fb551882535cd4a4ce3
* https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA
* 基本指令，模板语法，渲染，事件处理，组件，组件通讯，逻辑复用，路由，状态管理，ajax类库等等。
* 横切逻辑共用： vue mixin 类比 react mixin hoc hooks
* 容器组件：     vue slot（name指定） 类比 react props.children （数组索引）
* 双向通信：     vue props+event 类比 react props+callback
* 渲染：		   vue render(h=>h(component)) 类比 react ReactDOM.render(component, container)
* 全家桶：       vue vuex  Vue-router elmentUI等 类比 react + redux + React router（Browser Router） antdUI等

### react受控组件和非受控组件
* 受控组件数据由react管理，而非受控组件数据存储在dom中
* 非受控组件往往代码少，且写的比较快，方便和第三方组件结合，虽然不美观，而受控组件状态更新需要写处理函数（change处理函数每一个组件都要写，很烦）
* 但是同一份数据，多个控件，
* 受控组件默认值由defaultValue，defaultChecked
* 文件上传控件始终是非受控组件，因为其值用户设置而非代码设置，
* https://react.docschina.org/docs/uncontrolled-components.html
* http://meloguo.com/2018/10/08/%E5%8F%97%E6%8E%A7%E4%B8%8E%E9%9D%9E%E5%8F%97%E6%8E%A7%E7%BB%84%E4%BB%B6/ （重点看看）

### react事件
* 在 React 底层，主要对合成事件做了两件事:事件委派和自动绑定
* 事件委托在结构的最外层，react自动绑定this，但是es6和纯函数需要手动绑定
* 可以使用原生事件，在componentdidmount中，但是记得在componentwillunmount中移除，防止内存泄漏，合成事件不需要，react已经处理
* 阻止 React 事件冒泡的行为只能用于 React 合成事件系统 中，且没办法阻止原生事件的冒泡。反之，在原生事件中的阻止冒泡行为，却可以阻止 React 合成 事件的传播。
* React 的合成事件系统只是原生 DOM 事件系统的一个子集。它仅仅实现了 DOM Level 3 的事件接口，并且统一了浏览器间的兼容问题。有些事件 React 并没有实现，或者受某些 限制没办法去实现，比如 window 的 resize 事件。
* React 的合成事件则并没有实现事件捕获，仅仅支持了事件冒泡机制。这种 API 设计方式统一而简洁， 符合“二八原则”。

### react router及内部原理，源码分析 
* 在路由跳转过程中，onLeave hook 会在所有将离开的路由中触发，从最下层的子路由开始直到最外层父路由结束。然后onEnter hook会从最外层的父路由开始直到最下层子路由结束。
* https://react-guide.github.io/react-router-cn/index.html

### mvvm原理
* http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html
* https://coding.imooc.com/lesson/129.html#mid=9409
* https://github.com/DMQ/mvvm

### react如何借用其他类库的组件，比如jquery
* https://zh-hans.reactjs.org/docs/integrating-with-other-libraries.html

### 牛人博客
* https://segmentfault.com/u/zach5078

### 正则表达式
* https://juejin.im/post/5965943ff265da6c30653879
* https://juejin.im/post/5acb4d3f6fb9a028c813295e
* https://www.cnblogs.com/zxin/archive/2013/01/26/2877765.html
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

### http https，udp，tcp，三次握手，四次挥别
* https://www.cnblogs.com/zhuqil/archive/2012/07/23/2604572.html
* https://blog.csdn.net/zhongzh86/article/details/69389967
* https://segmentfault.com/a/1190000017524542

### nodejs和javascript事件循环(包括macrotask，microtask说明)
* https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/
* http://lynnelv.github.io/js-event-loop-nodejs

### 同步，异步，阻塞，非阻塞概念
* https://zhuanlan.zhihu.com/p/22707398
* https://nodejs.org/zh-cn/docs/guides/blocking-vs-non-blocking/

### new发生了什么
* 创建一个空的简单JavaScript对象（即{}）；
* 链接该对象（即设置该对象的构造函数）到另一个对象 ；
* 将步骤1新创建的对象作为this的上下文 ；
* 如果该函数没有返回对象，则返回this。
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
* https://segmentfault.com/q/1010000005141424

### Promise
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
* http://es6.ruanyifeng.com/#docs/promise

### 页面生命周期
* https://github.com/fi3ework/blog/issues/3

### 跨域
* https://segmentfault.com/a/1190000011145364
* https://www.jianshu.com/p/a0dd1e712c3a

### typeof instanceof区别
* https://segmentfault.com/a/1190000000730982
* http://jartto.wang/2019/01/17/js-typeof/

### for in for of forEach 区别
* https://blog.csdn.net/crystal6918/article/details/75099816

### generator
* http://es6.ruanyifeng.com/#docs/generator

### flex
* http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

### 数据结构与算法
* https://coding.imooc.com/learn/list/315.html
* https://github.com/kdn251/interviews

### 缓存机制,原理
* https://imweb.io/topic/55c6f9bac222e3af6ce235b9
* https://www.jianshu.com/p/1a1536ab01f1
* https://www.jianshu.com/p/54cc04190252
* https://github.com/ljianshu/Blog/blob/master/%E6%96%87%E7%AB%A0%E4%B8%AD%E7%9A%84%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6.xmind
