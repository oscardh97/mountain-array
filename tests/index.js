import isMountain from '../index.js';

const tests = {
  happy: {
    input: [ 0, 1, 2, 1, 0 ],
    expectedResult: true,
  },
};

export const checkIsMountainTestHP = () => {
  const { happy } = tests;
  const result = isMountain(happy.input);

  if (result !== happy.expectedResult) {
    throw new Error("The result didn't match with the expected result");
  }
};

checkIsMountainTestHP();
