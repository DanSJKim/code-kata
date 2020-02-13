// My code
const sameReverse = num => {
  let str = num.toString();
  let result = '';


  for (let i = str.length-1 ; i > -1 ; i--) {
    result = result + str[i];
  }

  if (str === result) {
    return true;
  } else {
    return false;
  }
}
console.log(sameReverse(1221));


// Solution code
function sameReverse(num) {
  let xStrArr = (num + '').split('');
  let strLength = xStrArr.length;
  let arr = [];

  for (let i = 0; i < strLength; i++) {
      arr.push(xStrArr.pop());
  }
  console.log(Number(arr.join('')))
  return num === Number(arr.join(''));
}

console.log(sameReverse(1234567887654321));
