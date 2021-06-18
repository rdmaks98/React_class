import React from "react";

// ! challange 3
// 1.	Create react app from scratch
// 2.	Show a heading that says hello sir, good morning if time is between 1am to 11am.
// 3.	Good afternoon if 12pm to 7pm.
// 4.	Good night if 7pm to 12am
// 5.	Apply css in it, then dynamically change the color of greeting parts only using inline css style. Ex. Green, orange,black,etc.

const getHour = new Date().getHours();
let greeting;
const g_color = {};
console.log(getHour);

if (getHour >= 1 && getHour < 12) {
  greeting = "good morning";
  g_color.color = "skyblue";
} else if (getHour >= 12 && getHour <= 20) {
  greeting = "good noon";
  g_color.color = "yellow";
} else {
  greeting = "good night";
  g_color.color = "marron";
}

const Main = {
  background: "#ededfe",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  height: "100vh",
  width: "100%",
};

const good = {
  background: "#23424e",
  color: "#fff",
  padding: "20px 20px",
  textTransform: "capitalize",
};

function Greetingmsg() {
  return (
    <>
      <div style={Main}>
        <div style={good}>
          Hello Sir,
          <span style={g_color}>{greeting} </span>
        </div>
      </div>
    </>
  );
}

export default Greetingmsg;
