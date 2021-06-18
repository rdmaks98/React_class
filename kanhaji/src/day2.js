import React from "react";

const name = "R.D.Makvana";
const cityname = "i belongs to ahemdabad";
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

function Day2() {
  return (
    <>
      {/* //!day 2 here we are[js inside {html tag ,element inside (js)}] */}

      {/* chllange2 */}
      {/* 1.	Create react app from scratch
        2.	Add one h1 element with your name
        3.	Add one p element in it with current date
    4.	Add one p element in it with current time. */}
      <h1>
        my name is:{name},{cityname}
      </h1>
      <p>{date}</p>
      <p>{time}</p>
    </>
  );
}
export default Day2;
