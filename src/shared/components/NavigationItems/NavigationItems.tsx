import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
//interfaces
import { INavigationLink } from 'shared/interfaces';
import { menuItems } from 'shared/constants/navigationItems';
//styles
import styles from './NavigationItems.module.scss';
import { Tabs, Tab } from '@mui/material';

const NavigationItems: FC = ({ children }) => {
    const [routes, setRoutes] = useState<INavigationLink[]>(menuItems);

    const location = useLocation();

    const findCurrentTab = routes.find(
        (route) => route.pathname === location.pathname
    );

    const currentTab = findCurrentTab ? location.pathname : '/';

    return (
        <>
            <Tabs value={currentTab} className={styles.navigation}>
                {routes.map((route: INavigationLink) => (
                    <Tab
                        className={styles.tab}
                        label={route.labelKey}
                        value={route.pathname}
                        key={route.id}
                        to={route.pathname}
                        component={Link}
                    />
                ))}
            </Tabs>
        </>
    );
};

export default NavigationItems;
