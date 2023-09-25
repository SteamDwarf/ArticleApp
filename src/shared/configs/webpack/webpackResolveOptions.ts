import { type ResolveOptions } from 'webpack';
import { type IWebpackOptions } from './types';

export const webpackResolveOptions = ({ pathes }: IWebpackOptions): ResolveOptions => {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [pathes.src, 'node_modules'],
		alias: {},
	};
};
