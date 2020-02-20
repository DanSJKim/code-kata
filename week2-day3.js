// My Code

function isValid(s) {

  let arr = []
  let isValid = false;
  for(let i = 0 ; i < s.length ; i++) {
    arr.push(s[i]);

    if(arr[i] === ']') {
      if(arr[i-1] === '['){
        arr.pop();
        arr.pop();
        isValid = true;
      }else{
        isValid = false;
        break;
      }
    } else if(arr[i] === ')') {
      if(arr[i-1] === '(' ) {
        arr.pop();
        arr.pop();
        isValid = true;
      }else{
        isValid = false;
        break;
      }
    } else if(arr[i] === '}') {
      if(arr[i-1] === '{' ) {
        arr.pop();
        arr.pop();
        isValid = true;
      }else{
        isValid = false;
        break;
      }
    }
  }
  return isValid;
  console.log('isValid: ', isValid);
}

isValid('{()}');




// Model Solution

//isValid 함수 설명 37번째줄부터 되어있습니다.
//확인해보세요!
function isValid(s) {
  let matching = {
      '(': ')',
      '[': ']',
      '{': '}'
  };

  let closeArr = [];
  let openArr = [];
  let sArr = s.split('');
  let result = true;

  for (let i = 0; i < sArr.length; i++) {
      let thisStr = sArr[i];
      let closeForOpen = matching[thisStr];
      if (closeForOpen) {
        openArr.push(thisStr);
        closeArr.unshift(closeForOpen);
      }
      else {
        if (thisStr === closeArr[0]) {
          closeArr.shift();
          openArr.pop();
        } else {
          result = false;
          break;
        }
      }
  }

  return result && closeArr.length === 0;
}


//s가 '({})' 라고 가정하겠습니다.
function isValidForCommnet(s) {
  let matching = {
      '(': ')',
      '[': ']',
      '{': '}'
  };

  let closeArr = [];
  let openArr = [];
  let sArr = s.split('');
  let result = true;

  //sArr = ['(', '{', '}', ')'] 입니다.
  //sArr을 for문 돌리면서
  //시작괄호는 openArr에 넣어주고,  ex) openArr = ['(', '{']
  //끝 괄호는 closeArr에 넣어서,    ex) closeArr = ['}', ')']
  //openArr 마지막번째 괄호가 closeArr의 첫번째괄호랑 맞아야 된다는걸 확인하면 됩니다.
  for (let i = 0; i < sArr.length; i++) {
      let thisStr = sArr[i];

      //이번 순서의 괄호(thisStr)가
      //시작괄호-(,[,{- 이라면, matching에 key로 존재하니까
      //closeForOpen가 ) or ] or } 일것이고,
      //끝 괄호라면 undefined 이겠죠.
      let closeForOpen = matching[thisStr];

      //thisStr가 시작괄호여서 closeForOpen가 존재한다면,
      if (closeForOpen) {

        //openArr에 하나씩 push합니다.
        openArr.push(thisStr);
        //closeArr에는 앞쪽에서 unshift합니다.
        closeArr.unshift(closeForOpen);

      }
      //closeForOpen가 존재하지 않는다는 뜻은 thisStr가 끝괄호라는 뜻
      else {
        //이번 괄호인 thisStr가 끝괄호면 closeArr에 무조건 첫 번째에 있어야 합니다.
        if (thisStr === closeArr[0]) {
          //제대로 괄호가 여닫기 됐으므로,
          //closeArr의 첫번째 요소를 제거해주고
          //해당 끝괄호랑 매치되는 openArr의 첫 요소도 제거해줍니다.
          closeArr.shift();
          openArr.pop();
        } else {
          //thisStr가 끝괄호인데,
          //closeArr의 첫 번째 요소에 있지 않다는 뜻은 제대로 여닫기가 안 된 것이므로
          //for문을 break로 끝내줍니다.
          result = false;
          break;
        }
      }
  }

  return result && closeArr.length === 0;
}
