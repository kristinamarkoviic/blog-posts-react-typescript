import { FC, useState } from 'react';
//hooks
import usePosts from '../../hooks/usePosts';
//interfaces
import { IPostResponse } from '../../interfaces/IPostsResponse';
//context
import { IPostsContext, PostsContext } from '../PostsContext';

const PostsContextProvider: FC = ({ children }) => {
    const { posts, isLoading } = usePosts();
    const [filteredPosts, setFilteredPost] = useState<Array<IPostResponse>>([]);

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
        filteredPosts: filteredPosts.length ? filteredPosts : posts,
        handleSearchPosts,
        loading: isLoading,
    };

    return (
        <PostsContext.Provider value={postsData}>
            {children}
        </PostsContext.Provider>
    );
};

export { PostsContextProvider };
