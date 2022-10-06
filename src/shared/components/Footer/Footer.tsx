import styles from './Footer.module.scss';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <Typography
                    variant="h6"
                    className={styles.text}
                    align="center"
                    gutterBottom>
                    Blog App
                </Typography>
                <Typography
                    variant="subtitle1"
                    className={styles.text}
                    align="center"
                    component="p">
                    Blog App made by Kristina Markovic &copy; 2022
                </Typography>
            </footer>
        </>
    );
};

export default Footer;
