/* eslint-disable import/no-extraneous-dependencies */
import webpack, { type WebpackPluginInstance } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type IWebpackOptions } from './types';
// import ReactRefreshPlugin from "react-refresh-webpack-plugin";

const progressHandler = (precentage: number, message: string) => {
	console.info(`Built: ${precentage * 100}%; ${message}`);
};

export const webpackPlugins = (options: IWebpackOptions): WebpackPluginInstance[] => {
	const { pathes, mode } = options;
	return [
		// В html файл index.js подключится автоматически
		new HTMLWebpackPlugin({
			template: pathes.html,
		}),
		new webpack.ProgressPlugin(progressHandler),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[name].[contenthash].chunk.css',
		}),
		new webpack.DefinePlugin({
			IS_DEV: mode === 'development',
		}),
		new webpack.HotModuleReplacementPlugin(),
		// new ReactRefreshPlugin()
	];
};
