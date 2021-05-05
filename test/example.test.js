// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { whoWon } from "../utils.js";

const test = QUnit.test;

test('should return 1 as user has one', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = whoWon('paper', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('should return 0 as tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = whoWon('paper', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('should return -1 as comp winning', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = whoWon('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
