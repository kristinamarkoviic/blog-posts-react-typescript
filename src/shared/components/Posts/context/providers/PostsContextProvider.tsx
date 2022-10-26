import { FC, useEffect, useState } from 'react';
//hooks
import usePosts from '../../hooks/usePosts';
//interfaces
import { IPostResponse } from '../../interfaces/IPostsResponse';
//context
import { IPostsContext, PostsContext } from '../PostsContext';

const PostsContextProvider: FC = (props) => {
    const { children } = props;
    const { posts, isLoading } = usePosts();
    const [filteredPosts, setFilteredPost] = useState<Array<IPostResponse>>([]);
    const [loading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(isLoading);
        if (isLoading) return;
        setFilteredPost(posts);
    }, [isLoading]);

    const handleSearchPosts = (post: string) => {
        const searchedPost = posts.filter((item) => {
            return item.title
                .toLowerCase()
                .trim()
                .includes(post.toLowerCase().trim());
        });
        setFilteredPost(searchedPost);
    };

    const postsData: IPostsContext = {
        filteredPosts,
        handleSearchPosts,
        loading,
    };

    return (
        <PostsContext.Provider value={postsData}>
            {children}
        </PostsContext.Provider>
    );
};

export { PostsContextProvider };
