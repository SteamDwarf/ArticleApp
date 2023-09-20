import { ResolveOptions } from "webpack";

const webpackResolveOptions = (): ResolveOptions => {
    return {
        extensions: [".tsx", ".ts", ".js"]
    }
}

export default webpackResolveOptions;