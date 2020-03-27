function getMax(arr){
  let maxCount = 0;
  for (let index = 0; index < arr.length; index++) {
    let tempCount = 0;
    let copyArr = [...arr];
    for (let j = 1; j < copyArr.length-1; j++) {
      const element = copyArr[j];
      let prev = copyArr[j-1];    
      let next = copyArr[j+1];
      if(prev){
        // 前一个不存在
        prev = 1;
      }
      if(next){
        next = 1;
      }
      tempCount = tempCount + (prev * element * next);
      // 删除下标j
      copyArr.splice(j,1);      
    }
    // 每一轮结束和以前所有轮的最大值比较
    if(maxCount<tempCount){
      maxCount = tempCount;
    }
  }
  return maxCount;
}

console.log(getMax([3,1,5,8]));


function isOk(arr){
  let index = 0; let prevIndex = 0;
  while (index<arr.length) {
    const element = arr[index];
    prevIndex = index;
    if(element===0 && arr[arr.length-1] !== element){
      return false;
    }
    if(index === arr.length-1){
      return true;
    } else{
      for (let j = element; j > 0; j--) {
        index += j; 
        if(index === arr.length-1){
          return true;
        }       
      }
      // 如果走不通则需要向前移动一个位置
      index = prevIndex++;      
    }
  }
  return true;
}

