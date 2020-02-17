// my code

function romanToNum(s) {

  let result = 0;
  let num;
  for(let i = 0 ; i < s.length ; i++) {

    if (s[i] === 'I') {
      if(s[i + 1] === 'V'){
        num = 4;
        i++;
      } else if(s[i + 1] === 'X') {
        num = 9;
        i++;
      }else{
        num = 1;
      }
    } else if(s[i] === 'V') {
      num = 5;
    } else if(s[i] === 'X') {
      if(s[i + 1] === 'L'){
        num = 40;
        i++;
      } else if(s[i + 1] === 'C') {
        num = 90;
        i++;
      }else{
        num = 10;
      }
    } else if(s[i] === 'L') {
      num = 50;
    } else if(s[i] === 'C') {
      if(s[i + 1] === 'D'){
        num = 400;
        i++;
      } else if(s[i + 1] === 'M') {
        num = 900;
        i++;
      }else{
        num = 100;
      }
    } else if(s[i] === 'D') {
      num = 500;
    } else if(s[i] === 'M') {
      num = 1000;
    }
    result = result+num;
  }
  return result;

}

romanToNum('MCMXCIV');


// model solution
function romanToNum(s) {
  let matching = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }

  let strArr = s.split('');
  let numArr = strArr.map(el => matching[el]);
  let sum = 0;

  for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] < numArr[i+1]) {
          sum += (numArr[i+1] - numArr[i]);
          i++;
      } else {
          sum += numArr[i];
      }
  }

  return sum;
}
