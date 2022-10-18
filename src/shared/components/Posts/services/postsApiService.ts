//interfaces
import { IPostResponse } from '../interfaces/IPostsResponse';
import { IUserData } from '../interfaces/IUserData';
import { ICommentData } from '../interfaces/ICommentData';
//services
import { apiService } from 'core/api/services/ApiService';
import { IPostsDataWithPages } from '../interfaces/IPostsDataWithPages';
import createPostsDataFromResponse from '../utils/createPostsDataFromResponse';

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

    async getAllPosts(): Promise<IPostResponse[]> {
        const posts = apiService.responseHandler(
            await apiService.get<IPostResponse[]>('/posts')
        );

        const comments = apiService.responseHandler(
            await apiService.get<ICommentData[]>('/comments')
        );

        const users = apiService.responseHandler(
            await apiService.get<IUserData[]>('/users')
        );

        const result = posts.map((post) => {
            return {
                userId: post.userId,
                id: post.id,
                title: post.title,
                body: post.body,
                user: users.find((user) => user.id === post.userId),
                comments: comments.filter(
                    (comment) => comment.postId === post.id
                ),
            };
        });

        return result;
    }
}

export const postsApiService = new PostsApiService();
