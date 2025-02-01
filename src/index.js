"use strict";
/**
 *
 * @param {number} memberRate - Rate of member
 * @param {number} rivalRate - Rate of rival
 * @returns New rate for member
 */

function calculateNewRate(memberRate, rivalRate) {
  if (typeof memberRate === "number" && memberRate >= 0) {
    if (memberRate >= rivalRate) {
      const DIFFERENCE = memberRate - rivalRate;
      if (DIFFERENCE >= 0 && DIFFERENCE <= 2) {
        return memberRate + 2;
      } else if (DIFFERENCE > 2 && DIFFERENCE < 20) {
        return memberRate + 1;
      } else if (DIFFERENCE >= 20) {
        return memberRate;
      }
    } else if (memberRate <= rivalRate) {
      let newRate = (rivalRate - memberRate + 5) / 3;
      return newRate.toFixed(1);
    } else if (memberRate === 0) {
      return rivalRate;
    }
  } else {
    return "Invalid imput of rate (it must be numbers)";
  }
}
