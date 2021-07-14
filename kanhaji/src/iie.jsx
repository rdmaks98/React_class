import React from "react";
import "./index.css";
const img = './img/abc.jpg';


const i_style = {
  color: "lightgray",
};

const name = "R.D.Makvana";
const cityname = "i belongs to ahemdabad";
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

function Iie_css() {
  return (
    <>
      {/* inline css */}
      <p style={{ color: "pink" }}>
        {name},{cityname}
      </p>
    <img src={img} />
      {/* internal  */}
      <p style={i_style}>Today date:{date}</p>

      {/* external */}
      <p className="h1">Now time{time}</p>
    </>
  );
}
export default Iie_css;
