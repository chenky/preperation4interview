# preperation4interview

### 2019前端趋势
* https://www.infoq.cn/article/K_RFbwfff5MugJXixYDQ

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
* 相比较vue的mvvm框架，react是组件是开发更多关注view，虚拟dom，单向数据流，函数式编程
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
* https://www.jianshu.com/p/6f8babea6243
* http://zhenhua-lee.github.io/react/history.html
* https://github.com/youngwind/blog/issues/109

### react setState过程及源码分析
* https://imweb.io/topic/5b189d04d4c96b9b1b4c4ed6

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

### 域名收敛
* https://www.jianshu.com/p/7c7ea420cee8

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

### meta viewport layout viewport visual viewport ideal viewport
* https://www.cnblogs.com/2050/p/3877280.html
* https://www.quirksmode.org/mobile/viewports2.html
* https://www.runoob.com/w3cnote/viewport-deep-understanding.html

### 前端性能优化
* https://juejin.im/post/59ff2dbe5188254dd935c8ab
### 测量白屏和首屏加载时间
* https://lz5z.com/Web%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96-%E9%A6%96%E5%B1%8F%E5%92%8C%E7%99%BD%E5%B1%8F%E6%97%B6%E9%97%B4/

### 兼容IE事件工具函数
* https://blog.csdn.net/wangcuiling_123/article/details/73085958

### h5原生优缺点
* https://www.jianshu.com/p/daeacf35e72f

### amd和cmd区别，import区别，及import异步实现
* amd有requirejs，cmd有seajs，这些规范的目的都是为了 JavaScript 的模块化开发，特别是在浏览器端的
* 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
* CMD 推崇依赖就近，AMD 推崇依赖前置。
* https://www.zhihu.com/question/20351507

### requirejs常用方法
* http://www.hangge.com/blog/cache/detail_1702.html

### buffer模块
* buffer用来处理大量二进制数据，操作字节；类Array对象，javascript和C++模块结合体，性能c，非性能js
* 内存不是v8分配，属于堆外内存，buffer太常见，默认无需require即可使用
* 拼接不能+号，而是通过ondata方式，onend再转换成字符串
* 网络传输二进制最高效

### Stream是什么
* node有内存限制，大文件操作用stream，node原生模块直接引用即可
* 当不能通过fs.readFile,fs,writeFile时，使用fs.createReadStream,fs,createWriteStream

### http模块实现异步变同步请求
* https://blog.csdn.net/WANGLEI20116527/article/details/62892070

### utf8和gbk区别
* UTF-8：Unicode TransformationFormat-8bit，允许含BOM，但通常不含BOM。是用以解决国际上字符的一种多字节编码，它对英文使用8位（即一个字节），中文使用24为（三个字节）来编码。UTF-8包含全世界所有国家需要用到的字符，是国际编码，通用性强。UTF-8编码的文字可以在各国支持UTF8字符集的浏览器上显示。如，如果是UTF8编码，则在外国人的英文IE上也能显示中文，他们无需下载IE的中文语言支持包。
GBK是国家标准GB2312基础上扩容后兼容GB2312的标准。GBK的文字编码是用双字节来表示的，即不论中、英文字符均使用双字节来表示，为了区分中文，将其最高位都设定成1。GBK包含全部中文字符，是国家编码，通用性比UTF8差，不过UTF8占用的数据库比GBD大。

### 前端数据采集
* https://cdc.tencent.com/2018/09/13/frontend-exception-monitor-research/
* http://taobaofed.org/blog/2015/10/28/jstracker-how-to-collect-data/

### 腾讯面试题
#### jsonp有哪些安全问题，服务端可能存在csrf攻击
* 从消费者的角度来看：
* 必须相信提供商不会返回恶意JavaScript，而不是返回指定的JSONP回调中包含的预期JSON。
* 任何第三方JavaScript嵌入式附件（例如Google Analytics）也是如此。
* 这与XSS攻击类似，它允许第三方在应用程序中执行任意JavaScript，但是，必须首先通过首先提出请求来选择信任该第三方。
* 从提供者的角度来看：
* 即使客户的Cookie存在于您的控制网页的请求中，也不能认为该消息是存在的。检查Referer标头与授权URL的白名单，并且/或不要依赖基于cookie的认证。
* 类似于CSRF /混淆的副攻击。
* https://erlend.oftedal.no/blog/static-130.html?blogid=130
* https://cloud.tencent.com/developer/ask/77723
* https://www.jianshu.com/p/14f569b13dcc
* https://erlend.oftedal.no/blog/static-130.html?blogid=130
* 未来浏览器允许设置合法域携带cookie，这样就无法实现csrf攻击了 （ https://www.acunetix.com/blog/articles/chrome-tightens-csrf-protection/ ）

#### 怎么防止重复提交
* 多次submit按钮，刷新，回退会造成重复提交，前端和后端分别如何防御
* https://hw1287789687.iteye.com/blog/2427055
* https://www.jianshu.com/p/01b6ab61f24a

#### 怎么防止提交当价格被篡改
* 对参数做数字签名，生产signature，提交服务器回传，服务器密钥参数再hash与signatrue对比即可知道是否被串改
* https://blog.csdn.net/u014756827/article/details/86631118

