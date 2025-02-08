"use strict";
/**
 * Calculate new rate for winner
 * @param {number} winnerRate - Rate of member
 * @param {number} looserRate - Rate of rival
 * @returns {number} New rate for member
 */

function calculateNewRate(winnerRate, looserRate) {
  if (
    winnerRate < 0 ||
    looserRate < 0 ||
    typeof winnerRate !== "number" ||
    typeof looserRate !== "number" ||
    Number.isNaN(winnerRate - looserRate)
  ) {
    return NaN;
  }

  if (winnerRate >= looserRate) {
    const difference = winnerRate - looserRate;
    if (difference >= 0 && difference <= 2) {
      return winnerRate + 2;
    }
    if (difference > 2 && difference < 20) {
      return winnerRate + 1;
    }
    if (difference >= 20) {
      return winnerRate;
    }
  }
  if (winnerRate === 0) {
    return looserRate;
  }
  if (winnerRate < looserRate) {
    return (looserRate - winnerRate + 5) / 3 + winnerRate;
  }
}

let winnerScore = 13;
let looserScore = 5;
console.log(calculateNewRate(winnerScore, looserScore).toFixed(1));
