import React from 'react';
import './Sidebaroption.css'

function Sidebaroption({Icon , title}) {
    return (
        <div className = 'sidebar__option'>
            {Icon && <Icon className = 'sidebaroption__icon'/>}
            {Icon ? <h4>{title}</h4>:<p>{title}</p>}
        </div>
    )
}

export default Sidebaroption
