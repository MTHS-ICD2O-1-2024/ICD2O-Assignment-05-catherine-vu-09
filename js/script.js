// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on:May 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates quadratic sequence.
 */
// eslint-disable-next-line no-unused-vars

function generateQuadratic() {
  let a = parseFloat(document.getElementById("firstNumber").value);
  let b = parseFloat(document.getElementById("secondNumber").value);
  let c = parseFloat(document.getElementById("thirdNumber").value);
  let count = parseInt(document.getElementById("termCount").value);

  let term = 1;
  let output = ""; // initialize output string

  while (term <= count) {
    let value = a * term * term + b * term + c;

    // Append the current term and its value to the output string
    output = output + "Term " + term + ": " + value + "<br>";

    term++;
  }

  // Display the complete quadratic sequence with input parameters and all terms
  document.getElementById("result").innerHTML =
    "Quadratic sequence with a=" + a + ", b=" + b + ", c=" + c + " for " + count + " terms:<br>" + output;
}
