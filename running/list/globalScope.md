## 글로벌 스코프
- 스코프는 변수의 유효범위를 의미한다. 어떤 스코프에서 변수가 선언되면 해당 스코프가 끝날 때까지 `delete` 문법 등을 사용하여 일부러 지우지 않는 한 선언된 변수는 존재한다.
- 글로벌 스코프는 `var`로 선언되 변수의 경우 함수 내에 위치하지 않으며, `let`로 선언된 변수의 경우 `{}` 블록 안에 위치하지 않을 때. 곧, 어느 스코프 내부에도 위치하지 않는 변수가 글로벌 스코프에 속한다.
- 글로벌 스코프는 자바스크립트가 어떤 환경에서 실행되느냐에 따라 조금씩 달라진다. 크게는 브라우저에서 실행되는 자바스크립트와 번들러를 통해 합쳐지는 자바스크립트의 환경으로 나뉠 수 있다.

## 글로벌 스코프 범위의 결정방식
- 자바스크립트는 자바스크립트 코드를 실행하는 엔진에 의해 동작한다. (브라우저 엔진에 대해 알고 싶다면 크롬 브라우저에 사용되는 V8 엔진 또는 파이어폭스 브라우저에 사용되는 스파이더몽키를 조사해 보자.)
- 브라우저의 경우 자바스크립트 엔진은 HTML 파일 안의 모든 자바스크립트 코드를 차례로 실행한다. 여러 파일이 순차적으로 다 함께 자바스크립트 엔진에 의해 실행되기 때문에 각각의 스크립트 태그의 코드들은 동일한 글로벌 스코프를 공유하게 된다.
- NodeJS 환경에서 작성되는 코드는 하나의 여러 자바스크립트 파일이 번들러라는 툴에 의해 하나로 합쳐지는 경우가 있다. NodeJS도 자바스크립트를 실행하는 엔진으로 동작을 하며 이 엔진이 NodeJS를 통해 하나의 자바스크립트 파일을 실행한다. 이 때 여러 자바스크립트 코드가 하나의 파일로 합쳐졌다면 합쳐지기 전의 각각의 자바스크립트 코드들은 동일한 글로벌 스코프를 공유하게 된다.
- 결국 자바스크립트 엔진이 코드를 실행하는 단위에 따라서 글로벌 스코프의 범위가 하나의 파일이 될 수도 있고 여러개의 파일이 될 수도 있는 것이다.

## 타입스크립트의 실행 단위
- 자바스크립트의 실행 단위는 자바스크립트를 실행하는 엔진이 한 번에 얼마의 코드를 읽느냐에 따라 다르다.
- 브라우저의 경우 자바스크립트 엔진은 한 HTML 파일 안의 전체 자바스크립트 코드를 읽을 것이다. 여기에 추가로 콘솔창에서 추가로 실행한 코드도 동일한 실행 단위에 포함되어 엔진에 의해 실행된다.
- 하나의 타입스크립트 파일은 자바스크립트 파일로 변환되어 실행이 되며, 자바스크립트 파일로 변환되지 않으면 타입스크립트는 실행될 수 없다. 결국 타입스크립트의 실행 단위는 자바스크립트와 동일하다는 의미이다.

## 서로 다른 파일 간의 글로벌 스코프 공유
- 타입 스크립트의 경우 디폴트 설정으로 하나의 프로젝트에서 서로 다른 파일 간의 글로벌 스코프를 공유한다.
- 각각의 타입스크립트가 자바스크립트로 변환되면 이들 코드가 하나의 브라우저에서 함께 실행이 되거나 번들러를 통해서 하나의 파일로 합쳐질 것을 타입스크립트는 기본적으로 가정하고 있다.
- 따라서 서로 다른 파일에서 동일한 이름의 전역 변수가 선언되면 var의 경우 재선언 해도 괜찮기 때문에 에러가 발생하지 않지만, let이나 const의 경우 동일한 스코프에서는 재선언 할 수 없기 때문에 에러가 발생한다.

### 타입스크립트 공식 문서의 설명
> `Non-modules`

> `Before we start, it’s important to understand what TypeScript considers a module. The JavaScript specification declares that any JavaScript files without an export or top-level await should be considered a script and not a module.`

