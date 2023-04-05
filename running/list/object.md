## 오브젝트에 대한 비유
- 산타할아버지의 선물 자루
- 선물 자루 안에는 주소와 이름이 적힌 여러 선물 상자가 존재
- 각 선물 상자를 까 보면 선물이 있다.

#### 비유와 오브젝트를 연결하기
- 오브젝트는 선물자루에 해당하며
- 주소와 이름이 적힌 각각의 선물 상자는 오브젝트에서 키, 속성, 멤버, 프로퍼티 등의 용어로 불린다.
- 각각의 선물 상자 안의 선물은 값, 벨류, 속성값 멤버 변수의 값 등의 용어로 불린다.

## 오브젝트
- 자바스크립트에서 오브젝트의 구조를 먼저 살펴 보자.
- 오브젝트는 객체라고도 부른다.

### 산타할아버지의 선물 자루
- 오브젝트에 해당하는 산타할아버지의 선물 자루는 `{}`으로 표기한다.
```js
{

}
```

### 주소와 이름이 붙은 선물상자
- 주소와 이름이 붙었다는 것은 각각의 선물 상자가 누구의 것인지를 알 수 있는 유일한 표지를 의미한다.
- 선물 상자의 이름을 붙여 보자.
```js
{
  red_house_tom : undefined,
  blue_house_david : undefined,
  blue_house_risa : undefined,
  green_house_kevin : undefined,
  white_house_mary : undefined
}
```
- `undefined` 부분은 선물 상자 안에 아직 아무 것도 넣지 않았다는 의미를 가진다.
- 자바스크립트의 오브젝트는 '키 : 벨류' 형식으로 나타내어야 하기 때문에 아직 정해지지 않은 키의 벨류를 `undefined`로 나타내었다.

### 선물상자에 선물을 넣어 보자.
```js
{
  red_house_tom : 'lego',
  blue_house_david : 'robot_toy',
  blue_house_risa : 'doll',
  green_house_kevin : null,
  white_house_mary : 'book'
}
```
- `red_house_tom` 에게 주는 선물은 `'lego'` 이다.
- `blue_house_david` 에게 주는 선물은 `'robot_toy'` 이다.
- `blue_house_risa` 에게 주는 선물은 `'doll'` 이다.
- `green_house_kevin` 에게 주는 선물은 `null` 이다. `null`은 비어있는 것을 뜻하므로 선물 상자를 열었는데 아무것도 없는 것을 뜻한다.
- `white_house_mary` 에게 주는 선물은 `'book'` 이다.

### 오브젝트의 이름 정하기
- 오브젝트의 이름은 산타할아버지의 선물자루이므로 `present_bag`으로 이름을 붙이자.
```js
const present_bag = {
  red_house_tom : 'lego',
  blue_house_david : 'robot_toy',
  blue_house_risa : 'doll',
  green_house_kevin : null,
  white_house_mary : 'book'
}
```

## 오브젝트의 문법적인 특징
```js
const present_bag = {
  red_house_tom : 'lego',
  blue_house_david : 'robot_toy',
  blue_house_risa : 'doll',
  'green_house_kevin' : null,
  white_house_mary : 'book'
}
```
- 오브젝트 내에서 키만 따로 벨류만 따로 쓰일 수 없고 항상 `키: 벨류` 형식이 되어야 한다.
- 오브젝트의 키는 문자열 표기 `''` 없이 사용할 수 있으며 문자열 표기가 없어도 문자열으로 사용된다.
- `symbol` 타입을 키로 사용할 수 있지만 대부분의 실무에서 전혀 쓸 일이 없으므로 스킵한다.
- `키: 벨류` 쌍을 오브젝트 안에 나열할 때는 사이에 콤마 `,`를 두어 구분해 주어야 한다.
- 오브젝트의 마지막 값 다음에는 콤마를 쓰지 않는데 이는 `키: 벨류` 쌍을 구분하는 부분이 아니기 때문이다.
- 벨류에 들어가는 값은 문자열 뿐만 아니라 자바스크립트에서 사용할 수 있는 모든 타입을 쓸 수 있다.

## 오브젝트에서 값 얻기
- 위 오브젝트에서 다음과 같은 방식으로 값을 얻을 수 있다.
- 여기서 값이란 `키: 벨류` 쌍의 벨류를 의미한다.
- 크롬 브라우저의 콘솔창에 다음 코드를 입력 해 보자.
```js
const present_bag = {
  red_house_tom : 'lego',
  blue_house_david : 'robot_toy',
  blue_house_risa : 'doll',
  'green_house_kevin' : null,
  white_house_mary : 'book'
}
```
- 먼저 오브젝트를 입력하고

