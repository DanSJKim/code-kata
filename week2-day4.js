// My code
function topK(nums, k) {
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

  let arr=[]
  for (let i in obj){

    arr.push([i, obj[i]]);
  }

  arr.sort((a,b) => b[1] - a[1])

  result = [];
  for(let i = 0 ; i < k ; i++){
    console.log(arr[i][0]);
    result.push(parseInt(arr[i][0]))
  }

  console.log('result: ' , result)
  return result;
}

topK([1,1,1,2,2,2,2,3], 2);


// Model Solution
function topK(nums, k) {
    let obj = {};
    let arr = [];

    nums.forEach(el => {
        if (obj[el]) {
            obj[el]++;
        } else {
            obj[el] = 1;
        }
    });

    for (let properyName in obj) {
        arr.push([properyName, obj[properyName]]);
    }

    return arr.sort((a, b) => (b[1] - a[1])).slice(0,k).map(el => Number(el[0]));
}

topK([1,2,2,2,3,4,4,4,4] , 2);
