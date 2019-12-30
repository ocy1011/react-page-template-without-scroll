# react-page-template-without-scroll

![onePage](https://user-images.githubusercontent.com/34512577/71583604-82cce480-2b52-11ea-8bb9-139276ad0fb4.gif)

## 소개

- react + typescript
- 스크롤이 없는 페이지 디자인
- 모바일 퍼스트 반응형 디자인
- transition을 사용한 애니메이션
- 데스크탑에서는 마우스 휠로, 모바일에서는 드래그로 페이지 이동

## 실행방법

### 설치

```javascript
yarn install
```

### 실행

```javascript
yarn start
```

## 컨텐츠 추가 방법

PageTemplate의 props로 contents를 전달한다.
contents의 타입은 다음과 같다.

```
const contents: React.ReactNode[]
```

```
import React from "react";
import PageTemplate from "./page-template";
import contents from "./contents";

function App() {
  return <PageTemplate contents={contents} />;
}

export default App;
```
