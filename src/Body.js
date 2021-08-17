import React from 'react';
import './Body.css';
import { useDataLayer } from './Datalayer';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Songrow from './Songrow';

function Body(props) {

    const [ {discovery_weekly} , dispatch ] = useDataLayer();

    return (
        <div className = 'body'>
            <Header spotify = {props.spotify}/>
            <div className = 'body__info'>
                <img alt = '' src = {discovery_weekly?.images[0]?.url}/>
                <div className = 'body__infotext'>
                    <strong>Playlists</strong>
                    <h2>Discover weekly</h2>
                    <p>{discovery_weekly?.description}</p>
                </div>
            </div>
            <div className = 'body__songs'>
                <div className = 'body__icons'>
                    <PlayCircleFilledIcon className = 'body__shuffle'/>
                    <FavoriteIcon fontSize = 'large'/>
                    <MoreHorizIcon/>
                </div>
                
                {discovery_weekly?.tracks.items.map((item) => (
                    <Songrow track = {item.track}/>
                ))}
                
            </div>
        </div>
    )
}

export default Body
