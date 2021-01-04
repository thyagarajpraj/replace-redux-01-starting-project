import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const navigation = props => {
    return (
        <header className="mainHeader">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>All Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites">Favourites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default navigation;