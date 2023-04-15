## 스코프
- 스코프는 자바스크립트에서 사용되는 여러 대상(변수)들의 유효범위이다.

### 스코프의 에제
```js
var outerVariable = 10;
const functionScope = function () {
  var innerVariable = 20;
  console.log('innerVariable in function : ', innerVariable);
}
functionScope();
console.log('outerVariable', outerVariable);
console.log('innerVariable out of function', innerVariable);
```
- 위 코드를 브라우저 콘솔창에 넣어 보자.
- `console.log('outerVariable', outerVariable);` 부분은 실행이 되는 것에 반해 `console.log('innerVariable out of function', innerVariable);`부분은 `Uncaught ReferenceError: innerVariable is not defined`라는 에러가 뜬다. 그에 반해 함수 내부에서 실행 된 `console.log('innerVariable in function : ', innerVariable);`은 정상적으로 실행이 된다.
- `outerVariable`라는 변수는 `console.log('outerVariable', outerVariable);`코드가 실행될 때까지 변수가 살아있지만, `innerVariable`라는 변수는 함수 내에서는 실행이 되지만 함수 밖에서는 `console.log('innerVariable out of function', innerVariable);`코드가 실행될 때까지 살아있지 못한다.

### 변수의 생명주기
- 위의 예제에서 함수가 실행되는 범위 내에서 `innerVariable` 변수는 살아있다.
```js
function () {
  var innerVariable = 20;
  console.log('innerVariable in function : ', innerVariable);
}
```
- 변수가 선언되고 존재할 수 있는 공간을 스코프라고 한다. `innerVariable` 변수는 함수의 범위를 벗어나는 순간 함수 밖에서는 이 변수가 존재하지 않으므로 불러 올 수 없다.
- 함수는 `functionScope();`란 코드에 의해서 실행된다. 이 함수가 실행이 되면 위 코드가 실행이 되는 것이고 ` var innerVariable = 20;`로 변수 `innerVariable`가 선언이 되고, 이 변수에 담긴 값을 `console.log('innerVariable in function : ', innerVariable);`란 코드로 실행할 수 있다.
- 하지만 이 함수 내의 코드의 실행이 끝나면 `innerVariable`라는 변수는 어디에서도 쓸 수 없는 상태가 된다.
- `innerVariable`라는 변수가 살아있을 때는 `functionScope`라는 함수가 실행되고 이 함수의 실행이 끝날 때까지인 것이다. 
- 변수가 존재한다. 변수가 살아 있다고 표현도 사용한다. 그래서 변수의 생명이 어디부터 시작해서 어디까지이다로 비유해서 표현하기도 하며 변수가 생성되고 소멸되는데 까지의 과정은 `functionScope()`함수를 실행할 때 마다 반복한다. 그래서 '생명주기'라고도 표현한다.

### 주의할 점
- 스코프는 `{}`가 있다고 해서 무조건 스코프가 되는 것은 아니다.
```js
var outerVariable = 10;
if(true) {
  var innerVariable = 20;
}
console.log('outerVariable', outerVariable);
console.log('innerVariable', innerVariable);
```
- 위 코드를 브라우저의 콘솔창에 입력하면, `innerVariable` 변수는 `{}` 안에서 선언이 되었지만 `{}` 밖에서 살아 있다는 것을 알 수 있다.
- 하지만 `var`가 아닌 `const`나 `let`으로 선언된 변수는 변수를 감싸고 있는 중괄호 쌍 `{}`이 스코프가 된다. 이를 블록 스코프라 한다.

### 블록 스코프
- 변수를 선언할 때 `var`가 아닌 `let`을 사용해 보자.
```js
let outerVariable = 10;
if(true) {
  let innerVariable = 20;
}
console.log('outerVariable', outerVariable);
console.log('innerVariable', innerVariable);
```
- 브라우저의 콘솔창에서 위 코드를 실행하면 `console.log('innerVariable', innerVariable);`부분에서 `Uncaught ReferenceError: innerVariable is not defined`라는 에러가 발생한다.
- `{}`안에서 선언된 `let`으로 선언된 변수 `innerVariable`의 스코프는 if문의 `{}`안이다.
- const나 let으로 선언된 변수는 블록스코프라고 해서 하나의 블록 `{}` 중괄호로 시작하고 중괄호로 끝나는 범위가 변수의 스코프가 되는 특징을 가지고 있다.

### var의 스코프
- var로 선언된 변수의 스코프는 기본적으로 함수의 `{}` 범위가 스코프가 된다.
- 자바스크립트에서 `var`로 선언한 변수의 생명주기를 결정하는 스코프는 함수뿐만 아니라 모듈, `with`문이 있다.
- `with` 문은 여러 문제로 사용하는 것을 권장하지 않는 문법이기 때문에 현 시점에서 알 필요가 없으므로 스킵한다.
- 함수와 모듈이 `var`로 선언한 변수의 생명주기를 결정한다고 알고 있으면 된다.

### 로컬 스코프
- const나 let의 경우는 중괄호 `{}` 내부에서 선언된 변수라면 `{}`라는 블록이 로컬 스코프가 된다.
- var의 경우에는 함수의 `{}` 내부 또는 모듈 내에서 선언된 변수라면 로컬 스코프가 된다.

### 글로벌 스코프
- 스코프라는 것은 변수의 생명주기를 결정하는 영역이라고 할 수 있다. 하지만 어떠한 함수 내에 위치하지도 않고 모듈 내에 위치하지도 않는 변수라면 존재하는 모든 스코프의 바깥에서 선언된 변수이다.
- 함수나 모듈 내부에 정의하지 않고도 변수를 선언하고 사용할 수 있는데 이 변수들은 글로벌 스코프에 있기 때문이다. 글로벌 스코프는 스크립트가 실행되고 변수가 선언될 때 생성되어 스크립트가 종료될 때까지가 글로벌 스코프에서 선언된 변수의 생명주기에 해당한다.
- 위의 예제들에서 `var outerVariable = 10;`는 어떠한 스코프에도 속해있지 않기 때문에 변수가 선언된 시점부터 스크립트가 종료될 때까지 이 변수는 살아있게 된다.

