## 타입추론
- codes 폴더에 `typeInference.ts` 폴더를 만들고

```ts
let firstName = "Whitney";
firstName.length()
```
- firstName 변수에는 문자열 `"Whitney"`을 넣어주었다.
- 그런데 오브젝트의 속성에 접근하는 닷 표기법을 사용해서 `firstName.length()`란 코드를 써 주었다.
- `length()` 부분에 빨간 물결 밑줄이 쳐저 있는데 `firstName` 오브젝트에 `length()` 메소드가 없기 때문에 마우스를 가져다 대면 다음과 같은 에러가 나온다.
```
(property) String.length: number
Returns the length of a String object.

This expression is not callable.
Type 'Number' has no call signatures.ts(2349)
```

### 자바스크립트는 변수에 값이 복사된다.
- 간단히 말하자면 변수란 값을 저장할 수 있는 공간이다.
- 자바스크립트에서 값은 null, undefined, boolean, string, number, bigint, symbol, function, object 타입으로 표현되는 값이다.
```ts
let firstName = "Whitney"
```
- `"Whitney"`이란 문자열 값을 `firstName`이란 변수에 할당한다는 말은 `"Whitney"`이란 문자열 타입의 값을 `firstName`이란 변수가 가진 공간에 복사한다는 의미를 가지고 있다. 따라서 오른쪽의 `"Whitney"`와 `firstName`는 엄밀하게 똑같은 대상을 가리키지 않으며 `"Whitney"`와 `firstName`는 동일한 타입의 동일한 문자를 가진 대상일 뿐이다.


### 문자열 타입과 문자열 오브젝트
- 자바스크립트에서 String과 Number 타입은 점 기호 등을 사용하면 오브젝트 타입으로 타입이 변환된다.
- `firstName`변수는 `"Whitney"`이란 값을 가지고 있다.
```ts
firstName.length()
```
- 위의 코드에서 `firstName`은 문자열(String) 타입이지만 `.`을 사용하는 순간 오브젝트로 타입이 변환된다.
- 하지만 이 때 변환되는 오브젝트는 단순한 오브젝트가 아닌 문자열 오브젝트이다.
- 문자열 오브젝트는 문자열의 정보를 얻을 수 있는 키나 다룰 때 필요한 여러 메소드들이 포함되어 있다.
- `length` 속성도 문자열 오브젝트가 가진 문자열의 길이 정보를 알려주는 속성이다.
```ts
firstName.length
```
- `length`라는 속성은 문자열 오브젝트 `firstName.`의 키로, 이 키에는 함수가 할당되지 않는다. 함수가 할당되지 않은 키는 `()`로 실행할 수 없다. 따라서 `()`가 없는 위의 코드는 유효하다.
```ts
firstName.length()
```
- 하지만 `()`가 있는 경우는 문자열 오브젝트 안에 `length`라는 키에 함수가 할당되어 있어야 한다는 의미를 가지고 있지만 문자열 오브젝트에 기본적으로 포함되어 있는 `length`키는 함수가 아니므로 에러를 발생시킨다.

### 타입스크립트가 타입을 추론하는 과정
```ts
let firstName = "Whitney";
```
1. `"Whitney"`는 문자열이고 타입도 문자열에 해당한다.
2. `"Whitney"`을 `firstName`라는 변수에 할당되었으므로(=복사되었으므로) `firstName`도 문자열 타입에 해당한다고 추측한다.
3. `firstName`라는 변수는 문자열 타입의 값을 가지고 있는데 `.length()`를 호출하는 코드를 작성하면서 `firstName` 문자열 값은 문자열 오브젝트로 타입이 변환된다.
4. 문자열 오브젝트는 `length`라는 속성을 가지고 있으며, 기본적으로 문자열 오브젝트에 포함된 `length` 속성은 문자열 길이(=문자열의 수)에 대한 속성을 가지고 있으므로 타입스크립트는 이 키를 Number타입으로 추측하게 된다.
5. 하지만 메소드로 사용되는 표기인 `length()`는 `length`키에 할당된 값이 함수타입이라는 것을 의미하므로 Number타입이 와야하는데 function 타입이 왔다면서 에러를 발생시킨다. 이 에러 메시지는 `Type 'Number' has no call` Number 타입의 값은 호출하는 기능이 없다라는 것을 뜻하며, 호출하는 기능이 있다면 `()`에 의해 함수 등이 호출되겠지만 `()`으로 호출되지 않음을 뜻한다.
