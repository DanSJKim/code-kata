// String 형인 str 인자에서 중복되지 않은 알파벳으로 이루어진 제일 긴 단어의 길이를 반환해주세요.

const getLengthOfStr = str => {
  let cnt = 0;
  let arr = [];
  
  let maxLen = 0;
  let j = 0;
  
  for (let i = 0 ; i < str.length ; i++){
    
    while (j < str.length) {
      if(arr.indexOf(str[j]) < 0) {
        arr.push(str[j]);
      }else {
        if(arr.length > maxLen){
          maxLen = arr.length;
        }
        arr = [];
        break;
      }
      j++;
    }
    j = i;

    if(maxLen < arr.length) {
      maxLen = arr.length;
    }
  }
  return maxLen;
}

getLengthOfStr('abcdefghcijklmnop');