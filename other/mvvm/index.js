function Vue(opts){
  let self = this;
  this.data = opts.data;
  this.methods = opts.methods;
  
  // 代理对象
  Object.keys(this.data).forEach((key)=>{
    self.proxyObj(key);
  });
  // 观察对象
  observe(this.data);
  // 编译模板
  new Compile(opts.el, this);

  opts.methods.mounted.call(this);
}

Vue.prototype = {
  proxyObj(key){
    let self = this;
    Object.defineProperty(this.data, key, {
      enumerable: false,
      configurable: true,
      get: function(){
        return self.data[key];
      },
      set: function(newVal){
        self.data[key] = newVal;
      }
    });
  }
}