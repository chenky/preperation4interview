/*
1. set, map, weakmap与Array，object的区别及使用场景
答：区别：
    Set是无重复元素的有序列表，map是集合内含有多组键值对，每个元素分别存储键值。
    对象属性名必须是不重复的字符串类型
    检测属性是否存在，有歧义，比如obj.count或者用in，两者都有问题count为0，或原型有count属性
    set，map，weakMap是可枚举集合，可直接使用for of，forEach等遍历
    weakMap当集合中的对象引用被清除时，集合中引用会清除，对象值弱引用
    weakSet add方法必须传入对象，否则报错，has，delete方法传入非对象会返回false,不支持迭代，forEach，size属性
    weakMap键名必须是一个弱对象，否则报错，所以适合对象作为键名，不支持forEach,size,clear()

2. nodejs中的内存限制，及如何读取大文件
答：v8引擎是受内存限制的，64位大概1464M，32位位732M；buffer内存不是v8引擎分配，是堆外内存，读取大文件使用createReadStream,或者buffer， 通过数组push方式拼接
*/

/*
3. 使用xhr方式提交post请求，a.qq.com提交到b.qq.com，所以需要设置为共同父域
*/
function createXhr(method, url, params, callback){
  document.cookie.domain = "example.com";
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onreadystatechange =function(event){
      if(xhr.readyState===4|| xhr.readyState===200){
          callback(xhr.responseText);
      }
  }
  xhr.send(params);
}



class EventEmitter {
  constructor(){
      this.sub = {};
  }

  on=(eventType, callback)=>{
      this.sub[eventType] = this.sub[eventType] || {}
      // let callbackList = this.sub[eventType].list;
      if(!this.sub[eventType].list){
          this.sub[eventType].list = [];
      }
      this.sub[eventType].list.push(callback);
  }
  one = (eventType, callback)=>{
      let callbackList = this.sub[eventType].list;
      let index = callbackList.indexOf(callback);
      typeof callback === "function" ? callback() : "";
      callbackList.splice(index, 1);
  }
  off = (eventType, callback) =>{
      // 遍历删除
      let callbackList = this.sub[eventType].list;
      let index = callbackList.indexOf(callback);
      // 删除指定事件回掉
      callbackList.splice(index,1);
  }
  emit=(eventType, data)=>{
      let callbackList = this.sub[eventType].list;
      while (callbackList.length) {
          let cb = callbackList.shift();
          typeof cb === "function" ? cb(data) : "";
      }
  }
}


function getMinInCache(cache){
  let min = Number.MAX_SAFE_INTEGER;
  let minkey;
  for (const key in cache) {
      if (cache.hasOwnProperty(key)&& key!=="total") {
          const element = cache[key];
          const {value, count} = element;
          if(min>count){
              min = count;
              minkey = key;
          }
      }
  }
  return minkey;
}

function getID(){
  // id:{value, count:使用次数}total: 总字节数
  let cache = {};
  return function(id){
      if(cache[id]){
          cache[id].count++;
          return cache[id].value;
      }
      let data = getDataFromServer();
      const {key,value} = data;
      let dataLen = value.length*2;
      if(cache[total]+dataLen<5*1000*1000){
          cache[total] += dataLen;
          cache[key].count++;
          cache[key].value = value;
          return cache[key].value
      } else{
          // 超过5m
          // 找到使用次数最少的
          while (cache[total]+dataLen>5*1000*1000) {
              let minkey = getMinInCache(cache);
              delete cache[minkey];
          }
          cache[key].count++;
          cache[total] += dataLen;
          return cache[key].value = value;
      }
  }
}