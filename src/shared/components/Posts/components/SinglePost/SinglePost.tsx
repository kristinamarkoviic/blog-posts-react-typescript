import { FC } from 'react';
import { IPostResponse } from '../../interfaces/IPostsResponse';
//components
import { PostsComment } from '../PostsComment';
//styles
import styles from './SinglePost.module.scss';
//mui
import { CardContent, Typography } from '@mui/material';

interface ISinglePost {
    post: IPostResponse;
    showComments?: number;
}

const SinglePost: FC<ISinglePost> = (props) => {
    const { post, showComments } = props;

    const renderComments =
        post.comments &&
        post.comments
            .slice(0, showComments)
            .map((comment) => (
                <PostsComment key={comment.id} comment={comment} />
            ));

    const renderUser = post.user && (
        <section className={styles.author}>
            <p className={styles.name}>{post.user.name}</p>
        </section>
    );

    return (
        <>
            <CardContent className={styles.post}>
                <Typography variant="h1" className={styles.id}>
                    #{post.id}
                </Typography>
                {renderUser}
                <Typography variant="h2" className={styles.title}>
                    {post.title}
                </Typography>
                <Typography className={styles.bodyText} variant="body1">
                    {post.body}
                </Typography>
                <Typography className={styles.commentsHeader} variant="body1">
                    Comments
                </Typography>
                {renderComments}
            </CardContent>
        </>
    );
};
export default SinglePost;
