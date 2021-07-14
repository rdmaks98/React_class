import React from 'react' 

const img = './images/1.jpg';
const Hookexample = () => {

    let newTime = new Date().toLocaleTimeString()
    let [current_t, upTime] = React.useState(newTime)
    const refTime = () => {
        newTime = new Date().toLocaleTimeString()
        upTime(newTime)
    }
    setInterval(refTime,4000)
    return (
        <>
           <p>{current_t}</p>
           <button onClick={refTime}>Get Time</button>
           <img src={img} />
        </>
    )
}

export default Hookexample
