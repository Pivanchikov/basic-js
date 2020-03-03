const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports =function dateSample(sampleActivity) {
            if (typeof(sampleActivity) != "string") {
                  return false;
            }
            if (sampleActivity <= 0 || sampleActivity > 15 ) {
                  return false;
            }
            let k = 0.693/HALF_LIFE_PERIOD;
            let f = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
            return f
      };
