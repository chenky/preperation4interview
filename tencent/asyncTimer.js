let startTime = new Date()
setTimeout(function(){
  console.log("setTimeout:"+(new Date()-startTime));  
},1000) 
for (let index = 0; index < 1000000; index++) {
  const element = 1000000;
  
}
setImmediate(function(){
  console.log("setImmediate:"+(new Date()-startTime));  
})