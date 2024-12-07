import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <>
                <div className="card border-0" style={{ width: "18rem", borderRadius: "1rem" }}>
                    <img src={props.src} className="card-img-top" style={{ borderRadius: "1rem" }} alt="..." />
                    <div className="card-body">
                        <h5 style={{ textAlign: "center" }}>{props.text}</h5>
                    </div>
                </div>
        </>
    )
}

export default Card;