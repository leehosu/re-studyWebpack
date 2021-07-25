# re-studyWebpack

## Intro

- `webpack`에 관해 다시 한번 공부하는 `Repo`입니다.

## NPM
`NPM(Node Package Manager)`는 명령어로 자바스크립트 라이브러리를 설치하고 관리할 수 있는 패키지 매니저이다.

### 전역

전역설치는 프로젝트 레벨이 아니라 시스템 레벨에서 사용할 라이브러리 설치를 말한다.

```
npm install --global(-g)
```

위와 같이 전역으로 설치한 라이브러리는 시스템 레벨에 설치되기 때문에 경로도 다르다.

```
# window
%USERPROFILE%\AppData\Roaming\npm\node_modules

# mac
/usr/local/lib/node_modules
```


### 지역

일반적인 설치 명령어는 `npm i`인데, 이 명령어는 `--save-prod`가 포함되어있는 명령어이다.
```
npm i 

npm i --save-prod
```

위의 명령어로 설치하였을 때 root 경로에 `node_modules` 라는 directory가 생성되며 그 하위에 해당 라이브러리가 설치된다.



##### 지역설치 옵션

1. `--save-prod (npm i)`

2. `--save-dev (npm i -D)`

위 두 가지의 차이점은 `package.json`에서 `dependencies`와 `devDependencies` 로 나눠서 구분 된다.

즉, `--save-prod` 는 배포용 라이브러리이고 `--save-dev` 는 개발용 라이브러리이다.


최종 서버에 배포를 할 때는 `devDependencies`에 포함된 라이브러리는 설치되지 않는다.
그렇기에 `NPM` 지역 설치를 할 때는 해당 라이브러리가 배포용(`dependencies`)인지 개발용(`devDependencies`)인지 꼭 구분해주어야 한다. 

-> 빌드 시간에 상당한 영향을 준다.

