import React from 'react';
import './HeaderMenu.scss';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faShoppingCart, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'

const HeaderMenu: React.FC = () => {
    return (
        <Router>
            <nav className="header__menu">
                <Link to="" className="header__link">
                    <div className="header__link-content">
                        <FontAwesomeIcon className="header__link--icon" icon={faHeadset} />
                        <span className="header____link--text">Pomoc i kontakt</span>
                    </div>
                </Link>
                <span className="header__separator"></span>
                <Link to="" className="header__link">
                    <div className="header__link-content">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="header____link--text">Twoje konto</span>
                    </div>
                </Link>
                <Link to="" className="header__link">
                    <div className="header__link-content">
                        <FontAwesomeIcon icon={faHeart} />
                        <span className="header____link--text">Twoje listy</span>
                    </div>
                </Link>
                <Link to="" className="header__link">
                    <div className="header__link-content">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="header____link--text">Koszyk</span>
                    </div>
                </Link>
            </nav>
        </Router>
    );
}

export default HeaderMenu;