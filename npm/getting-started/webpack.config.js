var path = require('path'); // path라고 하는 library를 가져온다.

module.exports = {
  mode: 'none',
  entry: './src/index.js', // webpack로 번들링할 js
  output: { // webpack의 결과물
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist') // 위에서 가져온 library를 쓴다.
  }
};