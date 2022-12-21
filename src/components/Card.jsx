import React from "react";


import Button from "./Button";


function Card(props) {
    return <section className="card">
        <div className="content">
            <img src={props.img} alt={props.carType} />
        <h2>{props.carType}</h2>
        <p>{props.description}</p>
        </div>
        <Button classProp={props.class}/> 
    </section>
}

export default Card;