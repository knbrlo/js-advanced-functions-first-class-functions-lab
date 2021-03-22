
const returnFirstTwoDrivers = function(arrayDrivers) {
    return arrayDrivers.slice(0, 2);
}

const returnLastTwoDrivers = function(arrayDrivers) {
    return arrayDrivers.slice(arrayDrivers.length - 2, arrayDrivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayDrivers, functionToUse) {
    return functionToUse(arrayDrivers);
}
