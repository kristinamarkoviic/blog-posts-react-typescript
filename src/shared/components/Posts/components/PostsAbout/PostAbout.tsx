import { FC } from 'react';
import { useParams } from 'react-router-dom';
//components
import { PageLayout } from 'shared/components/PageLayout';
//styles
import styles from './PostAbout.module.scss';
import { Typography } from '@mui/material';

const PostAbout: FC = ({ children }) => {
    const { id } = useParams();

    const content = (
        <section className={styles.page}>
            <Typography variant="h1" className={styles.title}>
                Posts Details id post: {id}
            </Typography>
        </section>
    );
    return (
        <>
            <PageLayout content={content}> </PageLayout>
        </>
    );
};

export default PostAbout;
