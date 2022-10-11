import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
//interfaces
import { INavigationLink } from 'shared/interfaces';
import { menuItems } from 'shared/constants/navigationItems';
//styles
import styles from './NavigationItems.module.scss';
import { ListItemText, ListItemButton } from '@mui/material';

const NavigationItems: FC = ({ children }) => {
    const [routes, setRoutes] = useState<INavigationLink[]>(menuItems);

    const location = useLocation();

    const findCurrentTab = routes.find(
        (route) => route.pathname === location.pathname
    );

    const currentTab = findCurrentTab ? location.pathname : '/';

    return (
        <>
            <nav className={styles.navigation}>
                {routes.map((route: INavigationLink) => (
                    <Link
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
        </>
    );
};

export default NavigationItems;
