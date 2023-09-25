import { type Configuration } from 'webpack';
import { type IWebpackOptions } from './types';
import { webpackPlugins } from './webpackPlugins';
import { webpackRules } from './webpackRules';
import { webpackDevServer } from './webpackDevServer';
import { webpackResolveOptions } from './webpackResolveOptions';

export const webpackConfiguration = (options: IWebpackOptions): Configuration => {
	const { mode, pathes, port } = options;
	const isDev = mode === 'development';

	return {
		mode,
		entry: pathes.entry,
		output: {
			path: pathes.build,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: webpackPlugins(options),
		module: {
			rules: webpackRules(options),
		},
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? webpackDevServer(port) : undefined,
		// При импорте файлов с указанным ниже расширением расширение не добавляется к пути
		resolve: webpackResolveOptions(options),
	};
};
