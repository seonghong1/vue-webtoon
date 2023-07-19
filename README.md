# webtoon-service

- page

```
  - 메인 페이지
  - 검색 결과 페이지
```

```
 - class명 컴포넌트명-역할 / scss에서 .Webtoom{ &-list{}, &-item } 형태로 사용이 적합
 - 라이프사이클 매서드에서는 함수 호출먼
 - 시멘틱태그, h1, h2역할, html에서의 검색엔진 최적화 생각해보기
 - ui컴포넌트는 버튼, input, modal등과 같이 공통적으로 사용되는 컴포넌트의 집합
 - 스코프 블록에서만 사용하는 변수들은 _붙여줘서 구분하기
 - 스프레드 ** 중요, 원본 값 유지 뿐만 아니라, push할 때 바깥 배열 벗겨내기
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
