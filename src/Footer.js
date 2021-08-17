import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid , Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import ComputerIcon from '@material-ui/icons/Computer';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

function Footer() {
    return (
        <div className = 'footer'>
            <div className = 'footer__left'>
                <img className = 'footer__albumlogo' src = 'data:image/jpeg;base64,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' alt = ''/>
                <div className = 'footer__inform'>
                    <h3>Ed sheeran</h3>
                    <p>Bad habit</p>
                </div>
            </div>
            <div className = 'footer__middle'>
                <ShuffleIcon className = 'footer__green'/>
                <SkipPreviousIcon className = 'footer__icon'/>
                <PlayCircleOutlineIcon className = 'footer__icon'/>
                <SkipNextIcon className = 'footer__icon'/>
                <RepeatIcon className = 'footer__green'/>
            </div>
            <div className = 'footer__right'>
                <Grid container spacing = {2}>
                    <Grid item>
                        <PlaylistPlayIcon className = 'footer__icon'/>
                    </Grid>
                    <Grid item>
                        <ComputerIcon className = 'footer__icon'/>
                    </Grid>
                    <Grid item>
                        <VolumeUpIcon className = 'footer__icon'/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
