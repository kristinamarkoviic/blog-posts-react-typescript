import { createContext } from 'react';
//interfaces
import { IPostResponse } from '../interfaces/IPostsResponse';

export interface IPostsContext {
    filteredPosts: Array<IPostResponse>;
    handleSearchPosts: (post: string) => void;
    loading: boolean;
}

const initalValues = {
    filteredPosts: [],
    handleSearchPosts: (post: string) => {},
    loading: false,
};

const PostsContext = createContext<IPostsContext>(initalValues);

export { PostsContext };
