import { FC, ReactNode } from 'react';
//styles
import styles from './PageLayout.module.scss';

interface IPageLayout {
    content: ReactNode;
}

const PageLayout: FC<IPageLayout> = (props) => {
    const { content } = props;

    return (
        <main className={styles.mainContainer}>
            <div className={styles.content}>{content}</div>
        </main>
    );
};

export default PageLayout;
