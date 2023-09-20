import { Configuration } from "webpack";
import { IWebpackOptions } from "./types";
import webpackPlugins from "./webpackPlugins";
import webpackResolveOptions from "./webpackResolveOptions";
import webpackRules from "./webpackRules";
import webpackDevServer from "./webpackDevServer";


const webpackConfiguration = (options: IWebpackOptions):Configuration => {
    const {mode, pathes, port} = options;
    const isDev = mode === "development";

    return {
        mode: mode,
        entry: pathes.entry,
        output: {
            path: pathes.build,
            filename: "[name].[contenthash].js",
            clean: true
        },
        plugins: webpackPlugins(pathes.html),
        module: {
            rules: webpackRules(options)
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? webpackDevServer(port) : undefined,
        //При импорте файлов с указанным ниже расширением расширение не добавляется к пути
        resolve: webpackResolveOptions()
    }
    
}

export default webpackConfiguration;