## NVM 설치
### NVM이란?
- NodeJS를 설치할 때 지정된 버전으로 설치되기 때문에 각기 다른 프로젝트에서 다양한 버전의 NodeJS를 사용하게 되면 에러가 발생하는 경우가 있다.
- NVM을 사용하면 사용하고 싶은 NodeJS 버전으로 변경하여 사용할 수 있다는 장점이 있다.
- NVM 공식 페이지 : https://github.com/nvm-sh/nvm

### NVM 설치하기
- `NVM_installer.sh`란 파일이 있다. 이 파일을 `sh` 명령어로 실행하자.
```
sh NVM_installer.sh
```
- 위 명령어를 통해서 NVM을 설치하였다.

### NVM이 설치되어 있는지 확인하기
- NVM은 `~/.nvm` 경로에 설치가 되므로 이 폴더에 파일이 있는지 확인하면 된다.
- 디렉토리의 파일 목록을 확인할 때 쓰는 `ls`명령어를 사용하자.
```
ls ~/.nvm
```
- 명령을 실행하면 파일 리스트를 볼 수 있다.
```
CODE_OF_CONDUCT.md      Makefile                install.sh              test
CONTRIBUTING.md         PROJECT_CHARTER.md      nvm-exec                update_test_mocks.sh
Dockerfile              README.md               nvm.sh
GOVERNANCE.md           ROADMAP.md              package.json
LICENSE.md              bash_completion         rename_test.sh
```

### `nvm` 명령어 등록하기
- 터미널 환경(command line)에서 `nvm` 명령어를 사용할 수 없는 상태이기 때문에 등록 해 줘야 한다.
- 커멘드라인 명령어를 실행할 수 있도록 해 주는 툴을 쉘(shell)이라고 한다. 쉘은 여러 종류가 있으며, 대표적으로 `sh` `bash` `zsh`로 종류가 나뉜다.
- 비쥬얼 스튜디오를 사용중이라면 상단 메뉴에서 `Terminal`->`new Terminal`을 클릭하게 되면 하단에 터미널이 나온다.
터미널 창 오른쪽 상단에 보면 + 버튼이 있고 옆에 V표시의 버튼을 클릭하면 원하는 쉘을 선택할 수 있다.

#### 쉘에 등록시키기
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
- 위 명령어를  `~/.zshrc` 파일에 넣어야 하므로 파일의 뒷 부분에 문자열을 추가하는 명령어인 `>>`를 써서 `문자열 >> 파일경로`꼴의 형태로 써 준다.
- 위 명령어를 문자열로 넣어 줘야 하기 때문에 `echo ''` 명령어로 감쌀 필요가 있다. 그러면 다음과 같이 된다.
- 행이 2행으로 되어 있으므로 각 행마다 명령어를 실행 해 줘야 한다. 그러면 다음과 같다.
```
echo 'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"' >> ~/.zshrc
```
```
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
```
- 위 명령어를 실행시키자. 그러면 zsh 쉘에 nvm 명령어가 등록 된다.
- 만약 실행이 되지 않는다면 `cat ~/.zshrc` 명령을 실행해 보자 그러면 위에서 넣어준 문자열이 파일에 들어 있는 것을 확인할 수 있다.
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
- 만약 파일에 위 문자열이 들어가 있는데도 nvm 명령이 실행이 안 된다면, 터미널을 끄고 다시 켜자. 비쥬얼 스튜디오의 경우에는 오른쪽 상단의 `> zsh`라는 버튼이 있으며 이 버튼을 누르면 `kill Terminal`이란 메뉴가 있다. 클릭해서 끄고 상단 메뉴에서 다시 `Terminal`->`new Terminal`로 터미널을 열도록 하자.

#### bash 쉘에 등록하기
```
>> ~/.zshrc
```
- 위 부분만 다른 것으로 바꿔주면 된다.
- 맥 OS에서는 `~/.bash_profile` 파일에 넣어주면 된다. 이 파일이 없는 경우 `~/.bashrc` 파일에 넣어 주도록 하자.
```
echo 'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"' >> ~/.bash_profile
```
```
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bash_profile
```
- 위 명령어를 복사하여 터미널에 입력하면 bash 쉘에서 nvm 명령어를 실행할 수 있다.

### NVM 명령어 실행해 보기
```
nvm --version
```
- 위 명령어를 입력하면 `0.39.3`와 같은 NVM의 버전이 나온다. 이 수치는 다를 수 있다.

## NodeJS 버전 설치하기
- 특정 버전의 NodeJS를 실행하기 위해서는 NVM으로 NodeJS를 설치해 줘야 한다.
- [사용법](https://github.com/nvm-sh/nvm#usage) 링크를 참고하자.
- 만약 현재 NVM이 아닌 다른 방식으로 NodeJS가 설치되어 있다면 기존의 NodeJS를 지워야 한다.

#### 설치 할 수 있는 NodeJS 전체 버전 보기
```
nvm ls-remote
```

#### LTS 버전만 보기
- LTS는 'Long Term Support'란 뜻이다. NodeJS는 몇 개월 마다 버전이 올라간다. 버전이 올라가게 되면 이전 버전의 NodeJS는 보안패치 및 버그 수정 등의 지원이 없기 때문에 보안이나 버그가 발생한 경우 NodeJS 버전을 올리지 않으면 보안 문제점 및 버그를 가진 상태로 사용할 수 밖에 없다.
- LTS는 30개월 정도 보안 패치 및 버그 수정을 지원하기 때문에 NodeJS의 버전 업그레이드를 자주하지 않아도 되는 장점이 있다.
- NodeJS 버전을 함부로 올리기 어려운 이유는 설치된 자바스크립트 패키지가 상위 버전의 NodeJS를 지원하지 않는 경우가 발생할 수 있기 때문이다.
- NVM에서 설치가능한 NodeJS의 LTS 버전만 보려면 다음 명령어를 사용하면 된다.
```
nvm ls-remote --lts
```

#### 설치할 NodeJS 버전
- `v16.19.1   (Latest LTS: Fermium)`를 설치할 예정
- 애플 실리콘을 사용하는 경우 공식적으로 16버전부터 지원을 하며 이전 버전의 경우 설치 방법이 까다롭다. [참고](https://github.com/nvm-sh/nvm#macos-troubleshooting) 따라서 16버전을 설치하여 진행하도록 한다.

#### NodeJS 설치하기
```
nvm install v16.19.1
```
또는
```
nvm install lts/gallium
```
- 위 명령어를 터미널에 입력하여 16버전의 NodeJS를 설치하도록 하자.

#### NodeJS가 설치되어 있는지 확인
```
node --version
```
- 위 명령어를 통해서 지정한 버전의 NodeJS가 설치되어 있는지를 확인하자.
