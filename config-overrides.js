// eslint-disable-next-line @typescript-eslint/no-var-requires
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = function override(config, env) {
    const newConfig = rewireReactHotLoader(config, env);

    newConfig.resolve.alias = {
        ...config.resolve.alias,
        "react-dom": "@hot-loader/react-dom",
    };

    return newConfig;
};
