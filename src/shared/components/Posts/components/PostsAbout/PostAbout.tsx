import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//interfaces
import { IPostResponse } from '../../interfaces/IPostsResponse';
//hooks
import usePosts from '../../hooks/usePosts';
//components
import { PageLayout } from 'shared/components/PageLayout';
import { SinglePost } from '../SinglePost';
import { Loader } from 'shared/components/Loader';
//styles
import styles from './PostAbout.module.scss';
const PostAbout: FC = ({ children }) => {
    const { id } = useParams();
    const [post, setPost] = useState<IPostResponse>();

    const { postsData, arePostsLoading } = usePosts();

    useEffect(() => {
        const getSinglePost = postsData.find((post) => {
            return post.id === Number(id);
        });
        if (getSinglePost) setPost(getSinglePost);
    }, [arePostsLoading]);

    const content = (
        <section className={styles.page}>
            {arePostsLoading ? <Loader /> : post && <SinglePost post={post} />}
        </section>
    );
    return <PageLayout content={content}></PageLayout>;
};

export default PostAbout;
