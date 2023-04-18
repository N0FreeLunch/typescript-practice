## 웹 페이지에서 여러 자바스크립트 파일 불러오기
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>let variable = '스크립트간 변수 공유';</script>
    <script>console.log(variable);</script>
</body>
</html>
```
- 웹 페이지라면 위와 같은 방식으로 다른 스크립트에 있는 변수를 공유할 수 있다. 이제 각각의 스크립트의 파일을 나누어 보자.
- `codes` 폴더에 `smapleHTML`이란 폴더를 만들고 `index.html`, `script1.js`, `script2.js` 파일을 만들어 준다.

script1.js
```js
let variable = '스크립트간 변수 공유';
```

script2.js
```js
console.log(variable);
```

index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src='script1.js'></script>
    <script src='script2.js'></script>
</body>
</html>
```
- 비쥬얼 스튜디오에서 `index.html` 파일을 열고 오른쪽 클릭을 한 후 `Preview in Default Browser`버튼을 눌러서 브라우저에 들어가서 console 창을 열어 보면 `script1.js`에서 선언한 변수를 `script2.js`에서 사용하기 때문에 `console.log` 값이 출력된다.

### 웹 페이지에서 여러 자바스크립트 파일을 불러올 때의 단점
- 하나의 자바스크립트 파일을 불러오지 않고 여러 개의 자바스크립트 파일을 불러오면 상대적으로 **로딩 시간이 느려진다**. `<script src='script1.js'></script>` 코드를 한 번 읽을 때 마다 서버와 통신을 하게 되는데 여러번 서버와 통신을 해서 자바스크립트를 가져오므로 실행 속도가 느려질 수 있다. 보통의 경우 자바스크립트의 다운로드가 빠르고, 실행도 빠르기 때문에 체감할 정도의 차이를 느끼지 못할 수도 있다.
- 스크립트A는 A 개발자가 코딩을 하고, 스크립트 B는 B 개발자가 코딩을 한다고 해 보자. 두 스크립트의 **전역변수는 서로 공유**되기 때문에 A 개발자의 스크립트의 변수가 B 개발자의 코드로 인해 변경될 수 있다. 그러면 스크립트B 때문에 스크립트A의 코드가 동작되지 않을 경우가 생긴다.
- HTML에서는 여러 자바스크립트 파일을 불러 올 수 있지만, **자바스크립트 내에서 다른 자바스크립트 파일을 불러 올 수는 없다**.

## 모듈이란?
- 기본적으로 자바스크립트는 모듈 기능 없이는 자바스크립트 코드에서 다른 자바스크립트 코드를 실행할 수 없다.
- 모듈 기능을 사용하면 자바스크립트 코드 내에서 다른 자바스크립트 파일의 코드를 불러와서 실행할 수 있다.

### 모듈을 사용해야 하는 이유
- 하나의 파일에 수 천줄 수 만줄의 코드를 짜는 것 보다 여러 파일에 코드를 나누어서 짜는 것이 코드를 기능대로 분류할 수 있고 관리하기 쉽기 때문에 좋으므로 코드를 나눌 수 있는 방법이 있다면 코드를 나누는 방식을 사용하는 것이 좋다.

### 예시 코드
- `codes` 폴더에서 `module.ts` 와 `main.ts` 파일을 만들고 다음 코드를 작성 해 보자.
module.ts
```ts
const moduleVariable = 'module value';
export default moduleVariable;
```
- `const` 키워드로 `moduleVariable` 변수를 선언한 뒤 이 변수를 다른 자바스크립트 파일에서 사용할 수 있도록 `export`를 사용해서 모듈 파일을 만들었다.
- `export` 키워드는 여러 대상들을 다른 파일에서 불러다 쓸 수 있도록 하는데, 하나의 대상만을 내보내는 경우 `export default`란 키워드를 사용하며 여러개의 대상을 내 보내는 경우 불러다 쓸 때 각각 대상의 이름을 불러서 가져와야 하는데, `default`를 사용하면 어차피 하나의 대상만을 내 보내기 때문에 대상의 이름을 호출할 필요가 없다는 장점이 있다.

main.ts
```ts
import importedModuleVariable from "./module";
console.log(importedModuleVariable);
```
- `import` 키워드를 사용해서 모듈 파일을 `from` 키워드로 불러온다.
- `module.ts` 모듈 파일에서 `default` 키워드로 대상을 내보냈기 때문에 하나의 대상을 내보낸 것이다. 하나의 대상을 내보났다면 불러오는 입장에서는 대상의 이름을 지정할 필요가 없다. 따라서 불러온 대상을 넣을 변수명을 만들고 대상을 넣어 주면 된다.
- `import 불러온_값을_받을_변수명 from 모듈_파일의_경로` 문법을 사용해서 모듈 파일의 대상을 가져올 수 있다.
- 이 때 모듈 파일에서 전달 된 값은 아무 변수명으로 값을 받아도 되는데 `importedModuleVariable`으로 하였다. 이 변수를 출력하는 `console.log()` 메소드를 사용하였다.
- `main.ts` 파일에서는 `importedModuleVariable` 변수의 값을 정의하는 어떠한 코드도 없다. 하지만 모듈 파일의 코드를 불러 올 수 있기 때문에 `module.ts` 파일에서 입력한 값인 `'module value'`를 출력할 수 있게 된다.

#### 자바스크립트 파일로 만들기
```
tsc codes/whyUseModule/main.ts
```

#### 자바스크립트 파일 실행하기
```
node codes/whyUseModule/main.js
```
- 위 코드를 터미널(CLI : 커멘드라인)에 입력하면 `module value`가 나오는 것을 확인할 수 있다.