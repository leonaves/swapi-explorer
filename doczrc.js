export default {
  wrapper: 'docz-wrapper.js',
  modifyBundlerConfig: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    });
    return config
  }
}