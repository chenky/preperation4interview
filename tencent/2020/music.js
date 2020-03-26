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