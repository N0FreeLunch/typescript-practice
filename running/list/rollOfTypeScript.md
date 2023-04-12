## 타입스크립트란?
### 쥐구멍의 비유
- 고양이가 쥐를 쫒고 있다. 쥐가 미리 만들어 놓은 쥐구멍으로 들어가게 되면 고양이는 더 이상 쫒아오지 못한다.
- 쥐구멍 뒤에는 고양이가 충분히 활동할 수 있는 공간이 있지만, 고양이가 통과하지 못했기 때문에 쥐구멍 뒤의 공간에는 갈 수가 없다.
- 자바스크립트에는 어떤 값도 올 수 있지만, 타입스크립트로 타입을 잡아 주게 되면 타입스크립트에서 자바스크립트로 변환된 코드가 실행될 때 타입스크립트에서 지정한 값만 오게 된다.
- 자바스크립트 변수는 어느 타입이라도 값을 받을 수 있다. 이것은 쥐구멍 뒤의 공간에는 고양이가 지나갈 수도 있고 쥐가 지나갈 수도 있는 통로가 있어서 쥐도 고양이도 머무를 수 있고 움직일 수 있다는 뜻이 된다. 하지만 타입스크립트가 제약을 거는 타입에 해당하는 쥐구멍이 있기 때문에 쥐구멍 뒤의 공간에는 고양이는 가지 못하고 쥐만 다닐 수 있는 것이다.

### 코드로 보기
- `string` 타입을 쥐구멍이라고 하자.
- 쥐는 문자열인 `'쥐'`로 나타내고 고양이는 symbol 타입인 `Symbol('고양이')`으로 나타내 보자.
- 여기서 Symbol 타입을 쓴 것은 설명을 돕기위해 사용한 것이며, 아직까지는 알지 않아도 되는 타입이다.
```ts
const animal = {
  cat: Symbol('고양이'),
  mouse: '쥐'
};

let mouseHole: string;
mouseHole = animal.cat;
mouseHole = animal.mouse;
```
- `codes` 폴더에 `rollOfType.ts`파일을 만들고 위 코드를 넣어보자.
- 심볼 타입인 `animal.cat`은 문자열 타입으로 되어 있는 쥐구멍(`mouseHole`)을 통과할 수 없기 때문에 에러가 발생한다.
- 문자열 타입인 `animal.mouse`은 문자열 타입으로 되어 있는 쥐구멍을 통과할 수 있기 때문에 에러가 발생하지 않는다.
- 쥐는 쥐구멍을 통과할 수 있고, 고양이는 쥐구멍을 통과할 수 없다.
- 에러가 나는 `mouseHole = animal.cat;` 코드를 제외하면 다음 코드가 된다. 여기에 쥐구멍 뒤의 공간인 `backyard` 변수를 만들어 보자.
```ts
const animal = {
  cat: Symbol('고양이'),
  mouse: '쥐'
};

let mouseHole: string;
mouseHole = animal.mouse;

let backyard: any;
backyard = mouseHole;
```
- `backyard`라는 변수는 any 타입이지만, `mouseHole`을 통과한 값만 대입할 수 있으므로 문자열값이 대입된다.
```
tsc codes/rollOfType.ts
```
- `Symbol` 타입을 사용하면 타입스크립트에서 컴파일 할 때 다음과 같은 에러가 나는데 에어가 나지 않게 하려면 설정이 필요하다. 일단 여기서는 무시하도록 한다.
```
to change your target library? Try changing the 'lib' compiler option to es2015 or later.
```
- 변환된 자바스크립트를 보면이다.
```js
var animal = {
    cat: Symbol('고양이'),
    mouse: '쥐'
};
var mouseHole;
mouseHole = animal.mouse;
var backyard;
backyard = mouseHole;
```
- 타입스크립트가 `animal.cat`을 대입하는 것을 미리 막아 주었기 때문에 `mouseHole`와 `backyard`는 여러 타입을 가질 수 있지만 위의 코드 상으로는 문자열을 받게 된다.

## 타입스크립트의 역할
- 타입스크립트는 지정한 타입만을 받아서 원하는 타입이 아닌 다른 타입이 와서 자바스크립트의 동작이 이상하게 되는 것을 최대한 막아 주는 역할을 한다.