



function calculateFinalScore(obj) {
  
    if (typeof obj !== 'object') {
      return 'Invalid Input';
  }
  
  let name = obj.name;
  let testScore = obj.testScore;
  let schoolGrade = obj.schoolGrade;
  let isFFamily = obj.isFFamily;

  let totalPoint = testScore + schoolGrade;
  if (isFFamily) {
    totalPoint = totalPoint + 20;
  }

  return totalPoint >= 80;

}

console.log(
  calculateFinalScore({
    name: 'Rajib',
    testScore: 40,
    schoolGrade: 25,
    isFFamily: true,
  })
);
