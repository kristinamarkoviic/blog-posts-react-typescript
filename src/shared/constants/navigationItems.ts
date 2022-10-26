import { RoutesEnum } from 'shared/enums/RoutesEnum';
import { INavigationLink } from 'shared/interfaces';

export const navigationItems: INavigationLink[] = [
    {
        id: 1,
        labelKey: 'Home',
        pathname: RoutesEnum.HOME,
    },
];
