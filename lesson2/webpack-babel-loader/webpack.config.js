module.exports = {
    entry: './a.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        port:8088
    },
    module: { 
        loaders: [ 
            {
                test: /\.js$/,
                loader: 'babel',
                query:{
                    presets: ['latest']
                }
            }
        ]
    }
}