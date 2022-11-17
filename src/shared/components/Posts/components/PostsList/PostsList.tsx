import { FC, useMemo, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
//interfaces
import { IPostResponse } from '../../interfaces/IPostsResponse';
//plugins
import InfiniteScroll from 'react-infinite-scroller';
//context
import { PostsContext } from '../../context/PostsContext';
//components
import { SinglePost } from '../SinglePost';
import { Loader } from 'shared/components/Loader';
//styles
import styles from './PostsList.module.scss';
import { Card } from '@mui/material';

interface IPostList {
    postsToShow: number;
}

const PostsList: FC<IPostList> = (props) => {
    const { postsToShow } = props;
    const { filteredPosts, loading } = useContext(PostsContext);
    const [items, setItems] = useState<IPostResponse[]>([]);

    useMemo(() => {
        setItems(Array.from(filteredPosts.slice(0, postsToShow)));
    }, [filteredPosts]);

    const noPosts = filteredPosts.length === 0 && !loading;

    if (loading) {
        return <Loader />;
    }

    if (noPosts) {
        return (
            <section className={styles.noPostsMessage}>
                There is no posts.
            </section>
        );
    }

    const loadMore = () => {
        if (items.length > 0) {
            setTimeout(() => {
                setItems(
                    items.concat(
                        filteredPosts.slice(
                            items.length,
                            items.length + postsToShow
                        )
                    )
                );
            }, 500);
        }
    };

    return (
        <section className={styles.postsList}>
            <InfiniteScroll
                pageStart={1}
                loadMore={loadMore}
                useWindow={false}
                hasMore={items.length === filteredPosts.length ? false : true}
                loader={<Loader key={1} />}>
                {items.map((post) => (
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
            </InfiniteScroll>
        </section>
    );
};
export default PostsList;
