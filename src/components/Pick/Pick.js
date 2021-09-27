import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import './Pick.css';

const Pick = (props) => {
    const { pick } = props;

    let total = 0;
    for (const count of pick) {
        total = total + count.fee;
    }

    const iconTwo = <FontAwesomeIcon icon={faUserCheck} />

    return (
        <div>
            <h4>{iconTwo} Selected Members : <br /><span className="white">{props.pick.length}</span></h4>
            <p>Collected Amount : <br /><span className="white"><b>{total}</b></span> BDT</p>
            <h3>Member Lists: <br /></h3>
            <div>
                {
                    pick.map(person =>
                        <div style={{ marginBottom: "10px", color: "white" }} key={person.id}>{<img style={{ width: "50px", height: "50px", borderRadius: "50px" }} src={person.img} alt="" />} <br /> {person.name}</div>
                    )
                }
            </div>
        </div >
    );
};
export default Pick;