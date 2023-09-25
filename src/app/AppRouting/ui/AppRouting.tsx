import { Suspense } from 'react';
import { Routes, Route } from 'react-router';
import { AppRouter } from '../config/AppRouter.config';

export const AppRouting = () => {
	return (
		<Suspense fallback="Подождите...">
			<Routes>
				{Object.values(AppRouter).map((route) => {
					return <Route key={route.path} path={route.path} element={route.element} />;
				})}
			</Routes>
		</Suspense>
	);
};
