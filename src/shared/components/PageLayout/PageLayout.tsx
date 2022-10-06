import { FC } from 'react';
//components
import { Header } from '../Header';
import { Footer } from '../Footer';
//styles
import styles from './Layout.module.scss';

const PageLayout: FC = (props) => {
    const { children } = props;

    return (
        <main>
            <div className={styles.pageLayout}>
                <Header />
                {/* context here */}
                {children}
                <Footer />
            </div>
        </main>
    );
};

export default PageLayout;
