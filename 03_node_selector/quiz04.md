# quiz04(문제4).html
밝게 버튼을 누르면 밝은 테마, 어둡게 버튼을 누르면 어두운 테마가 적용되는 페이지를 만들어보자.

# 실행 흐름 생각해보기
밝게 버튼을 눌렀을 때,
* 배경색이 하얀색이 된다
* 글자는 검은색이 된다
* 박스의 외곽선이 검은색이 된다

어둡게 버튼을 눌렀을 때,
* 배경색이 검은색이 된다
* 글자는 하얀색이 된다
* 박스의 외곽선이 하얀색이 된다

```<body>```에 배경색과 글자색을 적용하는 방식을 적용.

```<body>``` 아래에 있는 모든 ```<div>```요소 대상으로 외곽선의 색상을 변경하는 방식으로 문제를 해결해보자.

# html 작성
자바스크립트로 제어할 스타일은 특정 클래스나 속성을 선택하는 이벤트가 아니다. 

그러므로 html과 스크립트 작성 순서는 크게 상관이 없겠지만, 이번 문제는 css 복습의 의도가 다분히 보이므로 예시로 제시된 이미지와 최대한 비슷하게 작성해본다.

### 가장 먼저 ```<header>```과 ```<section>```을 나누자.

## (1) header 영역
```html
...
<style>
    .center { text-align: center; }
</style>
...
<header>
    <div class="center">
        <h2>style속성 활용하기</h2>
        <button type="button">어둡게</button>
        <button type="button">밝게</button>
    </div>
</header>
...
```
너무 어렵게 생각하지 말자. 디자인엔 답이 없다.

## (2) section 영역
```html
<style>
    .content { 
        width: 70%; /* 바깥 상자의 가로 길이 */
        border: 1px solid #777; /* 바깥 상자의 외곽선 */
        margin: 0 auto; /* 상자 가운데 정렬 */
        overflow: hidden;
    }
    .left {
        width: 50%; /* 안쪽 상자의 가로 길이 */
        float: left; /* 왼쪽으로 쌓는다 */
        box-sizing: border-box;
    }
    .content, .left { padding: 5px; }
    .inner { 
        border: 1px solid #777; 
        height: 300px; /* .inner 상자들과 높이를 맞추기 위함 */
        overflow: auto; /* 상자가 작아지면 글상자에 스크롤이 나타난다 */
    } 
</style>
...
<section>
    <div class="centent"> <!-- 바깥 상자 -->
        <div class="left"><!-- float:left로 쌓을 상자 -->
            <div class="inner">
                <img src="img/1.jpg" width="100%", height="100%">
            </div>
        </div>
        <div class="left"><!-- float:left로 쌓을 상자 -->
            <div class="inner">
                <p> 글 내용 ...</p>
            </div>
        </div>
    </div>
</section>
...
```

# 자바스크립트 작성
## (1) 버튼요소 가져오기
상세한 코드 구현 이전에, 이벤트를 추가할 요소를 가져오고 적절한 이벤트를 추가하자.

버튼 요소를 가져오기 위해 버튼에 ```id```를 부여한다.
```html
<button type="button" id="dark">어둡게</button>
<button type="button" id="bright">밝게</button>
```

## (2) stub 생성
이번 실습에서는 ```window.onload```를 이용해 이벤트를 추가해보자. ```<header>``` 상단의 ```<script>```에서 작성한다.
```html
<script>
    window.onload = function() {
        var dark = document.getElementById("dark");
        dark.onclick = function() {
            /* 함수 구현 */
        }

        var bright = document.getElementById("bright");
        birght.onclick = function() {
            /* 함수 구현 */
        }
    }
</script>
```

## (3) 함수 구현
### 1) body 요소 가져오기
```<body>```의 요소를 가져와서 스타일을 적용할 것이다. ```<body>``` 의 요소를 가져온다.

```javascript
var dark = document.getElementById("dark");
dark.onclick = function() {
    var body = document.querySelector("body");

}
```

여기서 ```<body>```는 ```document```의 하위 요소이기 때문에 ```document```에서 직접 접근이 가능하다.

css선택자 표현식으로 말하자면 DOM 구조가 ```window > document > body``` 처럼 되어있는 것이다.

```<body>``` 요소는 아래와 같이 접근할 수 있다.
```javascript
var body = document.body;
```

텍스트가 들어가있는 ```<h2>```와 ```<p>```, ```<a>```는 ```querySelectorAll```을 통해 한번에 가져온다.
```javascript
var all = document.querySelectorAll("h2, p, a");
```

가져온 요소들은 어둡게, 밝게 버튼에서 함께 사용하므로 익명함수(```window.onload``` 이벤트 시 실행되는 익명함수)안에서 전역으로 선언한다.

### 2) 스타일 적용
```javascript
var body = document.body;
body.style.backgroundColor = "black"; /* 배경색 */

var all = document.querySelectorAll("h2, p, a");
all[0].style.color = "white";
all[1].style.color = "white";
all[2].style.color = "white"; /* 글자색 */
```
다중 선택자는 배열타입으로 반환하므로 배열로 접근하는 것을 잊으면 안된다.

### 3) 밝게 버튼 구현
색깔만 반대로 적용하면 된다.
```javascript
var bright = document.getElementById("bright");
bright.onclick = function() {
    body.style.backgroundColor = "white";

    all[0].style.color = "black";
    all[1].style.color = "black";
    all[2].style.color = "black";
}
```