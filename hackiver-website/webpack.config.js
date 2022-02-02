// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//     module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader'
//       }, 
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       }, 
//       {
//         test: /\.(gif|ttf|eot|svg|woff2?)$/,
//         use: 'url-loader?name=[name].[ext]' 
//       },
//     ]
//   },
//   externals: {
//     'react': 'React',
//     'react-dom': 'ReactDOM'
//   }
// };


// webpack.config.js
module.exports = {
    /*
    rest of config...
    */
    output: {
        filename: "index.js",
        pathinfo: false,
        libraryTarget: 'umd', // In my case, I use libraryTarget as 'umd'. Not sure if relevant
    },
    externals: {
        // Use external version of React
        "react": {
            "commonjs": "react",
            "commonjs2": "react",
            "amd": "react",
            "root": "React"
        },
        "react-dom": {
            "commonjs": "react-dom",
            "commonjs2": "react-dom",
            "amd": "react-dom",
            "root": "ReactDOM"
        }
    },
};