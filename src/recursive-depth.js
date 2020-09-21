module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 1;
  let maxCount = 1;

    function counter(arr) {
      
      for (let item of arr) {
        if (Array.isArray(item)){
          count++

            if (!Array.isArray(item[0])){
                if(maxCount < count) {
                maxCount = count;
                }
            count = 1;
            }

        counter(item);
        }
      }

      return maxCount
    }

  return  counter(arr)
    }
};
