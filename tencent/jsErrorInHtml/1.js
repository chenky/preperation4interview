function test1(){
  throw new Error('erro in 1.js')
}
function test11(){
  console.log('log test11 in 1.js')
}
test1()
test11()