import { FC, useEffect, useState } from 'react';
//interfaces
import { ICommentData } from '../../interfaces/ICommentData';
import { IPostResponse } from '../../interfaces/IPostsResponse';
import { IUserData } from '../../interfaces/IUserData';
//components
import { PostsComment } from '../PostsComment';
//assets
import avatar from 'assets/icons/avatar.svg';
//styles
import styles from './SinglePost.module.scss';
//mui
import { CardContent, Typography } from '@mui/material';

interface ISinglePost {
    post: IPostResponse;
    showComments?: number;
    refetchCommnetsData?: boolean;
}

const SinglePost: FC<ISinglePost> = (props) => {
    const { post, showComments, refetchCommnetsData } = props;
    const [user, setUser] = useState<IUserData | null>(null);
    const [comments, setComments] = useState<ICommentData[] | null>(null);

    const renderComments =
        comments &&
        comments
            .slice(0, showComments)
            .map((comment) => (
                <PostsComment key={comment.id} comment={comment} />
            ));

    const renderUser = user && (
        <section className={styles.author}>
            <img src={avatar} alt="Loader" className={styles.image} />
            <p className={styles.name}>{user.name}</p>
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
