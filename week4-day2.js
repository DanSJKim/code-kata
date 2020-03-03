// My Code
const maxProfit = prices => {
  let profit = 0;
  let max;
  
  for(let i = 0 ; i < prices.length ; i++) {
    // 구매 가격
    let buy = prices[i];
    max = 0
    
    // 가장 높은 판매 가격
    for(let j = i+1 ; j < prices.length ; j++) {
      if(prices[j] > max){
        max = prices[j];
      }
    }
    
    // 가장 높은 거래 이익
    if(max-buy > profit) {
      profit = max-buy;
    }
  }
  
  return profit;
};

maxProfit([7,1,5,3,6,4]);

// Model Solution
const maxProfit = prices => {
    var min = Number.MAX_SAFE_INTEGER; 
    var max = 0;

    for (var i = 0; i < prices.length; i++) {
      // 현재 인덱스 값과 저장되어 있는 min 비교 후 더 작은 값을 min으로 저장
      min = Math.min(min, prices[i]);
      // 현재 인덱스와 방금 저장 된 min을 뺀 값이 max값보다 크면 max에 새로 저장
      max = Math.max(max, prices[i] - min);
    }
    return max;
};

maxProfit([7,2,9,3,1,2]);