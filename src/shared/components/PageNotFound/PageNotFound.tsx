import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
//enums
import { RoutesEnum } from 'shared/enums/RoutesEnum';
//styles
import styles from './PageNotFound.module.scss';

const PageNotFound: FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.notFoundTitle}>404</h1>
            <p className={styles.notFoundMessage}>PAGE IS NOT FOUND</p>
            <Button
                component={Link}
                to={RoutesEnum.HOME}
                variant="contained"
                className={styles.homeBtn}>
                GO TO HOME
            </Button>
        </div>
    );
};

export default PageNotFound;