### 전역변수와 지역변수
- 전역변수란 글로벌 스코프와 생명주기를 같이하는 변수를 의미한다.
- 지역변수란 const나 let의 경우 블록을 스코프로 한 변수이며, var의 경우는 함수나 모듈을 스코프로 한 변수이다. 이들 스코프 내에서 생성된 변수는 스코프의 종료 되면 없어진다.


## 상위 스코프와 하위 스코프
- 상위 스코프는 좀 더 바깥 쪽에 위치한 스코프이며, 하위 스코프는 좀 더 안쪽에 위치한 스코프이다.
- 상위 스코프에서 선언된 변수는 하위 스코프에 전달되며, 하위 스코프에서 선언된 변수는 상위 스코프에 전달되지 않는다.
```js
var outerVariable = 10;
const functionScope = function () {
  var innerVariable = 20;
  const functionNestedScope = function () {
    var nestedVariable = 30;
    console.log('innerVariable in nested function : ', innerVariable);
    console.log('nestedVariable in nested function : ', nestedVariable);
  };
  functionNestedScope();
  console.log('innerVariable in function : ', innerVariable);
  console.log('nestedVariable in function : ', nestedVariable);
};
functionScope();
console.log('outerVariable', outerVariable);
console.log('innerVariable out of function', innerVariable);
```
- 위의 코드를 브라우저의 자바스크립트 콘솔창에서 실행해 보면 다음과 같은 결과가 나온다.
```
innerVariable in nested function :  20
nestedVariable in nested function :  30
innerVariable in function :  20
```
- 또한 다음과 같은 에러 메시지가 나온다.
```
Uncaught ReferenceError: nestedVariable is not defined
    at functionScope (<anonymous>:11:48)
```
- 스코프 안에 스코프가 있는 것을 중첩된(nested) 스코프라고 부른다.
- `innerVariable in nested function :  20`라는 것은 중첨된 스코프 안에서 외부 스코프에 있던 `innerVariable`라는 변수를 중첩된 스코프 안에서도 사용할 수 있다는 것을 확인할 수 있다.
- 하지만 `console.log('nestedVariable in function : ', nestedVariable);` 부분에서 `nestedVariable` 변수는 `is not defined`라고 에러가 났는데, 변수가 선언된 함수 스코프 내부가 아닌 외부에서 해당 변수를 사용했기 때문이다.


## 스코프를 범위에서 변수 덮어쓰기
### 재할당 불가능한 변수 선언 let
```js
let letVariable = 10;
let letVariable = 20;
console.log('letVariable', letVariable);
```
- 위 코드를 실행하면 다음과 같은 에러 메시지가 나온다.
```
Uncaught SyntaxError: Identifier 'letVariable' has already been declared
```
- let으로 선언한 변수는 변수 내의 값을 바꿀 수는 있어도 다시 선언할 수는 없다.
- var로 선언한 변수 명과 같은 변수명을 한 참 뒤의 코드에서 다시 선언하는 겨우를 생각 해 보자. var를 사용하면 이미 선언된 값을 변경할 수 있기 때문에 오랜 시간 뒤에 코드를 추가로 짜거나 변경할 때 똑 같은 변수명을 사용하는 경우가 생길 수 있다. 이 때 예전에 짠 코드는 예기치 않는 변수의 변경으로 잘못된 로직으로 동작하게 될 가능성이 높아진다. 따라서 처음 사용한 변수가 나중에 추가된 변수에 의해 변경이 되지 않도록 하기 위해서 변수가 중복으로 선언되는 것을 방지하는 변수 선언 방식이 let을 사용한 변수 선언 방식이다. 그래서 자바스크립트 프로그래밍에서는 이러한 실수를 최대한 방지하기 위해 var를 쓰지 말고 let을 사용하는 것을 권장한다.
- 위 코드와 같이 동일한 변수명을 let으로 다시 선언하게 되면 중복으로 선언할 수 없다는 에러 메시지가 나온다.

### 스코프를 사용한 변수 재할당
- let을 사용한 변수 선언은 재선언이 불가능하지만, 하위 스코프에서는 재선언이 가능하다.
```js
let outerVariable = 10;
if(true) {
  let innerVariable = 20;
  let outerVariable = 30;
  console.log('outerVariable in inner scope', outerVariable);
  console.log('innerVariable in inner scope', innerVariable);
}
console.log('outerVariable in outer scope', outerVariable);
```
- 위 코드를 브라우저의 콘솔 창에 실행 해 보면, 그 결과는 다음과 같다.
```
outerVariable in inner scope 30
innerVariable in inner scope 20
outerVariable in outer scope 10
```
- 위 코드에서 스코프 내에서 외부 스코프의 변수 `outerVariable`를 재선언을 했지만 에러를 발생시키지 않는다.
- 스코프 내부에서 `innerVariable` 변수를 재선언 했지만 스코프 외부에서는 스코프 내부에서 재선언된 변수의 영향을 받지는 않는 것을 `console.log('outerVariable in outer scope', outerVariable);` 부분의 결과가 `outerVariable in outer scope 10`인 것을 통해서 알 수 있다. 스코프 내부에서는 값을 30으로 바꾸었지만, 여전히 값은 10으로 외부 스코프의 변수에 영향을 주지 않을 것을 알 수있다.