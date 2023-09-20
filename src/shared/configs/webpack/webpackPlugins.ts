import path from "path";
import webpack, { WebpackPluginInstance } from "webpack";
import HTMLWebpackPlugin  from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const progressHandler = (precentage: number, message: string, ...args: any[]) => {
    console.info(`Built: ${precentage * 100}%; ${message}`);
    console.info(`Info: ${args}`);
}

export const webpackPlugins = (htmlPath: string):WebpackPluginInstance[] => {
    return [
        //В html файл index.js подключится автоматически
        new HTMLWebpackPlugin({
            template: htmlPath
        }),
        new webpack.ProgressPlugin(progressHandler),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].chunk.css"
        })
    ]
}