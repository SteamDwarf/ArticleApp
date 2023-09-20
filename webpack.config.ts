import path from "path";
//В tsconfig указать "module": "NodeNext" и "moduleResolution": "nodenext",
import webpackConfiguration from "./configs/webpack/webpackConfiguration";
import { IWebpackEnv } from "./configs/webpack/types";

const config = (env: IWebpackEnv) => webpackConfiguration({
    mode: env.mode || "development",
    port: env.port || 3000,
    pathes: {
        entry: path.resolve(__dirname, "src/index.tsx"),
        build: path.resolve(__dirname, "build"),
        root: path.resolve(__dirname),
        html: path.resolve(__dirname, "src/index.html")
    },
})

export default config;