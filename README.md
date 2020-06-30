# Trip mate

여행자와 현지인을 연결해주어 여행에 대한 깊이를 더해주고자 하는 서비스입니다.

## 개발 목적

웹 서비스 배포를 A to Z 까지 경험해보기 위해 시작한 프로젝트입니다.

## 사용 스택

BackEnd : NodeJS
Server framwork : Express
Database : MongoDB
노마드코더의 유튜브 클론 코딩 강의를 참고하여 제작하였습니다.

1. 서버 환경 셋팅하기
   - Express로 구축
   - ES6 사용을 위한 Babel 설치
   - nodemon으로 코드 변경시 서버 자동 재시작 설정
   - middleware 설정 (morgan, helmet, body-parser, cookie-parser)
   - block 단위로 나누기 (서버 환경 셋팅, 서버 실행, routes)
     - routes 구조
       - "/"를 다루는 globalRouter
       - "/user"를 다루는 userRoutr
       - "/schedule"을 다루는 scheduleRouter
   - MVC 패턴으로 서버 구축
     - Controller 파트 셋팅
