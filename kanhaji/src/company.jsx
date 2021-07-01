import React from "react";

function Company(props)
{
    return (<>
    <ul>{props.header}
        <li>{props.one}</li>
        <li>{props.two}</li>
        <li>{props.three}</li>
        <li>{props.four}</li>
    </ul>
    </>)
}

export default Company;