var path = require('path');

module.exports = {
    mode : 'none',
    entry : './js/app.js',
    output : {
        path : path.resolve(__dirname, 'build'),
        filename : 'main.bundle.js'
    },
    devtool : 'source-map' // 빌드한 js를 확인할 수 있다.
}