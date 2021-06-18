import React from "react";
import { Add, Sub, mul, div } from "./calculator";

function Display() {
  return (
    <>
      <ol>
        <li>Sum is {Add(5, 67)}</li>
        <li>Subtraction is {Sub(2, 29)}</li>
        <li>Multiplaction is {mul(4, 8)}</li>
        <li>Divison is {div(40, 5)}</li>
      </ol>
    </>
  );
}

export default Display;
