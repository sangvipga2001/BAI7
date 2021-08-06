import React, { useState } from 'react';
import './MusicItem.scss';

function MusicItem(props) {
    const { item } = props;
    const { num, song, single, avatar } = item;

    return <div className='music-item'>
        <h1 className="music-item__rank">
            {num}
        </h1>
        <div className='music-item__avatar'>
            <img src={avatar} alt="" />
        </div>
        <div className="music-item__info">
            <h5 className="music-item__title">{song}</h5>
            <span className="music-item__singer">{single}</span>
        </div>
    </div>
}

export default MusicItem