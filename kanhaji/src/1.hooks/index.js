import React, { useState } from 'react'

// 1. js logic 
// let count = 1;
// const incr = () => {
//   count++;
//   document.getElementById("count_val").innerHTML = count
// }



const Index = () => {
  //2. work on the hook 
  const state = useState() // without react
  const state1 = React.useState() // with react
  // varible ,function
  const [count, setCount] = useState(0)

  const incr = () => {
    setCount(count + 1)
  }

  const decr = () => {
    setCount(count - 1)
  }

  const rese = () => {
    setCount(0)
  }

  return (
    <>
      {/* 1.js logic */}
      {/* <p id="count_val">{count}</p>
        <button onClick={incr}>click me</button> */}

      {/* 2 . hooks concept */}
      <p>{count}</p>
      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>
      <button onClick={rese}>reset</button>
    </>
  )
}

export default Index
