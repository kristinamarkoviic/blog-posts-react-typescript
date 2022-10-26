import { useQuery } from 'react-query';
//interfaces
import { IPostResponse } from '../interfaces/IPostsResponse';
//services
import { postsApiService } from '../services/postsApiService';

interface IUsePosts {
    posts: IPostResponse[];
    isLoading: boolean;
}
export const usePosts = (): IUsePosts => {
    const { data: posts, isLoading: isLoading } = useQuery(
        ['posts'],
        postsApiService.getAllPosts
    );

    return {
        posts: posts ?? ([] as IPostResponse[]),
        isLoading,
    };
};

export default usePosts;
