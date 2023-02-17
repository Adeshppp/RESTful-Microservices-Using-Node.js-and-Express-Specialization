
const PerformanceCalculator=(runs,balls)=>{
      // Write the Logic here
      let battingAverage=0;
      if(balls<15 && runs>30) battingAverage=1.01*(runs/balls);
      else if(balls<20 && runs>50) battingAverage=1.10*(runs/balls);
      else if(balls<50 && runs>100) battingAverage=1.20*(runs/balls);
      else battingAverage=(runs/balls);
      return battingAverage;
}

module.exports={PerformanceCalculator}
