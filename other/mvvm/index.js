
// Vue构造函数
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
    Object.defineProperty(this, key, {
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

// Dep依赖
function Dep(){
  this.subs = [];
}
Dep.prototype={
  addSub: function(sub){
    this.subs.push(sub);
  },
  notify: function(){
    this.subs.forEach(sub=>{
      sub.update();
    });
  }
}
Dep.target = null;

// 观察对象
function Observer(data){
  this.data = data;
  this.walk(data);
}
Observer.prototype={
  walk: function(data){
    let self = this;
    Object.keys(data).forEach((key)=>{
      self.defineReactive(data, key, data[key]);
    });
  },
  defineReactive: function(data,key, val){
    let dep = new Dep();
    let childObj = observe(val);
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function getter(){
        if(Dep.target){
          dep.addSub(Dep.target);
        }
        return val;
      },
      set: function setter(newVal){
        if(newVal===val) return;
        val = newVal;
        dep.notify();
      }
    });
  }
}

function observe(value, vm){
  if(!value || typeof value !== "object"){
    return;
  }
  return new Observer(value);
}

// watcher对象
function Watcher(vm, exp, cb){
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  this.value = this.get();
}
Watcher.prototype = {
  update: function(){
    this.run();
  },
  run: function(){
    let value = this.vm.data[this.exp];
    let oldVal = this.value;
    if(value !== oldVal){
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  },
  get: function(){
    Dep.target = this;
    let value = this.vm.data[this.exp];
    Dep.target = null;
    return value;
  }
}

// 编译模板
function Compile(el, vm){
  this.vm = vm;
  this.el = document.querySelector(el);
  this.fragment = null;
  this.init();
}
Compile.prototype = {
  init: function(){
    if(this.el){
      this.fragment = this.nodeToFragment(this.el);
      this.compileElement(this.fragment);
      this.el.appendChild(this.fragment);
    }
    else{
      console.log("Dom元素不存在");      
    }
  },
  nodeToFragment: function(el){
    let fragment = document.createDocumentFragment();
    let child = el.firstChild;
    while(child){
      fragment.appendChild(child);
      child = el.firstChild;
    }
    return fragment;
  },
  compileElement: function(el){
    let childNodes = el.childNodes;
    let self = this;
    [].slice.call(childNodes).forEach(node=>{
      let reg =/\{\{(.*)\}\}/;
      let text = node.textContent;
      if(self.isElementNode(node)){
        self.compile(node);
      }
      else if(self.isTextNode(node)&&reg.test(text)){
        self.compileText(node, reg.exec(text)[1]);
      }

      if(node.childNodes && node.childNodes.length){
        self.compileElement(node);
      }
    });
  },
  compile: function(node){
    let attrs = node.attributes;
    let self = this;
    Array.prototype.forEach.call(attrs, function(attr){
      let attrName = attr.name;
      if(self.isDirective(attrName)){
        let exp = attr.value
        let dir = attrName.substring(2);
        if(self.isEventDirective(dir)){
          self.compileEvent(node, self.vm, exp, dir);
        }
        else{
          self.compileModel(node, self.vm, exp, dir);
        }
        node.removeAttribute(attrName);
      }
    });
  },
  compileText: function(node, exp){
    let self = this;
    let initText = this.vm[exp];
    this.updateText(node, initText);
    new Watcher(this.vm, exp, function(value){
      self.updateText(node, value);
    });
  },
  isDirective: function(dir){

  },
  isEventDirective: function(dir){

  },
  compileEvent: function(node, vm, exp, dir){
    let eventType = dir.split(":")[1];
    let cb = vm.methods && vm.methods[exp];
    if(eventType && cb){
      node.addEventListner(eventType, cb.bind(vm), false);
    }
  },
  compileModel: function(node, vm, exp, dir){
    let self = this;
    let val = this.vm[exp];
    this.modelUpdater(node, val);
    new Watcher(this.vm, exp, function(value){
      self.modelUpdater(node, value);
    });
    node.addEventListner("input", function(e){
      let newVal = e.target.value;
      if(val === value){
        return;
      }
      self.vm[exp] = newVal;
      val = newVal;
    });
  }
}