import { FC } from 'react';
//styles
import loaderImage from '../../../assets/icons/loader.svg';
import styles from './Loader.module.scss';

const Loader: FC = ({ children }) => {
    return (
        <section className={styles.loader}>
            <img src={loaderImage} alt="Loader" className={styles.image} />
        </section>
    );
};

export default Loader;
