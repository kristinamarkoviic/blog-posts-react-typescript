import { IPostResponse } from './IPostsResponse';

export interface IPostsDataWithPages {
    current_page: number;
    direction: string;
    items: IPostResponse[];
    limit: number;
    offset: 0;
    order_by: string;
    total_pages: number;
    total_results: number;
}
