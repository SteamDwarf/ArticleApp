import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export const webpackDevServer = (port: number):DevServerConfiguration => {
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}
