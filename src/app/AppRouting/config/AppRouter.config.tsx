import { HomePage } from "pages/Home"
import { RouteProps } from "react-router"
import { AboutPage } from "pages/About"
import { AppRoutes, RoutesPathes } from "shared/configs/routing"

export const AppRouter: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutesPathes.home,
        element: <HomePage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPathes.about,
        element: <AboutPage />
    }
}