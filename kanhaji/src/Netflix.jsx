import React from 'react';
import Card from "./Card";
const  Netflixcard = () =>
{
    return (<>
    <div className="row">
        <Card title="react" desc="react is designing language" img="https://picsum.photos/200/300" />
        <Card title="mongodb" desc="mongodb is database language" img="https://picsum.photos/200/301" />
        <Card title="angular" desc="angular is designing language" img="https://picsum.photos/200/308" />
        <Card title="mysqli"  desc="mysqli is database language" img="https://picsum.photos/200/309" />
    </div>
        
    </>)
}
export default Netflixcard;