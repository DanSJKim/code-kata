// My Code

function getMaxArea(height) {
   let maxArea = 0;
    let minHeight = 0;
  for(let i = 0 ; i < height.length-1 ; i++) {

    for(let j = i+1 ; j < height.length ; j++) {

      if(height[i] > height[j]){
        minHeight = height[j];
      }else{
        minHeight = height[i];
      }

      if(maxArea < minHeight * (j-i)){
        maxArea = minHeight * (j-i);
      }
    }
  }
  return maxArea;
}

console.log(getMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))


// Model Soultion

function getMaxArea(height) {
    let size = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i+1; j < height.length; j++) {
            size = Math.max(Math.min(height[i], height[j]) * (j-i), size);
        }
    }

    return size;
}
