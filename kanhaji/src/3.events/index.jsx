import React from 'react'

const Event = () => {
    let cb = "#fff";
    let name = "click me";

    // bgcolor purpose take state
    const [c_b, setCb] = React.useState(cb);

    const [cname, setName] = React.useState(name);

    const oneClick = () => {
        setCb("#23233f");
        setName("you have click me.........");
    }

    const doubleClick = () => {
        setCb("#4433fd");
        setName("double time click .....")
    }

    return (
        <>
            <div>
                {/* what can do here ?. */}
                {/* our task is chnagebackgroun color and button name using one click and double click */}

                <div style={{ backgroundColor: { c_b }, padding: "180px" }}>
                    <button onClick={oneClick} onDoubleClick={doubleClick}>{cname}</button>
                </div>
            </div>
        </>
    )
}

export default Event;
