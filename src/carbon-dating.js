const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports =function dateSample(sampleActivity) {
            let i = 0;
            if (typeof(sampleActivity) != "string") {
                  return false;
            }
            if (sampleActivity <= 0 || sampleActivity > 15 ) {
                  return false;
            }
            if (sampleActivity.match(/^[a-z]/i)){
                  return false;
            }
            if (sampleActivity.match(/\d+\.\d+\./g)){
                      i= sampleActivity.match(/^(\d+\.\d+)/);
                      sampleActivity = i[0];
            }
            let k = 0.693/HALF_LIFE_PERIOD;
            let f = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
            return f
           
      };
