/*
事件循环 event loop

reference: https://juejin.im/post/5c3d8956e51d4511dc72c200

eventloop image: https://cn.bing.com/images/search?view=detailV2&ccid=%2BcEe7v3S&id=F6C18060F178D1904054CB772142A81B467FBC0B&thid=OIP.-cEe7v3SWweFBjboQAfbEQHaF2&mediaurl=http%3A%2F%2Fvoidcanvas.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fnodejs-event-loop-workflow.png&exph=1598&expw=2024&q=nodejs+eventloop&simid=608044279183378251&selectedindex=53&ajaxhist=0&vt=0&sim=11
*/

// let startTime = new Date()
// setTimeout(function(){
//   console.log("setTimeout:"+(new Date()-startTime));  
// },1000) 
// for (let index = 0; index < 1000000; index++) {
//   const element = 1000000;
  
// }
// setImmediate(function(){
//   console.log("setImmediate:"+(new Date()-startTime));  
// })

// setImmediate(function () {
//   console.log('setImmediate延迟执行'); 
// });

// setTimeout(function () {
//   console.log('setTimeout延迟执行'); 
// });

// process.nextTick(function () { 
//   console.log('nextTick延迟执行');
// });

// console.log('正常执行');

// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });
// console.log('script end');

// console.log('script start')

// async function async1() {
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2 end') 
// }
// async1()

// setTimeout(function() {
//   console.log('setTimeout')
// }, 0)

// new Promise(resolve => {
//   console.log('Promise')
//   resolve()
// })
//   .then(function() {
//     console.log('promise1')
//   })
//   .then(function() {
//     console.log('promise2')
//   })

// console.log('script end')

let bar;

setTimeout(() => {
  console.log('setTimeout');
  Promise.resolve().then(()=>{
    console.log("microtask in setTimeout");
  });
}, 0)

setImmediate(() => {
  console.log('setImmediate');
  Promise.resolve().then(()=>{
    console.log("microtask in setImmediate");
  });
})
function someAsyncApiCall(callback) {
  process.nextTick(callback);
}

someAsyncApiCall(() => {
  console.log('bar', bar); // 1
});

console.log("end");

bar = 1;
