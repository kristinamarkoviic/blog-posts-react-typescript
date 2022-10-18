import { FC, useEffect, useState } from 'react';
//hooks
import usePosts from '../../hooks/usePosts';
//interfaces
import { IPostResponse } from '../../interfaces/IPostsResponse';
//context
import { IPostsContext, PostsContext } from '../PostsContext';

const PostsContextProvider: FC = (props) => {
    const { children } = props;
    const { postsData, arePostsLoading } = usePosts();
    const [filteredPosts, setFilteredPost] = useState<Array<IPostResponse>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(arePostsLoading);
        if (arePostsLoading) return;
        setFilteredPost(postsData);
    }, [arePostsLoading]);

    const handleSearchPosts = (post: string) => {
        const searchedPost = postsData.filter((item) =>
            item.title.toLowerCase().trim().includes(post.toLowerCase().trim())
        );
        setFilteredPost(searchedPost);
    };

    const contextData: IPostsContext = {
        filteredPosts,
        handleSearchPosts,
        loading,
    };

    return (
        <PostsContext.Provider value={contextData}>
            {children}
        </PostsContext.Provider>
    );
};

export { PostsContextProvider };
