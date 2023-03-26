// Code your solution in this file!
// js

const returnFirstTwoDrivers = function(names) {
    return names.length >= 2 ? names.slice(0, 2) : undefined;
}

const returnLastTwoDrivers = function(names) {
    return names.length >= 2 ? names.slice(-2) : undefined;
}

