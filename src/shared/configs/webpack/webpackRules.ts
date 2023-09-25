/* eslint-disable import/no-extraneous-dependencies */
import { type RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type IWebpackOptions } from './types';

export const webpackRules = (options: IWebpackOptions): RuleSetRule[] => {
	const { mode } = options;
	const isDev = mode === 'development';

	const fontRules = {
		test: /\.(woff|woff2|eot|ttf|otf)$/i,
		type: 'asset/resource',
	};

	const svgRules = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const typescriptRules = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const stylesRules = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /\.module\.s[ac]ss$/i,
						localIdentName: isDev ? '[name]_[local]_[hash:base64:8]' : '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	};

	return [
		typescriptRules,
		stylesRules,
		svgRules,
		fontRules,
	];
};
