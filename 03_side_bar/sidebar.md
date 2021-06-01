# sidebar 만들기
버튼을 누르면 메뉴가 사라지는 사이드바를 js와 css를 이용해서 만들어보자.

디자이너가 아니고서야 만들 일은 없지만, 어떤식으로 만들어지는지는 알아야 한다.

예제 화면이 동적이므로 첨부하지 못했다. 이 문서로 실습할 시, 단계별로 반드시 ***라이브서버로 진행사항을 확인하도록 한다.***

# 1. sidebar.html
## (1) 메뉴 틀 잡기
```html
<head>
    ...
    <!-- 적용할 css 링크 -->
    <link rel="stylesheet" href="sidebar.css">

    <!-- 적용할 js -->
    <script src="sidebar.js"></script>

    ...
</head>
<body>
    <h3>js와 css를 이용한 사이드메뉴</h3>
    
    <aside>
        <ul class="sidenav">
            <li><a href="#">-메뉴</a></li>
            <li><a href="#">-메뉴</a></li>
            <li><a href="#">-메뉴</a></li>
            <li><a href="#">-메뉴</a></li>
            <li><a href="#">-메뉴</a></li>
            <li><a href="#">-메뉴</a></li>
            <li><a href="#">-메뉴</a></li>
        </ul>
    </aside>
    
</body>
```
html은 단순하다.

버튼을 누르면 메뉴가 나타나거나 사라져야하므로, 버튼이 될 것도 만들어준다.
```html
...
<aside>
    <span class="menuBtn"><i class="글리피콘"></i>버튼</span>
    <ul class="sidenav">
...
```
```<ul>``` 태그 상단에 ```<span>``` 으로 만들어주었다. 글리피콘은 원하는 것으로 바꾸어주어도 된다.

# 2. sidebar.css
## (1) 스타일 기본 설정
```css
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
```

## (2) 사이드메뉴 position 설정
```css
.sidenav {
    position: fixed;
    left: 0%;
    top: 50px;
    width: 200px;
    height: 100%;
    background-color: #263238;
    z-index: 30;
}
```
여기서 ```z-index```는 ```<section>```에 내용물이 있을때 사이드바가 위에 있게 하기 위함이다.

## (3) 사이드메뉴 안 ```<a>```
```<a>``` 에 ```display: block``` 속성을 주어 선택영역을 block으로 만들어준다.

### 1) a
```css
.sidenav a {
    display: block;
    width: 200px;
    box-sizing: border-box;
    padding: 10px 20px;
    color: #fff;
    text-decoration: none;
}
```

### 2) a:hover
마우스가 올라갔을 때, ```<a>```의 배경색이 바뀌도록 한다.
```css
.sidenav a:hover {
    background-color: #00acac;
}
```

## (3) ```<span>```으로 만들어진 버튼
이 버튼은 사이드메뉴보다 ```z-index``` 값이 더 커야한다. 

```z-index```값을 지정하지 않고, 그냥 올린다면 메뉴항목들인 ```<a>```와 겹쳐보이게 될 것이므로 ```.sidenav```를 이후에 아래로 밀어주도록 한다.

```css
.menuBtn {
    position: fixed;
    left: 0;
    top: 50px;
    width: 50px;
    height: 50px;
    z-index: 50; /* 최상단 */
    color: #fff;
    background-color: #263238;
    
    display: block;
    text-align: center;
    line-height: 50px; /* height와 같은 값으로 넣어 중앙정렬 */

    cursor: pointer; /* 마우스를 올렸을때 손가락마우스포인터가 나오도록 */
}
```

버튼이 된 ```.menuBtn```의 영역을 확보하기 위해 ```.sidenav``` 에 ```padding-top```에 값을 준다.
```css
.sidenav {
    position: fixed;
    left: 0%;
    top: 50px;
    width: 200px;
    height: 100%;
    background-color: #263238;
    z-index: 30;

    padding-top: 50px;
}
```

## (4) 메뉴를 숨기는 방법?
단순히 ```.sidenav``` 를 보이지 않게 하려면 width: 0 주는 방법이 있다. 하지만 여기서 또다른 문제가 발생한다. 

아래를 읽기 전에 개발자 도구에서 .```sidenav```의 ```width: 0``` 을 주어 결과를 확인하자.

...

```<a>```가 고정값으로 ```width```를 갖고 있어, ```<a>```는 사라지지 않음을 알 수 있다. 

이 문제는 거꾸로 생각하면 답이 나온다. 

```<a>```의 크기가 부모 요소보다 커질 때, 부모 요소를 침범하지 않게 하는 속성이 있다.

```css
overflow: hidden;
```

js를 작성하기 전에 부모요소에 ```overflow:hidden;``` 을 지정하고 js를 작성한다.

```css
.sidenav {
    position: fixed;
    left: 0%;
    top: 50px;
    width: 200px;
    height: 100%;
    background-color: #263238;
    z-index: 30;

    padding-top: 50px;

    overflow: hidden;
}
```

