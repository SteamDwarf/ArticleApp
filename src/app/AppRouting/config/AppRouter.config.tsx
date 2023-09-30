import { HomePage } from 'pages/Home';
import { type RouteProps } from 'react-router';
import { AboutPage } from 'pages/About';
import { NotFoundPage } from 'pages/NotFound';

export enum AppRoutes {
	HOME = 'home',
	ABOUT = 'about',
	OTHER = 'other'
}

export const RoutesPathes: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.OTHER]: '*',
};

export const AppRouter: Record<AppRoutes, RouteProps> = {
	[AppRoutes.HOME]: {
		path: RoutesPathes.home,
		element: <HomePage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutesPathes.about,
		element: <AboutPage />,
	},
	[AppRoutes.OTHER]: {
		path: RoutesPathes.other,
		element: <NotFoundPage />,
	},
};
