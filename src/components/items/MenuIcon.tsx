import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props{
  link: string
  icon: string
  hideOnMobile?: boolean
}

const MenuIcon: React.FC<Props> = ({link, icon, hideOnMobile}) => {
  return (
    <NavLink className={ `icon-link ${hideOnMobile ? "d-none d-md-flex" : "" }` } to={link} end>
        <i className={icon}></i>
        <span className="badge"></span>
    </NavLink>
  )
}

export default MenuIcon