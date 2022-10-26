import { RoutesEnum } from 'shared/enums/RoutesEnum';
import { IRoute } from 'shared/interfaces';

export const routes: IRoute[] = [
    {
        path: RoutesEnum.HOME,
        name: 'Home',
    },
    {
        path: RoutesEnum.SINGLE_POST,
        name: 'Single Post',
    },
];
