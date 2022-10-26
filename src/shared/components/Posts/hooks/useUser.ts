import { useQuery } from 'react-query';
//interfaces
import { IUserData } from '../interfaces/IUserData';
//services
import { postsApiService } from '../services/postsApiService';

interface IUseUserData {
    usersData: IUserData[];
    areAllUsersLoading: boolean;
}

export const useUser = (): IUseUserData => {
    const { data: userData, isLoading: areAllUsersLoading } = useQuery(
        ['user'],
        () => postsApiService.getAllUsers(),
        {
            staleTime: 60000,
            onSuccess: () => {
                console.log('Users data for this post is here.');
            },
            onError: () => {
                console.error('Posts Api service error');
            },
        }
    );

    return {
        usersData: userData ?? ([] as IUserData[]),
        areAllUsersLoading,
    };
};

export default useUser;
