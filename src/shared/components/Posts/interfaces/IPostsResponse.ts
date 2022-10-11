import { ICommentData } from './ICommentData';
import { IUserData } from './IUserData';

export interface IPostResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
    user?: IUserData;
    comments?: ICommentData[];
}
