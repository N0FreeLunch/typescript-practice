## 타입이란?
- 모든 프로그래밍 언어에는 타입이란 것이 존재한다.
- 크롬 브라우저에서 키보드의 F12 버튼을 눌러 보자. 맥북의 경우 fn + F12 버튼을 같이 눌러야 할 수도 있다. 그럼 검사 창이 나온다.
- 검사 창의 Console 탭에서 `10`을 입력해 보자. 그러면 파란색의 10이 나온다. 그 다음 `"10"`을 입력해 보자. 초록색의 10이 나온다.
- 수는 파란색으로 나오고 문자열은 하얀색으로 나온다. 똑같은 10이지만 브라우저는 문자일 경우와 수일 경우를 다르게 파악하고 있다는 것을 알 수 있다.
- `"hello world"`를 입력해 보자. 그럼 초록색의으로 나온다. 문자열 `"10"`을 입력 했을 때의 색과 같다.
- 자바스크립트에서 문자열의 타입은 String으로 부르고 수의 타입은 Number으로 부른다.

## 타입의 종류
- 위에서 살펴 본 String과 Number 타입 뿐만 아니라 다른 타입도 존재한다.

### 타입
- null : 비어있다.
- undefined : 정의되지 않았다.
- boolean : 참 거짓을 나타내는 타입으로 `true`와 `false` 두 값으로만 나타난다.
- string : 문자열
- number : 수
- bigint : 현 시점에서 알 필요 없다.
- symbol : 현 시점에서 알 필요 없다.

### 설명
- symbol 타입은 실무에서 거의 사용하지 않으므로 건너 뛰어도 무방하다. bigint 비교적 최근에 도입되었으므로 현 시점에서는 건너 뛰어도 무방하다. 이 둘을 빼면 null, undefined, boolean, string, number 타입이 있다는 것을 알 수 있다. 7개의 기본 타입이 있지만 5개의 기본 타입만 알아도 된다.

## 타입 추론
- `codes` 라는 폴더를 생성하고 하위에 `type.ts`란 타입스크립트 파일을 생성 해 보자. 그리고 다음 코드를 넣어 보자.
```ts
let singer = "Ella Fitzgerland"
```
- singer 위에 마우스를 가져다 대면 `let singer: string`이란 표현이 나오는 것을 알 수 있다. singer 이란 변수에 문자열 "Ella Fitzgerland"을 대입하였기 때문에 변수 singer은 문자열 타입이라는 것을 나타낸 것이다.
- 다음으로 코드를 더 입력 해 보자.
```ts
let bestSong = Math.random() > 0.5
    ? "Chain of Fools"
    : "Respect";
```
- 위 코드에서 `Math.random()`은 0 이상이고 1 미만의 임의의 소수를 생성한다는 의미이다.
- `Math.random()`의 값이 0.5 초과이면 bestSong 변수에는 "Chain of Fools" 문자열을 대입하고, `Math.random()`의 값이 0.5 이하이면 bestSong 변수에는 "Respect" 문자열을 대입하는 코드이다.
- 마찬가지로 bestSong 변수 위에 마우스를 가져다 대면 `let bestSong: string`이란 표현이 나온다.

### 설명
- 변수 위에 마우스를 가져다대면 타입이 나오는데, 이는 타입스크립트는 변수의 타입이 무엇이라고 코드에 직접 지정해 주지 않았지만, 변수가 가진 타입이 어떤 타입인지 자동으로 추측한다는 것을 의미한다.

## `typeof` 키워드를 사용하여 타입 체크하기
- 브라우저 console 창에 다음 코드를 한 줄씩 입력 해 보자.
```js
typeof 42            // "number"
```
```js
typeof "hello"       // "string"
```
```js
typeof true          // "boolean"
```
```js
typeof undefined     // "undefined"
```
```js
typeof null          // "object" (주의!)
```
- `typeof 검사대상`이란 코드를 입력하면 해당 코드의 타입을 알 수 있다.
- 주의할 점은 `typeof null`의 결과 값이 "object"인 것이다. 이는 자바스크립트 초기 버전의 버그로 발생한 결과이기 때문에, 현재의 자바스크립트에서도 이러한 결과가 유지되고 있다. 하지만 자바스크립트는 `null`을 오브젝트가 아닌 null 타입으로 판단하므로 주의해야 한다.

### 오브젝트 타입
- 자바스크립트에서 기본타입이 아니라면 오브젝트 타입이다.
- 자바스크립트에서 기본타입은 null, undefined, boolean, string, number, symbol, bigint이며 기본 타입이 아닌 대상은 오브젝트 타입이다.
```js
typeof []            // "object"
```
```js
typeof {}            // "object"
```
```js
typeof function(){}  // "function"
```
- `[]`는 자바스크립트에서 배열이다. 자바스크립트에서 배열은 오브젝트 타입이다.
- `{}`는 자바스크립트에서 일반적인 오브젝트로 부르며 리터럴 오브젝트라고 부른다. 리터럴 오브젝트는 오브젝트 타입이다.
- `function(){}`는 자바스크립트에서 함수이다. 자바스크립트에서 함수는 오브젝트 타입이다. 하지만, `typeof`에서는 `"function"`에 해당한다.
- 배열과 함수가 오브젝트인 이유는 먼저 오브젝트에 대해 알아야 하므로 여기서는 자세히 설명하지 않고 스킵한다.

### 주의 사항
- `typeof`는 자바스크립트에서 타입을 판별할 때 사용하는 도구이다. 하지만 실제 자바스크립트의 타입과는 다를 수 있다. 따라서 `typeof`로 판별할 수 없다면 다른 방법을 사용해야 한다.
- 예를 들어 `null` 타입인 경우 값이 `null`인지 확인하면 된다.
```js
let nullVariable = null;

if(nullVariable === null) {
    console.log('nullVariable 변수는 null 타입 입니다.');
} else {
    console.log('nullVariable 변수는 null 타입이 아닙니다.');
}
```