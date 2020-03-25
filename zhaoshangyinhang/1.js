// 判断子串正序反序是否相等
function isSymmetric(word){
    let len = word.length;
    if(len===1){
      return true;
    }
    for (let index = 0,j=len-1; index<j; index++, j--) {
        if(word[index] !== word[j]){
            return false;
        }                
    }
    return true;
}

function getSub(str){
  let res = [];
  for (let index = 0; index < str.length; index++) {
    // const element = str[index];
    // const temp = [];
    // for (let j = index; j < str.length; j++) {
    //   const element = str[j];
    //   if(isSymmetric(element)){
    //     temp.push(element);
    //   }
    // }
    // let len = 1;
    // while (len<str.length) {
    //   const tempWord = str.substr(index, len);
    //   if(isSymmetric(tempWord)){
    //     temp.push(tempWord);
    //   }
    //   len++;
    // }
    for (let j = index+1; j <= str.length; j++) {
      const element = str.substring(index, j);
      if(isSymmetric(element)){
        res.push(element);
      }
    }
    // res.push(temp);
  }
  return res;
}

console.log(getSub("oox"));