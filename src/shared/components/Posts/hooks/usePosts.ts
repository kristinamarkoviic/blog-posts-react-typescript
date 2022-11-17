import { useQuery } from 'react-query';
//interfaces
import { IPostResponse } from '../interfaces/IPostsResponse';
//services
import { postsApiService } from '../services/postsApiService';

interface IUsePosts {
    posts: IPostResponse[];
    isLoading: boolean;
    isFetching: boolean;
    refetchPosts: () => void;
}
export const usePosts = (): IUsePosts => {
    const {
        data: posts,
        isLoading: isLoading,
        isFetching: isFetching,
        refetch: refetchPosts,
    } = useQuery(['posts'], postsApiService.getAllPosts);

    return {
        posts: posts ?? ([] as IPostResponse[]),
        isLoading,
        isFetching,
        refetchPosts,
    };
};

export default usePosts;
