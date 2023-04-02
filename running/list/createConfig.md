## 시작하기
- 먼저 터미널을 열어서 명령어의 실행 위치라 `running` 폴더의 경로인지 확인한다.
- 터미널에서 `pwd` 명령어를 입력하면 맨 뒷 부분이 `typescript-practice/running`인 출력이 나온다. 만약 맨 뒷 부준이 `typescript-practice`이라면 `cd running` 명령어를 통해서 `running` 폴더 경로로 터미널애서 명령어가 실행되는 경로를 바꾸어 주자.

## 설정파일 생성하기
```
tsc --init
```
- 위 명령어를 사용하면 `tsconfig.json` 파일이 생성된다.
- `tsconfig.json` 파일에는 타입스크립트에 관한 각종 설정들이 들어 있다.
- 현 단계에서 설정에 관한 자세한 사항은 공부하지 않기로 하고 이 파일이 생성되어 있는지만 체크하고 넘어가도록 하자.
- 이 때 명령어는 터미널의 `running` 폴더의 경로에서 실행했으므로 `running` 폴더 아래에 `tsconfig.json` 파일이 생성된다.