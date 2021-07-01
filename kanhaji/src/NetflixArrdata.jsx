import React from 'react';
import Card from "./Card";
import Arrdata from "./Arrdata";

const  NetflixArrdata = () =>
{
    return (<>
    <div className="row">
            {/* <Card title={Arrdata[0].title} desc={Arrdata[0].desc} img={Arrdata[0].img} />
            <Card title={Arrdata[1].title} desc={Arrdata[1].desc} img={Arrdata[1].img} />
            <Card title={Arrdata[2].title} desc={Arrdata[2].desc} img={Arrdata[2].img} />
            <Card title={Arrdata[3].title} desc={Arrdata[3].desc} img={Arrdata[3].img} /> */}

            {
                Arrdata.map(function (e,i){
                    return <>
                    <Card title={e.title} desc={e.desc}  img={e.img} />
                    </>
                })
            }
    </div>
        
    </>)
}
export default NetflixArrdata;