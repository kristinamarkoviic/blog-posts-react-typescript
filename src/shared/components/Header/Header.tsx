import { FC } from 'react';
//components
import { NavigationItems } from '../NavigationItems';

//styles
import styles from './Header.module.scss';
import logo from '../../../logo.svg';

const Header: FC = ({ children }) => {
    return (
        <header className={styles.header}>
            <img src={logo} className={styles.logo} />
            <NavigationItems />
        </header>
    );
};

export default Header;
