import React from 'react';
import './resultCard.css';

function ResultCard (props){
    const {restObj} = props;
    return (
        <div className="ResultCard">
            <img className="RestaurantImage" src={restObj.image_url} alt={restObj.name} />
            <div className="RestaurantDetail">
                <p className="RestName">{restObj.name}</p>
                <p className="RestAddress">{restObj.address}</p>
                <p className="RestCity">{restObj.city}</p>

            </div>
            <div className="RestaurantPhone">
                <p className="RestPh">Phone no - {restObj.phone}</p>
                <p className="RestPrice">Price - {restObj.price}</p>
            </div>
            <div className="ReserveDiv">
                <a className="ReserveLink" href={restObj.reserve_url} rel="noopener noreferrer" target="_blank">Reserve</a>
            </div>

        </div>
    )
}

export default ResultCard;