import { FC } from 'react';
//interfaces
import { ICommentData } from '../../interfaces/ICommentData';
//mui
import { Typography } from '@mui/material';
//styles
import styles from './PostsComment.module.scss';

interface ISingleComment {
    comment: ICommentData;
}

const PostsComment: FC<ISingleComment> = (props) => {
    const { comment } = props;

    return (
        <section className={styles.singleComment}>
            <section className={styles.header}>
                <Typography className={styles.author} variant="body1">
                    {comment.email}
                </Typography>
                <Typography className={styles.title} variant="body1">
                    {comment.name}
                </Typography>
            </section>
            <section className={styles.bodyText}>
                <Typography className={styles.body} variant="body1">
                    {comment.name}
                </Typography>
            </section>
        </section>
    );
};

export default PostsComment;
