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

/*
给定一个非负整数数组，从数组首位开始前进，元素数值即为当前前进的“最大”步数，实现一个函数判断是否可以走到数组末尾位置
数组从后往前遍历，如果当前元素大于0，则continue，否则需要的步数+1，如果遍历到第一个元素需要到步数为0则返回true，否则返回false
*/
function canGo2ArrEndPos(arr){
  let needStep = 0;
  let len = arr.length;
  for (let index = len-2; index >= 0; index--) {
    const element = arr[index];
    if(element===0){
      needStep++;
    } else {
      if(element>needStep){
        needStep = 0;
        continue;
      } else {
        return false;
      }
    }
  }
  if(needStep===0){
    return true;
  }
  return false;
}
console.log(canGo2ArrEndPos([3,2,1,0,4]));
console.log(canGo2ArrEndPos([2,3,1,1,4]));
console.log(canGo2ArrEndPos([2,0,2,1,1,1]));
console.log(canGo2ArrEndPos([2,4,0,0,0,2,1]));
console.log(canGo2ArrEndPos([2,4,0,1,1,0,1]));
