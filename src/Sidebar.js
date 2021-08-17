import React from 'react';
import './Sidebar.css';
import Sidebaroption from './Sidebaroption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayer } from './Datalayer';


function Sidebar() {

    const [{playlist} , dispatch] = useDataLayer();
    console.log(playlist)
    return (
        <div className = 'sidebar'>
            <img className = 'sidebar__logo' src = 'https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt = ''/>
            <Sidebaroption Icon = {HomeIcon} title = {`Home`}/>
            <Sidebaroption Icon = {SearchIcon} title = {`Search`}/>
            <Sidebaroption Icon = {LibraryMusicIcon} title = {`Your Library`}/>
            <strong className = 'sidebar__title'>PLAYLISTS</strong>
            <hr/>
            {playlist?.items?.map((list) => (
                <Sidebaroption title = {list.name}/>
            ))}
        </div>
    )
}

export default Sidebar
