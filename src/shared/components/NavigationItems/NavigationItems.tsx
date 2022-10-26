import { FC } from 'react';
import { Link } from 'react-router-dom';
//interfaces
import { INavigationLink } from 'shared/interfaces';
import { navigationItems } from 'shared/constants/navigationItems';
//styles
import styles from './NavigationItems.module.scss';
import { ListItemText, ListItemButton } from '@mui/material';

const NavigationItems: FC = () => {
    return (
        <nav className={styles.navigation}>
            {navigationItems.map((route: INavigationLink) => (
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
    );
};

export default NavigationItems;
