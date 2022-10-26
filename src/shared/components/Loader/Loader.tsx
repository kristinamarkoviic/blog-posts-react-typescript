import { FC } from 'react';
//styles
import loaderImage from '../../../assets/icons/loader.svg';
import styles from './Loader.module.scss';

const Loader: FC = () => {
    return (
        <section className={styles.loader}>
            <p className={styles.text}>Loading...</p>
            <img src={loaderImage} alt="Loader" className={styles.image} />
        </section>
    );
};

export default Loader;
