import React from 'react';
import './Songrow.css';

function Songrow(props) {
    return (
        <div className = 'songrow'>
            <img className = 'songrow__img' alt = '' src = {props.track.album.images[0].url}/>
            <div className = 'songrow__info'>
                <h2>{props.track.name}</h2>
                <p>
                    {props.track.artists.map((artist) => artist.name).join(',')}
                    {props.track.album.name}
                </p>
            </div>
        </div>
    )
}

export default Songrow
