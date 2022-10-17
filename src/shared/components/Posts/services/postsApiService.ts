//interfaces
import { IPostResponse } from '../interfaces/IPostsResponse';
import { IUserData } from '../interfaces/IUserData';
import { ICommentData } from '../interfaces/ICommentData';
import { IPostsData } from '../interfaces/IPostsData';
//services
import { apiService } from 'core/api/services/ApiService';

class PostsApiService {
    async getPosts(): Promise<IPostResponse[]> {
        const posts = apiService.responseHandler(
            await apiService.get<IPostResponse[]>('/posts')
        );
        return posts;
    }

    async getAllUsers(): Promise<IUserData[]> {
        const users = apiService.responseHandler(
            await apiService.get<IUserData[]>('/users')
        );
        return users;
    }

    async getAllComments(): Promise<ICommentData[]> {
        const comments = apiService.responseHandler(
            await apiService.get<ICommentData[]>('/comments')
        );
        return comments;
    }

    // async getAllPostsData(): Promise<IPostsData[]> {
    //     const allData = apiService.responseHandler(
    //         await apiService.get<IPostsData[]>('/posts').then((response) => {
    //             return apiService
    //                 .get<Omit<IPostsData[], 'user'>>('/users')
    //                 .then((respose) => {
    //                     return apiService.get<Omit<IPostsData[], 'comments'>>(
    //                         '/comments'
    //                     );
    //                 });
    //         })
    //     );
    //     return allData;
    // }
}

export const postsApiService = new PostsApiService();
