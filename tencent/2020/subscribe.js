
let sub = {};



sub.on = function(type, callback){
  sub[type] = sub[type] ? sub[type] : {};
  if(!sub[type].list){
    sub[type].list = [];    
  }
  sub[type].list.push(callback);
};

sub.trigger = function(type){
  let callbackList = sub[type].list;
  // console.log(callbackList)
  while (callbackList.length) {
    let cb = callbackList.shift();
    // console.log(cb);
    typeof cb === "function" ? cb() : "";
  }
}

// 
sub.on("click", function(){
  console.log("click");
});
sub.trigger("click");