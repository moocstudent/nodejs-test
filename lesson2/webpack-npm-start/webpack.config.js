var webpack = require('webpack')
module.exports = {
    entry: './a.js',
    output: {
        filename: 'bundle.js'
    },
   plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
   devServer: {
        port:8088,
        inline:true,
        hot:true
    }
}