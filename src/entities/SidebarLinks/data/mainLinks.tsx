import HomeIcon from 'assets/icons/sidebar/home.svg';
import PopularIcon from 'assets/icons/sidebar/popular.svg';
import { RoutesPathes } from 'app/AppRouting/config/AppRouter.config';
import { type ISidebarLink } from '../types/types';

export const mainSidebarLinksData: ISidebarLink[] = [
	{
		text: 'Домой',
		url: RoutesPathes.home,
		icon: <HomeIcon />,
	},
	{
		text: 'Популярное',
		url: RoutesPathes.home,
		icon: <PopularIcon />,
	},
];
