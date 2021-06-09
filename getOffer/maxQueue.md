![剑指 Offer 59 - II. 队列的最大值](asset/maxQueueDeque.gif)

```javascript
/**
 *剑指 Offer 59 - II. 队列的最大值
 https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/solution/ru-he-jie-jue-o1-fu-za-du-de-api-she-ji-ti-by-z1m/
 */
var MaxQueue = function () {
  this.queue = [];
  this.deque = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  return this.deque.length ? this.deque[0] : -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  while (this.deque.length && this.deque[this.deque.length - 1] < value) {
    this.deque.pop();
  }
  this.queue.push(value);
  this.deque.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.deque.length < 1) return -1;
  const first = this.queue.shift();
  if (first === this.deque[0]) {
    return this.deque.shift();
  }
  return first;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```