```js
present_bag.blue_house_risa
```
- 위 코드를 입력하면 `'doll'`이란 결과가 나온다.
- 오브젝트의 키에 접근하려면 `오브젝트.키` 표현을 사용해서 키에 연결된 벨류를 얻을 수 있다.

```js
present_bag['white_house_mary']
```
- 위 코드를 입력하면 `'book'`이란 결과가 나온다.
- 또는 닷 표기법이 아닌 배열 표기법을 사용해서 값을 얻을 수도 있다.
- 배열 표기법을 사용한다면 키가 문자열인 경우 문자열 표기 `''`을 사용해 주어야 한다.

## 메소드
- 메소드란 개념에 대해서 알아보자.
- 집집마다 굴뚝의 크기가 다르기 때문에 산타할아버지의 선물 자루는 크기를 늘렸다 줄였다 할 수 있는 마법이 걸렸다고 생각해 보자.
- 이 때 사이즈를 늘리는 주문을 선물 자루가 들으면 사이즈를 늘릴 것이고, 사이즈를 줄이는 주문을 들으면 사이즈가 줄어들도록 만들어 보자.

### 속성
- 먼저 선물 자루는 사이즈라는 속성을 가지고 있다. 선물 자루는 선물 상자라는 아이템도 가지고 있지만 특징 또한 가질 수 있다.
- 선물 자루는 가로(width) 사이즈와 높이(height) 사이즈를 가지고 있다고 하자.
- 선물 자루는 아이템 뿐만 아닌 속성 `width`와 `height`라는 속성을 가지게 된다.
```js
const present_bag = {
  width : 70,
  height : 100,
  red_house_tom : 'lego',
  blue_house_david : 'robot_toy',
  blue_house_risa : 'doll',
  green_house_kevin : null,
  white_house_mary : 'book'
}
```
- 위의 속성을 정의한 것으로 인해 이 자루의 가로 길이는 현재 70이고 높이는 100이라는 것을 알 수 있다.

### 메소드
- 메소드는 오브젝트의 키가 함수인 경우를 의미한다.
- 크기를 늘리는 주문에 해당하는 동작을 `inflate`라고 하고 크기를 줄이는 주문에 해당하는 동작을 `reduce`라고 하자.
```js
const present_bag = {
  width : 100,
  height : 100,
  red_house_tom : 'lego',
  blue_house_david : 'robot_toy',
  blue_house_risa : 'doll',
  green_house_kevin : null,
  white_house_mary : 'book',
  inflate : function () {
    return '자루의 크기를 늘립니다.';
  },
  reduce : function () {
    return '자루의 크기를 줄입니다.';
  }
}
```
- 위의 코드를 보면 `inflate`와 `reduce`에는 `null`, `'book'`이 아닌 함수(function)가 할당되었다.
- 크롬의 콘솔창에 위의 코드를 입력 한 후 다음 명령어를 실행해 보자.
```js
present_bag.inflate
```
- 위의 코드를 입력하면 함수가 그대로 나온다.
```js
function () {
  return '자루의 크기를 늘립니다.';
}
```
- `inflate`은 함수이므로 함수를 실행 해 줘야 한다.
```js
present_bag.inflate()
```
- 위의 명령어를 입력하면 문자열을 의미하는 흰색 글씨로 `자루의 크기를 늘립니다.`라는 메시지가 나오는 것을 확인할 수 있다.
```js
present_bag.blue_house_risa()
```
- 만약 위의 코드와 같이 함수가 아닌 키를 `()`를 사용해서 실행하면 에러가 발생한다.
```
Uncaught TypeError: present_bag.blue_house_risa is not a function
```
- 오브젝트의 키를 `()`로 실행할 수 있는 꼴을 메소드라고 한다.

### 메소드의 특징
```js
{
  inflate : function () {
    return '자루의 크기를 늘립니다.';
  },
  reduce : function () {
    return '자루의 크기를 줄입니다.';
  }
}
```
- 메소드도 `키: 벨류` 형식이며 벨류에 함수를 할당한 꼴이다. 따라서 `키: 벨류` 쌍들 사이에 콤마를 넣는 것은 똑같다.