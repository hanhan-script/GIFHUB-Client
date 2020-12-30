# 🌼 GIF-HUB 🌼

동영상 및 gif 파일을 수정하여 자신만의 영상 파일을 만들 수 있는 웹 어플리케이션 입니다.

<br/>

![demo gif](https://gifhub-file-bucket2.s3.ap-northeast-2.amazonaws.com/demo.gif)

<br/>

### 💾 깃헙 저장소

- Client: [**https://github.com/hanhan-script/GIFHUB-Client**](https://github.com/hanhan-script/GIFHUB-Client)

- Server: [**https://github.com/hanhan-script/GIFHUB-Server**](https://github.com/hanhan-script/GIFHUB-Server)

<br/>

### 📣 배포주소 및 발표 영상

- 배포주소: **[https://www.gifhub.live](https://www.gifhub.live/)**

- 발표영상: [**https://youtu.be/eygGVpb1DRk**](https://youtu.be/eygGVpb1DRk)

<br/>

### 💻 Tech Stack - MERN

- Frontend - React & Redux
- Backend - Node js & Express & MongoDB
- Third party - FFmpeg

<br/>

---

![demo gif](https://gifhub-file-bucket2.s3.ap-northeast-2.amazonaws.com/notion-01.png)

<br/>

## Motivation 🔎

왜 영상 편집을 주제로 결정했을까?

- 가벼운 영상 편집을 할 때도 전문적인 프로그램을 사용해야하는 불편함.
- 매일같이 이용하고 있는 영상을 다루는 서비스들의 구현 방법에 대한 호기심.
- 영상 매체의 개인화, 사진 기반에서 영상 기반으로 바뀌어가는 사회적 흐름.

<br/>

## How to Install 🔌

설치 및 환경변수

```
npm install
```

- 클라이언트\
  REACT_APP_SERVER_URL=http://www.localhost:4000

<br/>

- 서버\
  DB_URL= 'MongoDB 데이터베이스 url'\
  S3_ACCESS_KEY_ID= 'AWS S3 acces id'\
  S3_SECRET_ACCESS_KEY= 'AWS S3 acces key'

<br/>

## Features ✂️

영상 편집 과정 및 기능

1. 파일 업로드

- 사용자가 원하는 영상 혹은 gif 파일을 선택해서 업로드할 수 있습니다.
- 사용자가 선택한 파일의 크기에 대한 유효성 검사를 진행하고 유효한 파일에 한해 서버에 전달합니다.(최대 100mb 허용)
- 전달 받은 파일을 multer를 이용하여 AWS S3에 저장하고, 해당 파일에 대한 S3 url 및 정보를 Mongodb를 사용한 DB에 저장하도록 구현하였습니다.

<br/>

2. 재생 구간 설정

- 사용자가 UI 조작 통하여 실시간으로 편집된 영상을 확인할 수 있습니다.
- AWS S3에 저장된 파일을 스트리밍 방식으로 클라이언트 사이드에 전달하도록 구현하였습니다.
- 서버와의 통신시에 headers의 range 항목을 이용하여 현재 재생위치를 byte값으로 전달하고, 그 byte값을 기준으로 스트리밍이 시작되도록 구현하였습니다.
- 사용자가 원하는 영상의 시작 위치 및 지속 시간을 range bar와 화살표 버튼을 이용하여 선택할 수 있도록 UI를 구현하였습니다.

<br/>

3. 이미지 삽입

- 사용자가 이미지 파일을 업로드하여 기존의 영상에 원하는 이미지를 삽입할 수 있는 페이지 입니다.
- 별도의 라이브러리를 사용하지 않고, 마우스 드래그를 통해서 이미지의 위치와 크기를 조절할 수 있는 UI를 구현하였습니다
- styled-component를 이용하여 재사용 가능한 컴포넌트를 구현하려고 노력하였습니다.
- 영상 파일 업로드에 사용한 컴포넌트를 재사용하여 페이지를 구현하였습니다.

<br/>

4. 영상 Format 선택

- 기존 파일의 format과 gif 중 한가지를 선택할 수 있는 UI를 구현 하였습니다.
- 우측 하단의 Create 버튼을 누르면, 앞의 2가지 단계에서 입력 받는 재생 구간 정보와 이미지 위치 및 크기 정보를 서버에 전달하도록 구현하였습니다.
- 유저가 입력한 정보를 바탕으로 FFmpeg을 이용하여 영상을 편집하고 S3에 저장하도록 구현하였습니다.
- 영상 파일을 로컬 디렉토리에 저장하지 않고 파이프 라인을 이용하여 다음 단계로 전달하는 것에 초점을 맞추어 작업을 진행하였습니다.

<br/>

5. 영상 다운로드

- 최종 결과물을 다운 받을 수 있습니다.
- 다운로드를 진행하거나 다운로드 모달창을 이탈할 경우, 사용자에게 입력 받아서 S3와 DB에 저장되어 있던 영상 자료들을 모두 삭제하도록 구현하였습니다.
- 다운로드 모달 창 이탈시 홈 화면으로 이동됩니다.

<br/>

## Duration & Process 📆

프로젝트 소요 기간 및 진행

1. Duration

- 2020.11.30 ~ 2020.12.19
- 1주차 아이디어 선정 및 구현 가능여부 검증
- 2 ~ 3주차 기능 구현

2. Process

- [1주차] 비디오 관련 작업 아이디어 선정 및 구현 가능여부 확인
- [2주차] 비디오 스트리밍 서버 구축 및 편집 UI
- [3주차] S3, FFmpeg, Client를 pipeline으로 연결 및 배포작업

<br/>

## Challenges 🔥

<br/>

1. 재사용 가능한 컴포넌트와 폴더 구조

- 리액트를 사용할 때면 어느 정도 단위까지를 재사용 가능한 컴포넌트라고 생각해야하는지 항상 고민하게 됩니다. Atomic Design의 관점에서 얘기하는 'Molecules'나 'Organisms' 에 해당하는 컴포넌트를 재사용하려고 만들다보면, 억지로 재사용 시킬목적으로 컴포넌트를 만든다는 생각이 들기도 하고, 늘어나는 컴포넌트들이 기존의 폴더 구조와 조화를 이루지 못하는 느낌이 들기도 합니다.

- 이번 프로젝트에서는 작게는 styled-component를 사용하여 그리드 위에서 동적으로 사용가능한 div를 만들어서 재사용해보았고, 크게는 헤더와 모달 등을 재사용해보았습니다.

- 앞으로 더 다양한 경험을 통해서, 폴더 구조도 고려하면서 유연하게 재사용가능한 컴포넌트를 만들 수 있도록 꾸준히 학습할 계획입니다.

<br/>

2. 스트리밍 서버 구축

- 이번 프로젝트를 진행하면서 겪었던 어려움 중 하나는 이진 자료로 구성되어 있는 영상 및 이미지 파일을 다루는 작업이었습니다. 기존에 작업해오던 것처럼 변수에 담아서 전달하는 방식으로 작업이 진행되지 않아 처음에는 무척 당황했습니다.

- 하지만 사용자가 업로드한 영상을 스트리밍해주는 서버를 구축해나가는 과정에서 버퍼와 스트림에 대해서 좀 더 이해하게 되었고, 마침내 서버와 통신할 때 헤더의 Range를 이용해서 스트리밍을 구현하는 방법을 찾게되어 스트리밍 서버를 구현할 수 있었습니다.

- 네트워크 탭에서 여러 조각으로 나누어서 전송되던 영상을 확인했을 때 뿌듯함으로 프로젝트를 이어갈 수 있었고, 무심코 사용하던 스트리밍 서비스들의 구현원리를 이해할 수 있었던 기회였습니다.

<br/>

3. Stream & Pipe (feat: FFmpeg)

- stream형태의 자료를 사용하는 방법을 이해하는 것이 이번 프로젝트의 가장 큰 어려움이었습니다. 구체적으로는 S3에 저장되어있는 파일을 'FFmpeg'으로 전달해서 편집을 한 뒤 클라이언트로 바로 전달을 하는 코드를 구현하는 부분이었습니다.

- 처음 시도했던 방법은 각각의 단계를 따로따로 진행하는 것이었는데, 그 경우에는 로컬 디렉토리에 비디오 파일을 저장해야하는 비효율이 발생하였습니다. 만약 GIF-HUB를 사용하는 사용자가 늘어난다고 가정한다면, 로컬 디렉토리에 비디오 파일을 저장하는 방식으로는 감당할 수 없기 때문에 각 단계들을 바로 연결하는 방법을 찾아야만 했습니다.

- 여러가지 해결방법을 시도해보았지만 해결을 하지 못하였고, 근본적인 stream에 대한 이해가 부족하다고 판단하여 노드의 공식 문서와 기본적인 예제들을 통해서 stream에 대해 공부하였고, 이를 찾아보면서 그 동안 해결방법을 찾으며 보았던 단편적인 정보들을 연결할 수 있었습니다. 마침내 stream과 pipe를 통해서 S3와 FFmpeg, 클라이언트를 모두 연결하여 로컬 디렉토리에 파일을 저장하지 않는 방법으로 기능을 구현 할 수 있었습니다.

- 이를 통해 스트림을 flowing mode로 존재할 수 있다는 것을 알게 되었고, flowing하는 자료를 이벤트리스너 형식으로 잡아서 사용하거나 파이프라인으로 연결하는 것에 보다 익숙해 질 수 있었습니다.

<br/>

---