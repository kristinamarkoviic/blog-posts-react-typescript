import { FC, useEffect, useState } from 'react';
//hooks
import usePosts from '../../hooks/usePosts';
//interfaces
import { IPostResponse } from '../../interfaces/IPostsResponse';
//context
import { IPostsContext, PostsContext } from '../PostsContext';

const PostsContextProvider: FC = (props) => {
    const { children } = props;
    const { postsData, isLoading } = usePosts();
    const [filteredPosts, setFilteredPost] = useState<Array<IPostResponse>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(isLoading);
        if (isLoading) return;
        setFilteredPost(postsData);
    }, [isLoading]);

    const handleSearchPosts = (post: string) => {
        const searchedPost = postsData.filter((item) => {
            return item.title
                .toLowerCase()
                .trim()
                .includes(post.toLowerCase().trim());
        });
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
