import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.component.scss'

const Header = ({ ...themeProps }) => {




    return (
        <div className="header">

            <div className="header__logo header__logo--grid">
                <Link style={{ color: `${themeProps.textColor}` }} to="/">KEVIN JEFFERSON</Link>
            </div>

            <div className={`header__link__list header__link__list--grid ${themeProps.class}`}>
                <NavLink className="header__link__item" to="/design/" activeClassName="active">DESIGN</NavLink>
                <NavLink className="header__link__item" to="/development" activeClassName="active">DEVELOPMENT</NavLink>
                <NavLink className="header__link__item" to="/personal" activeClassName="active">PERSONAL</NavLink>
            </div>
        </div>
    );
};

export default Header;