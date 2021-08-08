# WEBPACK

> AN HEAD OF TIME COMPILER FOR THE BROWSER
>> 브라우저를 위한 사전 컴파일러

- 최신 프론트 엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러이다. (자바스크립트 뿐만 아니라 모든 리소스에 대한 변환 도구)

- 즉, JS, HTML, CSS등을 각각의 모듈로 보고 하나로 병합된 결과물을 만드는 도구.


## 웹팩으로 해결하려는 문제
- 자바스크립트 변수 유효 범위
- 브라우저별 HTTP 요청 숫자 제약
- 사용하지 않는 코드 관리
- Dynamic Loading(Hot loading) & Lazy Loading 미지원


## 웹팩의 주요 속성 

- entry : 빌드를 할 대상을 정의
- output : 빌드를 하고 난 후 결과물을 정의
- loader(module) : entry -> output으로 빌드 할 때 적용될 속성
- plugin : 결과물의 형태를 변환

``` js

var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none', // production , development, none
  entry: './index.js', // webpack으로 빌드할 대상
  output: { // webpack으로 빌드 후 생성될 대상 
    filename: 'bundle.js', // [chunkhash] 가능  
    path: path.resolve(__dirname, 'dist')
  },
  module: { // js 빌드할 때 사용할 라이브러리 정의 
    rules: [    
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },  // plugin 사용
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()    // plugin 정의 
  ],
} 


```


## 웹팩 DEV 

- 웹팩의 빌드 대상이 변경되었을 떄 다시 빌드 하지 않아도 자동으로 빌드 시켜주는 도구.

``` npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D ```



```
"script" : {
  "dev" : "webpack-dev-server",
  "build" : "webpack"
}

```