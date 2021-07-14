import React from "react";
import './css/dropdown.css';

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
      {/* <h1>
        my name is:{name},{cityname}
      </h1>
      <p>{date}</p>
      <p>{time}</p> */}
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#link">Link 1</a>
          <a href="#link">Link 2</a>
          <a href="#link">Link 3</a>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
          Open modal
        </button>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body">
                Modal body..
              </div>

              {/* <!-- Modal footer --> */}
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>
      </div>


    </>
  );
}
export default Day2;
