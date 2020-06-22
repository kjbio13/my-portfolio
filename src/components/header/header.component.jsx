import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.component.scss'

const Header = () => {




    return (
        <div className="header">

            <div className="header__logo header__logo--grid">
                <Link to="/">KEVIN JEFFERSON</Link>
                </div>

            <div className="header__link__list header__link__list--grid">
                <NavLink className="header__link__item" to="/design" activeClassName="active">Design</NavLink>
                <NavLink className="header__link__item" to="/development" activeClassName="active">Development</NavLink>
                <NavLink className="header__link__item" to="/personal" activeClassName="active">Personal</NavLink>
            </div>
        </div>
    );
};

export default Header;