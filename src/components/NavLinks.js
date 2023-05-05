import React from 'react'
import { links } from '../ultil/links'
import { NavLink } from 'react-router-dom'
const NavLinks = ({ toggle }) => {
  return (
    <div className='nav-links'>
      {links.map((i) => {
        const { id, path, icon, text } = i
        return (
          <NavLink
            onClick={toggle}
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link'
            }}
            key={id}
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
