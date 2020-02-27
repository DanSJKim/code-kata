// My Code

const moveZeroes = nums => {
  cnt = 0;
  for(let i = 0 ; i < nums.length ; i++) {

    // 값이 0이면 맨뒤의 요소에 값을 넣고, 현재 인덱스의 0을 삭제한다.
    if(nums[cnt] === 0) {
      nums.push(nums[cnt]);
      nums.splice(cnt, 1);
    }else {
      // 값이 0이 아니면 인덱스가 넘어간다.
      cnt++;
    }
  }

  return nums
}

console.log(moveZeroes([1,0,2,0,3]))


// Model Solution
const moveZeroes = nums => {
  let last0 = 0;

  for (let i = 0; i < nums.length; i++) {

    // 값이 0이 아니면 마지막 0이었던 인덱스와 현재 인덱스 값의 자리를 교체한다.
    if (nums[i] != 0) {
      let temp = nums[i];
      nums[i] = nums[last0];
      nums[last0] = temp;

      // 마지막 0이 들어있는 인덱스를 증가시킨다.
      last0++;
    }
  }

  return nums;
}

console.log(moveZeroes([1,0,2,0,3]))
