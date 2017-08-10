module.exports={
    entry:{
        app:__dirname + '/src/js/main.js',
    },
    output:{
        path:__dirname + '/public',
        filename:'mycms.js',
        publicPath:'/',
    },
    module:{
         rules: [{
            test: /\.js$/, // include .js files
            enforce: "pre", // preload the jshint loader
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
           
        }, 
        {
            test: [/\.js$/, /\.jsx$/],
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react'] },
            }]
        }]
    },
    devServer: {
        contentBase: __dirname + '/public'
    }
    }
