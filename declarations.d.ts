declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}
declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;

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