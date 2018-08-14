module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
        module: {
          rules: [
            {
              test: /\.json$/,
              loader: 'json-loader'
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
              test: /\.png$/i,
              use: [
                "file-loader",
                {
                  loader: "image-webpack-loader",
                  options: {
                    optipng: {
                      enabled: false
                    }
                  }
                }
              ]
            }
          ]
        }
};