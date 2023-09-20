import path from "path";
import { webpackConfiguration } from "./src/shared/configs/webpack";
import { IWebpackEnv } from "./src/shared/configs/webpack/types";
//В tsconfig указать "module": "NodeNext" и "moduleResolution": "nodenext",

const config = (env: IWebpackEnv) => webpackConfiguration({
    mode: env.mode || "development",
    port: env.port || 3000,
    pathes: {
        entry: path.resolve(__dirname, "src/index.tsx"),
        build: path.resolve(__dirname, "build"),
        root: path.resolve(__dirname),
        html: path.resolve(__dirname, "src/index.html"),
        src: path.resolve(__dirname, "src")
    },
})

export default config;