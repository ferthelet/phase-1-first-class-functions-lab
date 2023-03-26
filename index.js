// Code your solution in this file!
// js

const returnFirstTwoDrivers = function(names) {
    return names.length >= 2 ? names.slice(0, 2) : undefined;
}

const returnLastTwoDrivers = function(names) {
    return names.length >= 2 ? names.slice(-2) : undefined;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    // was not working b/c of the missing return when using {}
    return (fare) => fare * num; 
    // OR
    // return function (fare) {
    //     return fare * num;
    // }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(names, callback) {
    return callback(names);
}
