import { useQuery } from 'react-query';
//interfaces
import { IPostResponse } from '../interfaces/IPostsResponse';
//services
import { postsApiService } from '../services/postsApiService';

interface IUsePosts {
    postsData: IPostResponse[];
    isLoading: boolean;
}
export const usePosts = (): IUsePosts => {
    const { data: postsData, isLoading: isLoading } = useQuery(
        ['posts'],
        postsApiService.getAllPosts,
        {
            staleTime: 60000,
            onSuccess: () => {
                console.log('All posts are here.');
            },
            onError: () => {
                console.error('Posts Api service error');
            },
        }
    );

    return {
        postsData: postsData ?? ([] as IPostResponse[]),
        isLoading,
    };
};

export default usePosts;
