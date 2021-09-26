import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Pick from '../Pick/Pick';
import './List.css';

const List = () => {
    const [item, setItem] = useState([]);
    const [pick, setPick] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const handleAddToTour = (item) => {
        // console.log(item.name);
        const newPick = [...pick, item];
        setPick(newPick);
    }

    return (
        // All Member lists
        <div className="list">
            <div className="item">
                {
                    item.map(item => <Card
                        key={item.id}
                        item={item}
                        handleAddToTour={handleAddToTour}
                    >
                    </Card>)
                }
            </div>

            {/* Picked Members Container */}
            <div className="selected-item">
                <Pick pick={pick}></Pick>
            </div>
        </div>
    );
};

export default List;