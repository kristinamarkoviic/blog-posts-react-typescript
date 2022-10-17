import { ICommentData } from './ICommentData';
import { IUserData } from './IUserData';
import { IPostResponse } from './IPostsResponse';

export interface IPostsData {
    posts: IPostResponse[];
    user: IUserData;
    comments: ICommentData[];
}