# 3. sidebar.js
```<head>``` 안에 ```<script src="sidebar.js">```를 연결했지만, 문서 상단에 위치한 스크립트이므로, 그냥 실행하면 요소를 가져올 수 없다.

```window.onload```에 추가하면 되지만, 단 한번 실행되는 이벤트이므로, 이후 다른 js가 ```window.onload```에 추가되지 못하는 문제가 생길 수 있다.

jQuery를 배우면 이 문제를 해결 할 수 있지만, 아직 jQuery를 배우지 않았으므로  이번은 ```<script>```를 문서 하단에 배치하도록 한다.

### js로 제어하고 싶은 것
* 버튼을 누르면 메뉴가 나타난다
* 메뉴의 width 값을 변경하여 나타나거나 사라지는 방법을 사용

## (1) 필요한 요소 가져오기
필요한 요소는 ```.sidenav``` 와 ```.menuBtn```이다.
```javascript
var sidenav = document.querySelector(".sidenav");
var menuBtn = document.querySelector(".menuBtn");
```

## (2) stub 생성
```addEventListener```를 사용하였다.
```javascript
menuBtn.addEventListener("click", onSidenav);

function onSidenav() {
    /* 함수 구현 */
}
```

## (3) 메뉴가 나타나는/사라지는 조건?
* 메뉴가 보여질 때(```width: 200px```) 버튼을 누르면 메뉴가 사라진다(```width: 0px```).
* 메뉴가 보이지 않을 때(```width:0px```) 버튼을 누르면 메뉴가 나타난다(```width:200px```)

```.sidenav```의 width 값을 얻어올 필요가 있다. 얻어온 값으로 조건문을 세운다.
```javascript
function onSidenav() {
    // console.log(sidenav.style.width);

    var btn = sidenav.style.width;
    if(btn == "" || btn == "200px") {
        sidenav.style.width = "0px";
    } else {
        sidenav.style.width = "200px";
    }
}
```
### 주의사항
```javascript
console.log(sidenav.style.width);
```
실행 직후 최초 ```.sidenav``` 에는 ```width```값이 없다. 콘솔로 출력해보면 공백이 나오기때문에, ```if``` 조건식에 공백을 함께 포함한다.

## (4) 애니메이션 추가하기
메뉴가 물흐르듯 움직이는 모습을 추가하고 싶다면 css에 ```transition```을 추가한다.

### sidebar.css
```css
.sidenav {
    position: fixed;
    left: 0%;
    top: 50px;
    width: 200px;
    height: 100%;
    background-color: #263238;
    z-index: 30;

    padding-top: 50px;

    overflow: hidden;

    transition: all 0.5s ease-in-out;
}

```

# 4. 모바일 환경 고려하기
모바일 화면에서 메뉴를 확인하면 메뉴가 펼쳐진 상태여서, 화면의 절반 이상을 메뉴가 가리게 된다.

모바일 환경일 때는 메뉴가 사라진 상태로 설정하자.

### sidebar.css
```css
@media (max-width:767px) {
    .sidenav {
        width:0px;
    }
}
```
실행하고 모바일 환경에서 잘 작동하는지 확인한다.

## 문제 발생
모바일 환경에서 버튼을 2번 눌러야 버튼이 나타나는 문제가 발생했다. 

* 실행 직후 첫번째 클릭 : ```.sidenav```의 ```width```값은 공백이므로 ```.sidenav```의 ```width```는 if문 조건에 의해 ```0px```이 된다.
* 실행 직후 두번째 클릭 : ```.sidenav```의 ```width``` 값은 0이므로 ```.sidenav```의 ```width```는 ```if```문 조건에 의해 ```200px```이 된다.

## 해결방법
javascript에서 모바일 화면일 때, 실행되는 조건을 추가한다.

css의 ```@media``` 를 이용해 적용하는 것처럼, 브라우저의 너비, 높이 요소를 가져올 수 있다.

브라우저 관련된 내용(```BOM```)이므로 ```window``` 요소 바로 아래에 있다.
|요소|설명|
|--|--|
```window.innerWidth``` | 브라우저 화면의 너비 (스크롤 영역 미포함)
```window.innerHeight``` | 브라우저 화면의 높이 (스크롤 영역 미포함)
```window.outerWidth``` | 브라우저 전체의 너비
```window.outerHeight``` | 브라우저 전체의 높이

```window.innerWidth```를 사용해서 모바일 환경인지, 웹 환경인지 구분하고 조건을 추가해보자.
```javascript
function onSidenav() {
    // console.log(sidenav.style.width);
    // console.log(window.innerWidth);

    var btn = sidenav.style.width;

    if(window.innerWidth <= 767) { //모바일
        if(btn == "" || btn == "0px") {
            sidenav.style.width = "200px";
        } else {
            sidenav.style.width = "0px";
        }
    } else { //웹환경
        if(btn == "" || btn == "200px") {
            sidenav.style.width = "0px";
        } else {
            sidenav.style.width = "200px";
        }
    }
}
```