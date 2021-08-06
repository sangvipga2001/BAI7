import React from 'react';
import './Card.scss';
import MusicItem from '../MusicItem/MusicItem';

function Card(props) {

    const { data } = props;

    return (
        <div className="card">
            {
                data.map((item, index) => (
                    <MusicItem item={item} key={index} />
                ))
            }
        </div>
    )
}

export default Card;