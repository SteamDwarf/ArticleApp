import { Suspense } from 'react';
import { Routes, Route } from 'react-router';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouter } from '../config/AppRouter.config';

export const AppRouting = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.values(AppRouter).map((route) => {
					return <Route key={route.path} path={route.path} element={route.element} />;
				})}
			</Routes>
		</Suspense>
	);
};
