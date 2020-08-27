import React from 'react';
import './ShowAdded.css';

const ShowAdded = (props) => {
    const cartElement = props.cartElement;
    const {title, img} = cartElement;
    return (
        <div className="element-container">
            <div className="img-container">
                <img src={img} alt=""></img>
            </div>
            <div className="body-container">
                <p>{title}</p>
            </div>
            <div className="overlay"></div>
        </div>
    );
};

export default ShowAdded;