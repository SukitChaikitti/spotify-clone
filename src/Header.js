import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayer } from './Datalayer';

function Header(props) {

    const [{ user } , dispatch ] = useDataLayer();
    console.log(user)
    return (
        <div className = 'header'>
            <div className = 'header__left'>
                <SearchIcon/>
                <input placeholder = 'Search for Artist, Songs' type = 'text'></input>
            </div>
            <div className = 'header__right'>
                <Avatar src = {user?.images[0]?.url} alt = ''/>
                <h2>{user?.display_name}</h2>
            </div>
        </div>
    )
}

export default Header
