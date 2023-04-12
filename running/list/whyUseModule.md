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