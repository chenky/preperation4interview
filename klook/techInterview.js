/*
  判断一个字符串中是否有连续重复的字符，有返回true，否则返回false
  比如prettier->true, currentLetter->false
  1. 通过正则匹配的方式， /([a-zA-Z])\1/.test(str)
  2. 通过遍历字符串，对比上一个如果相等返回true，否则lastLetter=currentLetter,最后返回false
*/
// function containsRepeatingLetter(str) {
//   let lastLetter;
//   for (let index = 0; index < str.length; index++) {
//     const currentLetter = str[index];
//     if (/[a-zA-Z]/.test(currentLetter)) {
//       if (lastLetter === currentLetter) {
//         return true;
//       } else {
//         lastLetter = currentLetter;
//       }
//     }
//     return false;
//   }
// }

// /*
// 创建一个函数createModule，let inst = new createModule();
// */
// class createModule {
//   constructor(str1, str2) {
//     this.str1 = str1;
//     this.str2 = str2;
//   }

//   get greeting() {
//     return this.str1;
//   }

//   get name() {
//     return this.str2;
//   }

//   sayIt() {
//     return `${this.greeting},${this.name}`;
//   }
// }
// let inst = new createModule("a", "b");
// console.log(inst.sayIt());

// /*
//   实现如下函数
//   var result1 = stringconcat("a", "b");
// result1 = "a+b"
// console.log(result1);
// var stringconcatWithPrefix = stringconcat.prefix("hellworld");
// // prefix的实现
// var result2 = stringconcatWithPrefix("a", "b", "c");
// result2 = "hellworld+a+b+c"
// console.log(result3);
// */
// function stringconcat(...rest) {
//   return rest.join("+");
// }

// stringconcat.prefix = function (str) {
//   return function (...rest) {
//     return `${str}+${rest.join("+")}`;
//   };
// };

// var result1 = stringconcat("a", "b");
// // result1 = "a+b"
// console.log(result1);
// var stringconcatWithPrefix = stringconcat.prefix("hellworld");
// // prefix的实现
// var result2 = stringconcatWithPrefix("a", "b", "c");
// // result2 = "hellworld+a+b+c"
// console.log(result2);

// /*
//   实现如下函数如： (2).weeks.ago = new Date(Date.now()-1000 * 60 * 60 * 24 * 7 * 2)
// */
// Object.defineProperties(Number.prototype, {
//   weeks: {
//     get() {
//       return this;
//     },
//   },
// });
// Object.defineProperties(Number.prototype.weeks, {
//   ago: {
//     get() {
//       let now = Date.now();
//       let diff = 1000 * 60 * 60 * 24 * 7 * this;
//       console.log(now, diff, this);
//       return new Date(now - diff);
//     },
//   },
// });
// // console.log((2).weeks.ago);
// // console.log((3).weeks.ago);

// /*
//   实现异步compose函数
//   首先把callback转换成promise函数
// */
// let promisify = (fn, receiver) => {
//   // 返回callback方式的函数， 最后一个参数是callback函数，除此之外是函数的初始值
//   return (...args) => {
//     // let callback = args.pop();
//     return new Promise((resolve, reject) => {
//       fn.apply(receiver, [
//         ...args,
//         (err, res) => {
//           // return err ? reject(err) : resolve(res);
//           resolve(res);
//         },
//       ]);
//     });
//   };
// };

// function add1(n, callback) {
//   setTimeout(function () {
//     console.log("called add1 and res is " + (n + 1));
//     callback(new Error(10), n + 1);
//   }, 10);
// }

// function mul3(n, callback) {
//   setTimeout(function () {
//     console.log("called mul3 and res is " + n * 3);
//     callback(null, n * 3);
//   }, 10);
// }

// function mul5(n, callback) {
//   setTimeout(function () {
//     console.log("called mul5 and res is " + n * 5);
//     callback(null, n * 5);
//   }, 10);
// }

// let add1Promisify = promisify(add1, null);
// let mul3Promisify = promisify(mul3, null);
// add1Promisify(4).then((res) => {
//   console.log(res[0], res[1]);
//   mul3Promisify(res[1]).then((res)=>{
//     console.log(res[0],res[1]);
//   })
// });

// [mul3Promisify,add1Promisify].reduceRight((prevPromise, nextPromise)=>{
//   return prevPromise.then(res=>{
//     console.log(res);
//     return nextPromise(res);
//   })
// }, Promise.resolve(4));

// 串行执行异步callback
// function compose(...fns) {
//   fns = fns.map((fn) => promisify(fn, null));

//   return function composeFn(...params) {
//     const [initVal, callback] = params;

//     fns.reduceRight((prevPromise, nextPromise) => {
//       return prevPromise.then((res) => {
//         let retNextPromise = nextPromise(res);
//         retNextPromise.then(console.log);
//         return retNextPromise;
//       });
//       // return prevPromise.then(nextPromise);
//     }, Promise.resolve(initVal));
//   };
// }

// var add1mul3 = compose(mul5, mul3, add1);
// add1mul3(4, function (err, result) {
//   // result now equals 15
//   console.log(err, result);
// });

// 串行执行promise
// function runPromiseByQueue(promises) {
//   return promises.reduceRight((prev, next) => {
//     return prev.then(next);
//   }, Promise.resolve());
// }

// const createPromise = (time, id) => () =>
//   new Promise((solve) =>
//     setTimeout(() => {
//       console.log("promise", id);
//       solve();
//     }, time)
//   );

// runPromiseByQueue([
//   createPromise(3000, 1),
//   createPromise(2000, 2),
//   createPromise(1000, 3),
// ]);

// 串行执行promise, 带参数
// function runPromiseByQueue(promises, arg) {
//   return promises.reduceRight((prev, next) => {
//     return prev.then(next);
//   }, Promise.resolve(arg));
// }
// same as
async function runPromiseByQueue (promises, arg) {
  let res = arg
  for (const promise of promises) {
    res = await promise(res)
  }
  console.log('runPromiseByQueue res', res)
  return res
}

const createPromise = (time, id) => {
  return (res) => {
    return new Promise((solve) =>
      setTimeout(() => {
        console.log("promise", id, res)
        const newRes = ++res
        solve(newRes)
      }, time)
    )
  }
}
const rRes = runPromiseByQueue(
  [createPromise(100, 1), createPromise(100, 2), createPromise(100, 3)],
  10
)
// console.log('rRes', rRes);
rRes.then(val => { console.log('rRes is', val) })
