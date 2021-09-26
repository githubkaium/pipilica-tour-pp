import React from 'react';
import './Pick.css';

const Pick = (props) => {
    const { pick } = props;
    let total = 0;
    for (const count of pick) {
        total = total + count.fee;
    }

    return (
        <div>
            <h4>Selected Members: {props.pick.length}</h4>
            <p>Collected Amount: {total} Taka</p>
        </div>
    );
};

export default Pick;