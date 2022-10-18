import { IPostResponse } from '../interfaces/IPostsResponse';
import usePosts from '../hooks/usePosts';
import { IPostsDataWithPages } from '../interfaces/IPostsDataWithPages';

const { postsData } = usePosts();

const createPostsDataFromResponse = ({
    current_page,
    order_by,
    total_pages,
    total_results,
    items,
    ...props
}: IPostsDataWithPages): IPostsDataWithPages => {
    return {
        current_page: current_page ?? 0,
        order_by: order_by ?? '',
        total_pages: total_pages ?? 0,
        total_results: total_results ?? 0,
        items: postsData,
        ...props,
    };
};

export default createPostsDataFromResponse;
