import { useInfiniteQuery } from 'react-query';
//interfaces
import { IPostResponse } from '../interfaces/IPostsResponse';
//services
import { postsApiService } from '../services/postsApiService';

interface IUseInfiniteScroll {}

export const useInfiniteScroll = (): IUseInfiniteScroll => {
    // const {
    //     data,
    //     isSuccess,
    //     fetchNextPage,
    //     hasNextPage,
    //     isFetchingNextPage,
    //     isLoading,
    // } = useInfiniteQuery(
    //     ['posts'],
    //     postsApiService.getPosts,
    //     {
    //         getNextPageParam: (page) =>
    //             page.current_page === page.last_page
    //                 ? undefined
    //                 : page.current_page + 1,
    //     },
    //     { initialData: posts }
    // );
    return {};
};

export default useInfiniteScroll;
