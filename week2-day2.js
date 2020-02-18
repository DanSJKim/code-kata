
// my code

function moreThanHalf(nums) {
  let obj = {};
  obj[nums[0]] = 0;

  // 배열길이 만큼 순회
  for(let i = 0 ; i < nums.length ; i++) {
    let cnt = 0;

    // 객체 안에 해당 키값이 있는지 확인
    for(let j in obj){

      // 배열의 현재 값이 객체 키값으로 존재하면
      if (j == nums[i]){
        // 키값 value의 값을 1 늘려준다.
        obj[j] = obj[j]+1;
        // 객체에 값이 있는지 없는지 판단해주는 변수
        cnt = 1;
      }
    }

    if (cnt === 0){
      obj[nums[i]] = 1;
    }

  }

  // 최대값
  let maxValue = Object.values(obj)[0];
  // 최대값 키
  let resultKey = Object.keys(obj)[0];

  // 객체 안의 값 중 최대 값의 키 구하기
  for (let i in obj){
    // i = key값
    if (obj[i] > maxValue){
      maxValue = obj[i];
      resultKey = i;
    }
  }
  return parseInt(resultKey);
}

console.log(moreThanHalf([1,1,1,1,4,2,3,4,5,5]))



// model solution
// function moreThanHalf(nums) {
//   let result;

//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;

//     for (let j = 0; j < nums.length; j++ ) {
//       if (nums[i] === nums[j]) {
//         sum += 1;
//       }
//     }

//     if (sum > nums.length/2) {
//       return nums[i];
//     }
//   }
// }


// or

function moreThanHalf(nums) {
  let obj = {};
  let key = '';
  let count = nums.length/2;

  for (let i = 0; i < nums.length; i++) {
      let thisNum = nums[i];

      if (obj[thisNum]) {
          obj[thisNum]++;
      } else {
          obj[thisNum] = 1;
      }

      if (obj[thisNum] > count) {
          key = thisNum;
          break;
      }
  }

  return Number(key);
}

console.log(moreThanHalf([2,2,1,1,1,2,2,3]))
