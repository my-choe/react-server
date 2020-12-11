# 회원가입 및 로그인, 게시판 기능이 있는<br/>간단한 Node.js + React.js + MongoDB 웹 어플리케이션
<br/>

## 실습 개발 환경

### `Front-end:React`
* react-bootstrap
* react-router-dom
* axios
* jquery
* jquery.cookie

### `Back-end:Node`
* express
* express-session
* cors

### `Database:MongoDB`
* Mongoose

### `Etc`
* Ckeditor4-react

<br/><br/>
## Collection 구성

### `Users`
* _id(PK)
* email
* name
* password
* createAt

### `Boards`
* _id(PK)
* writer(FK)
* title
* content
* createAt
