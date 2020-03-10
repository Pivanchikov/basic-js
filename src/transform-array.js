module.exports = function transform(arr) {
    if (!Array.isArray(arr)){
          throw new Error();
      }
      
let arr2 = [];
for (let i=0; i < arr.length; i++){
   if (arr[i] != '--discard-prev' && arr[i] != '--double-prev' && arr[i] != '--discard-next' && arr[i] != '--double-next'){
    arr2.push(arr[i])
   }
    
    switch (arr[i+1]){
         
          case '--discard-prev':
          arr2.pop();
          break;
          case '--double-prev':
          if (arr[i] != '--discard-prev' && arr[i] != '--double-prev' && arr[i] != '--discard-next' && arr[i] != '--double-next'){
          arr2.push(arr[i])
          }
          break;
    }
   
    switch (arr[i-1]){
         
         case '--discard-next':
         arr2.pop();
         break;
         case '--double-next':
         if (arr[i] != '--discard-prev' && arr[i] != '--double-prev' && arr[i] != '--discard-next' && arr[i] != '--double-next'){
          arr2.push(arr[i])
          }
         break;
   }
}
return arr2
}
