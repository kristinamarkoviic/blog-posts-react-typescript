import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
//mui
import { Card } from '@mui/material';
//context
import { PostsContext } from '../../context/PostsContext';
//components
import { SinglePost } from '../SinglePost';
import { Loader } from 'shared/components/Loader';
//styles
import styles from './PostsList.module.scss';

const PostsList: FC = () => {
    const { filteredPosts, loading } = useContext(PostsContext);
    const noPosts = filteredPosts.length === 0 && !loading;
    if (loading) {
        return <Loader />;
    }

    const renderMessage = noPosts && (
        <section className={styles.noPostsMessage}>There is no posts.</section>
    );

    return (
        <section className={styles.postsList}>
            {filteredPosts.map((post) => (
                <Card className={styles.postsCard} key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <SinglePost
                            post={post}
                            key={post.id}
                            showComments={2}
                        />
                    </Link>
                </Card>
            ))}
            {renderMessage}
        </section>
    );
};
export default PostsList;
