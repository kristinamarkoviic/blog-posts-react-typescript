import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
//enums
import { RoutesEnum } from 'shared/enums/RoutesEnum';
//interfaces
import { INavigationLink } from 'shared/interfaces';
import { navigationItems } from 'shared/constants/navigationItems';
//styles
import styles from './NavigationItems.module.scss';
import { ListItemText, ListItemButton } from '@mui/material';

const NavigationItems: FC = ({ children }) => {
    const [routes, setRoutes] = useState<INavigationLink[]>(navigationItems);
    const [isActive, setActive] = useState<boolean>(false);

    const location = useLocation();

    const findCurrentTab = routes.find(
        (route) => route.pathname === location.pathname
    );

    return (
        <nav className={styles.navigation}>
            {navigationItems.map((route: INavigationLink) => (
                <Link
                    className={isActive ? 'active' : ''}
                    key={route.id}
                    to={{
                        pathname: route.pathname,
                    }}>
                    <ListItemButton className={styles.navTab}>
                        <ListItemText
                            className={styles.navLink}
                            primary={route.labelKey}
                        />
                    </ListItemButton>
                </Link>
            ))}
        </nav>
    );
};

export default NavigationItems;