> `Inside a script file variables and types are declared to be in the shared global scope, and it’s assumed that you’ll either use the outFile compiler option to join multiple input files into one output file, or use multiple <script> tags in your HTML to load these files (in the correct order!).`

- 참고 : [타입스크립트 공식 문서의 비모듈](https://www.typescriptlang.org/docs/handbook/2/modules.html#non-modules)

- 타입스크립트는 기본적으로 여러 개의 파일이 HTML 문서 내에서 `<script>` 태그를 통해서 불러와지거나, 여러개의 파일을 하나로 합쳐주는 번들러를 통해서 묶어 주는 것을 기본적으로 가정하고 있다.
- 타입스크립트의 어떤 파일에서 전역 변수가 다른 파일에서 사용하고 있다는 에러 메시지를 띄우는 것도 각각의 타입스크립트 파일이 HTML에서 `<script>` 태그로 불러와서 사용하는 것을 가정하기 때문에 이 경우 변수의 충돌 또는 재선언 되는 것을 타입스크립트 차원에서 막아주기 위함이다.

### 서로 다른 파일의 글로벌 스코프 공유의 예제
- `codes` 폴더 안에 `globalScope` 라는 폴더를 만들고 `var1.ts` `var2.ts`라는 파일을 만들자.

var1.ts
```ts
var glovalVarVaraiable = 'global var variable in var1.ts';
let glovalLetVaraiable = 'global let variable in var1.ts';
```

var2.ts
```ts
var glovalVarVaraiable = 'global var variable in var2.ts';
let glovalLetVaraiable = 'global let variable in var2.ts';
```
- glovalVarVaraiable 변수는 재선언이 가능한 키워드 var로 선언되었기 때문에 두 파일의 글로벌 스코프가 공유되고 있더라도 에러가 발생하지 않는다.
- glovalLetVaraiable 변수는 재선언이 불가능한 키워드 let으로 선언되었기 때문에 두 파일의 글로벌 스코프가 공유되었다면 재선언이 불가능하다는 에러가 발생할 것이다.
- `var2.ts`파일에서 `glovalLetVaraiable` 변수 밑에 빨간 물결의 에러 표시되며 마우스를 가져다 대면 `Cannot redeclare block-scoped variable 'glovalLetVaraiable'.`라는 에러 메시지가 나온다.
- 그런데 두 파일에서 어느 한쪽이든 재선언이 되지 않도록 `glovalLetVaraiable` 변수 명을 `glovalLetVaraiable2`으로 바꿔주면 재선언이 아니므로 에러가 발생하지 않는다는 것을 알 수 있다.

## 서로 다른 파일의 글로벌 스코프 공유하지 않도록 하기
- 기본적으로 타입스크립트는 각각의 타입스크립트들이 하나의 실행단위로 실행되는 것을 가정하고 있기 때문에 글로벌 스코프의 공유가 일어난다고 하였다.
- 이를 무시하는 방법이 있는데 `codes` 폴더 안에 `globalScope` 라는 폴더를 만들고 `var3.ts`라는 파일을 만들자.
```ts
export {};
var glovalVarVaraiable = 'global var variable in var3.ts';
let glovalLetVaraiable = 'global let variable in var3.ts';
```
- 코드의 맨 위에 `export {};`를 써 주면 서로 다른 파일이 글로벌 스코프로 인식 되는 것을 막을 수 있다.
- 이 방법은 타입스크립트 파일을 모듈 파일 형식으로 만들어서 다른 파일과 전역 변수 공유가 되지 않게 만드는 방법이다.
- 자바스크립트에서 모듈은 모듈만의 스코프를 갖기 때문에 스코프에 쌓인 형태가 되어 변수가 충돌하지 않는 것으로 보면 된다.
- 자바스크립트에서 모듈은 다른 자바스크립트 파일에서 불러 쓸 수 있도록 변수를 내 보내는데 `export {}`는 `{}`안에 아무런 변수도 보내지 않았기 때문에 어느 자바스크립트에서도 이 모듈의 변수를 불러다 쓸 수 없는 상태이다. 이를 모듈이지만 모듈로 사용할 수 없는 형태라고 해서 비-모듈(non-module)이라고 부른다.