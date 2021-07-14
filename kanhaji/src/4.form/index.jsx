// import React from 'react'

// const Index = () => {

//     // let name = "rinky";

//     const [name, Inputname] = React.useState("");
//     // take value from input
//     let textInput = (e) => {
//         Inputname(e.target.value);
//     }

//     const [pname, Getname] = React.useState("");
//     // set value from button
//     let save = () => {
//         Getname(name);
//     }

//     return (
//         <>
//             {/* Q: i have take name in textbox then button save it show in the p tag so how can do it ?. */}
//             <p>Heyy {pname}</p>
//             <input type="text" placeholder="Enter your name" onChange={textInput} /><br></br>
//             <button onClick={save}>Save</button>
//         </>
//     )
// }

// export default Index
import React, { useState } from "react";
// import "./TodoList.css";
import Todo from "./Todo.jsx";
const Index = () => {
    const [inputlist, setInputList] = useState("");
    const [itemVal, setItemVal] = useState([]);
    let listItems = () => {
        setItemVal((olditem) => {
            return [...olditem, inputlist];
        });
        setInputList("");
    };
    let itemEvent = (e) => {
        setInputList(e.target.value);
    };
    const deleteItem = (id) => {
        console.log(id);
        setItemVal((olditem) => {
            return olditem.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };
    return (
        <>
            <div className="main__div">
                <div className="center__div">
                    <br />
                    <h1>TodoList</h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Add Items"
                        onChange={itemEvent}
                        value={inputlist}
                    />
                    <button onClick={listItems}>+</button>
                    <br />

                    <ul>
                        {itemVal.map((val, i) => {
                            return <Todo id={i} key={i} text={val} onSelect={deleteItem} />;
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Index;
