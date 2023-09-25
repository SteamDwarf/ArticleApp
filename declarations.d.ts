declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}
declare module '*.svg' {
	import type React from 'react';

	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare const IS_DEV: boolean;

/* declare module "react-refresh-webpack-plugin" {
    import webpack from 'webpack'
    interface IReactRefreshPluginOptions {
        disableRefreshCheck: boolean = false,
        forceEnable: boolean = false,
    }
    interface IReactRefreshPlugin {
        constructor(options?: IReactRefreshPluginOptions);
        apply(compiler: webpack.Compiler): void;
    }

    class ReactRefreshPlugin implements IReactRefreshPlugin {
        constructor(options?: IReactRefreshPluginOptions);
        apply(compiler: webpack.Compiler): void;
    }

    export default ReactRefreshPlugin;
} */
