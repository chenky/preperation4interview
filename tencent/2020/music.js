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
function createXhr(method, url, params, callback) {
  document.cookie.domain = "example.com";
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onreadystatechange = function(event) {
    if (xhr.readyState === 4 || xhr.readyState === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send(params);
}

/*
4. 事件的发布订阅模式
*/
class EventEmitter {
  constructor() {
    this.sub = {};
  }

  on = (eventType, callback) => {
    this.sub[eventType] = this.sub[eventType] || {};
    // let callbackList = this.sub[eventType].list;
    if (!this.sub[eventType].list) {
      this.sub[eventType].list = [];
    }
    this.sub[eventType].list.push(callback);
  };
  one = (eventType, callback) => {
    let callbackList = this.sub[eventType].list;
    let index = callbackList.indexOf(callback);
    typeof callback === "function" ? callback() : "";
    callbackList.splice(index, 1);
  };
  off = (eventType, callback) => {
    // 遍历删除
    let callbackList = this.sub[eventType].list;
    let index = callbackList.indexOf(callback);
    // 删除指定事件回掉
    callbackList.splice(index, 1);
  };
  emit = (eventType, data) => {
    let callbackList = this.sub[eventType].list;
    while (callbackList.length) {
      let cb = callbackList.shift();
      typeof cb === "function" ? cb(data) : "";
    }
  };
}


/*
  先进先出缓存算法，fifo
  reference: https://zhuanlan.zhihu.com/p/36526740
*/
class FIFOCache {
  constructor(capacity) {
    this.capacity = capacity;
    // {key1:val1,key2:val2,...}
    // 增加一个变量，就不用遍历了
    this.map = {};
    this.keys = [];
  }
  get(key) {
    return this.map[key];
  }
  set(key, value) {
    let capacity = this.capacity;
    let map = this.map;
    let keys = this.keys;
    if (capacity === keys.length) {
      // 超标了, map,keys need delete
      delete map[keys.shift()];
    }
    keys.push(key);
    map[key] = value;
  }
}

/*
  LRU最近最少使用算法
  LRU（Least recently used，最近最少使用）算法。该算法的观点是，最近被访问的数据那么它将来访问的概率就大，缓存满的时候，优先淘汰最无人问津者
  reference: https://zhuanlan.zhihu.com/p/36526740
*/
class LruCache {
  constructor(limit) {
    this.limit = limit || 10;
    //head 指针指向表头元素，即为最常用的元素
    this.head = this.tail = undefined;
    // map是node节点集合{key1:{prev:1,value:val1,next:2},key2:{...}...}
    this.map = {};
    this.size = 0;
  }
  get(key, isReturnNode) {
    let node = this.map[key];
    // 如果查找不到含有`key`这个属性的缓存对象
    if (node === undefined) return undefined;
    // 如果查找到的缓存对象已经是 head (最近使用过的)
    if (node === this.head) {
      // 是的话，皆大欢喜，不用移动元素，直接返回
      return isReturnNode ? node : node.value;
    } else {
      // 不在链表头部，则需要移动
      let prev = node.prev;
      let next = node.next;
      if (node === tail) {
        // 说明node在队列尾部
        // 队尾更新节点
        this.tail = prev;
        this.tail.next = undefined;
      } else {
        // 删除node节点的指向
        prev.next = next;
        next.prev = prev;
      }
      // node节点插入到队列首位
      node.next = head;
      node.prev = undefined;
      this.head.prev = node;
      this.head = node;
    }
    return isReturnNode ? node : node.value;
  }
  set(key, value) {
    // 之前的算法可以直接存k-v但是现在要把简单的 k-v 封装成一个满足双链表的节点
    //1.查看是否已经有了该节点
    let node = this.get(key, true);
    //判断缓存是否达到上限
    //达到了，要删最后一个节点了。
    if (this.size === this.limit) {
      this.tail = this.tail.prev;
      //平滑断链之后，销毁当前节点
      this.tail.next = undefined;
      delete this.map[key];
      //当前缓存内存释放一个槽位
      this.size--;
    }
    // 缓存中有这个节点
    if (!node) {
      node = {};
    }
    node.value = value;
    this.map[key] = node;
    // 插入到队列首位
    if (this.head) {
      // head存在
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++; //减少一个缓存槽位
  }
}
