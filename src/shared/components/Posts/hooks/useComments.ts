import { useQuery } from 'react-query';
//interfaces
import { ICommentData } from '../interfaces/ICommentData';
//services
import { postsApiService } from '../services/postsApiService';

interface IUseComment {
    commentsData: ICommentData[];
    areCommentsLoading: boolean;
    refetchComments: () => void;
}

export const useComments = (): IUseComment => {
    const {
        data: commentsData,
        isLoading: areCommentsLoading,
        refetch: refetchComments,
    } = useQuery(['comments'], () => postsApiService.getAllComments(), {
        staleTime: 60000,
        onSuccess: () => {
            console.log('All comments for post are here.');
        },
        onError: () => {
            console.error('Posts Api service error');
        },
    });

    return {
        commentsData: commentsData ?? ([] as ICommentData[]),
        areCommentsLoading,
        refetchComments,
    };
};

export default useComments;
