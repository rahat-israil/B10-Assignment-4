


function waitingTime(waitingTimes, serialNumber) {
    
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
      return 'Invalid Input';
  }

  let totalTime = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    totalTime = waitingTimes[i] + totalTime;
  }

  const averageTime = Math.round( totalTime / waitingTimes.length );

  const remainingPeople = serialNumber - waitingTimes.length - 1;

  const isratWaitingTime = remainingPeople * averageTime;

  return isratWaitingTime;
}

console.log(waitingTime([13, 2], 6));
