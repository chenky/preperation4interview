# preperation4interview

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

### react redux react-router

### nodejs架构及大概介绍

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

### react如何借用其他类库的组件，比如jquery

### 牛人博客
* https://segmentfault.com/u/zach5078

### 正则表达式

### http https，udp，tcp，三次握手，四次挥别

### nodejs和javascript事件循环
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
