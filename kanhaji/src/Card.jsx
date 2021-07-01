 import React from 'react'

const Card = (props) => {
     return (<>
        <div className="col-lg-4 col-xl-4 col-md-4">
            <div className="card" style={{width: "18rem;" }}>
                <img src={props.img} className="card-img-top img-fluid" style={{height:"200px",width:"200px;"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <p className="btn btn-primary">Go somewhere</p>
                </div>
            </div>
        
        </div>
     </>);
 }
 
 export default Card;