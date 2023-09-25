export type WebpackMode = 'production' | 'development';

export interface IWebpackEnv {
	port: number
	mode: WebpackMode
}

export interface IWebpackPathes {
	entry: string
	build: string
	root: string
	html: string
	src: string
}

export interface IWebpackOptions {
	mode: WebpackMode
	pathes: IWebpackPathes
	port: number
}
