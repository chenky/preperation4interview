/*
两个有序数组合并，要求时间复杂度是O(1)
*/
function mergeArr(arr1, arr2){
  // return arr1.concat(arr2).sort((a,b)=>a-b);
  const len1 = arr1.length, len2 = arr2.length;
  const len = len1 + len2;
  let pos1 = 0, pos2=0;
  const res = [];
  for (let index = 0; index < len; index++) {
    if(pos1<len1 && pos2 < len2){
      const el1 = arr1[pos1];
      const el2 = arr2[pos2];
      if(el1>el2){
        res.push(el2);
        pos2++;
      } else{
        res.push(el1);
        pos1++;
      }
    } else if(pos1<len1){
      // res.push(arr1[pos1])
      // pos1++;
      return res.concat(arr1.slice(pos1));
    } else if(pos2<len2){
      // res.push(arr2[pos2]);
      // pos2++;
      return res.concat(arr2.slice(pos2));
    } else{
      return res;
    }
  }
  return res;
}



console.log(mergeArr([1,2,5,7],[2,7,9,11,30]))