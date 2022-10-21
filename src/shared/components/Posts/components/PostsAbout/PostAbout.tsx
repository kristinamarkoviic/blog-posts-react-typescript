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
    const { postsData, isLoading } = usePosts();

    const singlePost = postsData.find((post) => {
        return post.id === Number(id);
    });

    const content = (
        <section className={styles.page}>
            {isLoading ? (
                <Loader />
            ) : (
                singlePost && <SinglePost post={singlePost} />
            )}
        </section>
    );
    return <PageLayout content={content}></PageLayout>;
};

export default PostAbout;
