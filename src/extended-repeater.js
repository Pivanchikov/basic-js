module.exports = function repeater (str, options) {
    if (options.hasOwnProperty('addition')){
         let addition = options.addition;
          if (options.hasOwnProperty('additionRepeatTimes') && options.additionRepeatTimes !== undefined){
            let length = 1
            if (options.hasOwnProperty('additionSeparator')){
              addition += options.additionSeparator;
             length = options.additionSeparator.length
            } else {
              addition += '|'
            }
            addition = addition.repeat(options.additionRepeatTimes);
            addition = addition.slice(0, -length)
          }
        str += addition;
      }
      let length = 1;
  
      if (options.hasOwnProperty('repeatTimes') && options.repeatTimes !== undefined){
        if (options.hasOwnProperty('separator')){
        str += options.separator
        length = options.separator.length
      } else {
        str += '+'
      }
  
        str = str.repeat(options.repeatTimes)
        str = str.slice(0, -length)
      }
  
      return str
  };
  
