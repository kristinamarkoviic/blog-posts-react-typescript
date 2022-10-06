import { RoutesEnum } from 'shared/enums/RoutesEnum';

interface INavigationLink {
    id: string | number;
    labelKey: string;
    pathname: RoutesEnum;
    icon?: string;
}

export default INavigationLink;