#### react两个组件中的请求有依赖如何处理
* 使用高阶组件，假如a依赖b，两种方式，一是通过props.callback，b中componentWillReceiveProps拿到a中异步请求依赖数据，二是通过hoc，b作为传人组件，高阶组件中实现a对逻辑，请求返回数据后，通过props传入b组件，形成增强组件

#### react中虚拟dom diff算法
陈屹《深入react技术栈》

#### xss安全问题，比如url中传递一张图片应该做哪些处理，哪些特殊字符需要过滤
* xss攻击分为存储型和反射性
* httponly,设置csp浏览器只执行指定域名对script
* <,>"'&/等字符进行转译
* url中参数要进行编码转义，decodeURIComponent
* https://tech.meituan.com/2018/09/27/fe-security.html
* https://zhuanlan.zhihu.com/p/32237154

#### 跨域cors的http头要设置哪些，以及浏览器如何发送预检请求，整个原理说一说
* Access-Control-Allow-Origin: http://foo.example
* Access-Control-Allow-Methods: POST, GET, OPTIONS
* Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
* Access-Control-Max-Age: 86400
* https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS
* http://www.ruanyifeng.com/blog/2016/04/cors.html

#### 浏览器输入网址回车后的一系列事情
* dns域名解析获取到ip地址（浏览器缓存->系统缓存->路由器缓存->dns服务器缓存->递归搜索）
* 基于ip地址建立tcp连接，tcp三次握手，http连接建立
* 如果是https则还需要进行秘钥交换，随后建立连接
* 服务器接收请求查看http header，看是否有301,302跳转，没有就下载html页面，拿到html静态页面
* 解析页面中的外链，css，js，img等，判断是否有缓存，根据相应策略得到资源
* 同时dom树附加样式产生渲染树
* https://segmentfault.com/a/1190000012092552
* https://blog.csdn.net/LEoe_/article/details/79476279

#### 前端优化描述，除了雅虎军规之外的优化
* http2(多路复用，首部压缩，服务器推送，流量控制)，http3基于udp，ttr
* 域名收敛，dns预解析（<meta http-equiv="x-dns-prefetch-control" content="on" ><link rel="dns-prefetch" href="//cdn.domain.com" >）
* 通常情况下，我们认为 TCP 网络传输的最大传输单元（Maximum Transmission Unit，MTU）为 1500B，即一个RTT（Round-Trip Time，网络请求往返时间）内可以传输的数据量最大为 1500 字节。因此，在前后端分离的开发模式中，尽量保证页面的 HTML 内容在 1KB 以内，这样整个 HTML 的内容请求就可以在一个 RTT 内请求完成，最大限度地提高 HTML 载入速度。
* pwa，serviceworker
* https://juejin.im/post/59ff2dbe5188254dd935c8ab

#### 前端埋点监控怎么做（白屏，首屏，onload时间，html5的performance）
* head开发的地方定义起始时间，body开始处定义白屏结束时间，首屏html片段处定义首屏结束时间
* 使用html5 performance.timing的api，有各个阶段详细的时间点

#### react生命周期，及再didmount和willunmout一般做什么
componentDidMount： dom已经加装到页面，可以操作页面dom，比如集成第三方框架
componentWillUnmount：清理垃圾，比如删除绑定的事件等等内存回收的地方

#### 前端clone，深拷贝
* JSON.parse(JSON.stringify(XXXX)) （不能复制function、正则、Symbol，循环引用）
* 手写递归自己实现，简单类型，直接复制。对于引用类型，递归复制它的每一个属性，注意循环引用，使用缓存对象做判断（参考alibaba/alibaba.html）
* 使用lodash的deepclone
* 使用html5的方式拷贝，但是最大的问题是异步

#### 前端继承的方式有哪些
* 借用父级构造函数，二是通过原型，三是通过两种的组合方式（other/oop.html）

#### 缓存机制及如何定制缓存时间？为什么使用这种策略？
* https://imweb.io/topic/5795dcb6fb312541492eda8c

#### setTimeout和setImmediate区别
* node中执行顺序不确定，因为setTimeout不能做到0毫秒执行，分别在timer阶段和check阶段，process.tick优先级最高，每个阶段执行完就执行tick
* http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html

* setTimeout无法保证指定时间后执行，那该如何保证指定时间后一定执行

#### mvvm的原理及实现细节
* 参考前文

#### redux详细说说
* 参考前文

#### react数据流说说看
* 推崇简单的自顶向下的单向数据流，双向绑定可以用回调

#### 如何提高用户的转化率（更快下单）
* 首先页面加载速度要快，让用户快速看到支付按钮
* 交互响应要及时，提示友好
* 页面设计要简洁清爽，支付按钮要突出，用户容易找到（不要一堆广告），支付页面的核心是让用户快速完成支付
* 不能有中断性的广告啊，提示呀
* 异常处理要友好，比如支付失败，有重新支付按钮，不能让用户有多余的操作
* 所有的广告可以移到支付成功页去

#### nodejs如何利用多核cpu

#### http升级https前后端都要注意什么？http被劫持对过程及原理？






