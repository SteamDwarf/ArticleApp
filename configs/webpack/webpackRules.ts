import { RuleSetRule } from "webpack";
import { IWebpackOptions } from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const webpackRules = (options: IWebpackOptions):RuleSetRule[] =>{
    const {mode} = options;
    const isDev = mode === "development";

    const typescriptRules = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
    };

    const stylesRules = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
                modules: {
                    auto: /\.module\.s[ac]ss$/i,
                    localIdentName: isDev ? "[name]_[local]_[hash:base64:8]" : "[hash:base64:8]"
                }
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
    }

    return [
        typescriptRules,
        stylesRules
    ]
}

export default webpackRules;