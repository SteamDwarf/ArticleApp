import { ResolveOptions } from "webpack";
import { IWebpackOptions } from "./types";

export const webpackResolveOptions = ({pathes}: IWebpackOptions): ResolveOptions => {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [pathes.src, "node_modules"],
        alias: {}
    }
}
