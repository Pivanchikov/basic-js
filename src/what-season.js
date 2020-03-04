module.exports = function getSeason(date) {
  if(date === undefined) {
        return 'Unable to determine the time of year!';
  }
  {try {date.getTime();} catch(e) {throw Error(e);}}
        if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1){
               return "winter";
        };
        if (date.getMonth() > 1 && date.getMonth() < 5){
              return  "spring";
        };
        if (date.getMonth() > 4 && date.getMonth() < 8){
              return  "summer";
        };
        if (date.getMonth() > 7 && date.getMonth() < 11){
              return "autumn";
        };

  
};
