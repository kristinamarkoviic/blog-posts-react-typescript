import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
//mui
import { Card } from '@mui/material';
//context
import { PostsContext } from '../../context/PostsContext';
//components
import { SinglePost } from '../SinglePost';
//styles
import styles from './PostsList.module.scss';

const PostsList: FC = ({ children }) => {
    const { filteredPosts } = useContext(PostsContext);

    const renderPosts = filteredPosts.map((post, index) => (
        <Card className={styles.postsCard} key={index}>
            <Link to={`/posts/${post.id}`}>
                <SinglePost post={post} key={post.id} showComments={2} />
            </Link>
        </Card>
    ));
    const renderMessage = filteredPosts.length === 0 && (
        <section className={styles.noPostsMessage}>There is no posts.</section>
    );

    return (
        <section className={styles.postsList}>
            {renderPosts}
            {renderMessage}
            {children}
        </section>
    );
};
export default PostsList;
