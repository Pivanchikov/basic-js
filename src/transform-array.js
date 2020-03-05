module.exports = function transform(arr) {
      if (!Array.isArray(arr)){
            throw new Error();
        }
        
      const discardNext = '--discard-next';
      const discardPrev = "--discard-prev";
      const doubleNext = "--double-next";
      const doublePrev = "--double-prev";
      trans = [];
      for (let i = 0; i < arr.length; i++){
            if (arr[i] === doubleNext  && i != arr.length - 1 ){
                  if (arr[i + 1 ] != discardNext && arr[i + 1 ] != discardPrev && arr[i + 1 ] != doubleNext && arr[i + 1 ] != doublePrev )
                  {trans.push(arr[i + 1])}
            }
            if (arr[i] === doublePrev  && i != 0 ){
                  if (arr[i - 1 ] != discardNext && arr[i - 1 ] != discardPrev && arr[i - 1 ] != doubleNext && arr[i - 1 ] != doublePrev )
                 { trans.push(arr[i - 1])}
            }
            if(arr[i] != discardNext && arr[i] != discardPrev &&
             arr[i] != doubleNext && arr[i] != doublePrev && arr[i - 1] != discardNext && 
             arr[i + 1] != discardPrev ) {
                  trans.push(arr[i])  
            }
      }
      return  trans
};
