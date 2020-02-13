// String 형인 str 인자에서 중복되지 않은 알파벳으로 이루어진 제일 긴 단어의 길이를 반환해주세요.

// My Code
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


// Solution Code
function getLengthOfStr(s) {
    let strArr = [];
    let prevStrArr = [];
    console.log(s)
    for (let i = 0; i < s.length; i++) {

      console.log('=======================', i);

        let ss = s.slice(i, i+1);
        console.log(' 검사 ss ==> ', ss);
        for (let j = 0; j < strArr.length; j++) {
            if (ss === strArr[j]) {

                if (prevStrArr.length < strArr.length) {
                    prevStrArr = strArr.slice();
                    console.log('prevStrArr에 저장', prevStrArr);
                }

                strArr = strArr.splice(j+1, strArr.length);
                console.log('자르고 다시 시작 strArr', strArr, j)
                             //splice arr 자르는 함수
                break;
            }
        }

        strArr.push(ss);
        console.log('추가한 후 strArr', strArr);
    }

    return Math.max(strArr.length, prevStrArr.length);
}

console.log(getLengthOfStr('taaaytts'));
