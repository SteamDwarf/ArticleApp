export enum AppRoutes {
	HOME = 'home',
	ABOUT = 'about'
}

export const RoutesPathes: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.ABOUT]: '/about',
};
