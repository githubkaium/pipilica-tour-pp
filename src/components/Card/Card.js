import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const Card = (props) => {
    const { name, gender, img, profession, age, fee } = props.item;
    const iconOne = <FontAwesomeIcon icon={faUserPlus} />

    return (
        <div>
            <div className="card">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>Gender: {gender}</p>
                <p>Age: {age}</p>
                <p>Profession: {profession}</p>
                <p>Tour Fee: {fee}</p>
                <button onClick={() => props.handleAddToTour(props.item)} className="addButton">{iconOne} Add to Tour</button>
            </div>
        </div>
    );
};

export default Card;