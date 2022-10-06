import { FC } from 'react';
//components
import { NavigationItems } from '../NavigationItems';

//styles
import styles from './Header.module.scss';
import logo from 'src/logo.svg';

const Header: FC = ({ children }) => {
    return (
        <>
            <header className="header">
                <img src={logo} width="80" />
                <NavigationItems />
            </header>
        </>
    );
};

export default Header;
