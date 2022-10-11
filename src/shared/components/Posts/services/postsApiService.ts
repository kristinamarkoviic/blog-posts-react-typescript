//interfaces
import { IPostResponse } from '../interfaces/IPostsResponse';
import { IUserData } from '../interfaces/IUserData';
import { ICommentData } from '../interfaces/ICommentData';
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
}

export const postsApiService = new PostsApiService();
