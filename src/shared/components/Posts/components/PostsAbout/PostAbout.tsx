import { FC } from 'react';
import { useParams } from 'react-router-dom';
//hooks
import usePosts from '../../hooks/usePosts';
//components
import { PageLayout } from 'shared/components/PageLayout';
import { SinglePost } from '../SinglePost';
import { Loader } from 'shared/components/Loader';
//styles
import styles from './PostAbout.module.scss';

const PostAbout: FC = () => {
    const { id } = useParams();
    const { posts, isLoading } = usePosts();

    if (isLoading) {
        return <Loader />;
    }

    const findSinglePost = posts.find((post) => {
        return post.id === Number(id);
    });

    const content = (
        <section className={styles.page}>
            {findSinglePost && <SinglePost post={findSinglePost} />}
        </section>
    );
    return <PageLayout content={content}></PageLayout>;
};

export default PostAbout;
