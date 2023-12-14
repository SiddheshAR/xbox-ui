import React from 'react'
import {nanoid} from 'nanoid'
import {NavLink} from "./Navigation.style.js";



const Navigation = ({Parent}) => {
    const navLinks = [
        'Game Pass',
        'Games',
        'Devices',
        'Play',
        'Support',
        'Developers'
    ]

  return (
    <Parent>
        {navLinks.map(e=>(<NavLink key={nanoid()}>{e}</NavLink>))};
    </Parent>

  )
}

export default Navigation