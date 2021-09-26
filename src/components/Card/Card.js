import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props);
    const { name, img, profession, age, fee } = props.item;

    return (
        <div>
            <div className="card">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>Age: {age}</p>
                <p>Profession: {profession}</p>
                <p>Tour Fee: {fee}</p>
                <button onClick={() => props.handleAddToTour(props.item)} className="addButton">Add to Tour</button>
            </div>
        </div>
    );
};

export default Card;