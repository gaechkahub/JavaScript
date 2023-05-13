"use strict";
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.
 */
const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  let currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  // TODO
  // if the color is green, turn it orange
  if (currentState == "green") {
    currentState = "orange";
    console.log("The traffic light is on", currentState);
  }
  // if the color is orange, turn it red
  if (currentState == "orange") {
    currentState = "red";
    console.log("The traffic light is on", currentState);
  }
  // if the color is red, add 1 to rotations and turn it green
  if (currentState == "red") {
    currentState = "green";
    rotations++;
  }
}

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
