import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

const webpackDevServer = (port: number):DevServerConfiguration => {
    return {
        port,
        open: true,
        historyApiFallback: true
    }
}

export default webpackDevServer;