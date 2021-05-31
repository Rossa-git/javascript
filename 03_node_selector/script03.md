# script03(css속성변경).html

1. 노드의 css속성을 바꿀 때에는 style 속성을 이용한다.
2. css 속성은 **카멜 표기법**을 따른다.
3. 노드의 style에 전달되는 값은 문자열로 작성한다.


```javascript
/* 임의의 요소 */
var e = document.getElementById("xx");

e.style.color = "red";
e.style.borderColor = "blue";
```
* 자바스크립트에서는 css에서 사용하던 속성 'border-color' 처럼 ```- (하이픈)```을 입력하게되면 에러가 발생한다. 
* 하이픈은 연산자로 취급하기 때문에 이러한 속성들은 카멜표기법으로 입력한다.

인라인으로 ```style```속성을 지정하는 것과 같다고 생각하면 쉽다.
```html
<p id="p">예시</p>
<script>
    var p = document.getElementById("p");
    p.style.color = "red";
</script>
```
아래와 같이
```html
<p id="p" sytle="color: red">예시</p>
```
이것과 같은 형태다.

# 실습 외형 만들기
버튼을 클릭했을 때, 요소의 색상과 배경색이 바뀌는 이벤트를 자바스크립트로 구현해보자.

```html
<body>
    <h2>JS로 CSS변경하기</h2>
    <div>
        <ul class="box">
            <li>홍길동</li>
            <li>이순신</li>
            <li>신사임당</li>
        </ul>
    </div>
    <button type="button" id="btn">색상과 배경색 변경하기</button>

    <script>
        /* 자바스크립트 작성하기 */
    </script>
</body>
```

# 자바스크립트 실습
이벤트 추가는 편한대로 해도 상관없지만, 이번 실습에서는 ```addEventListener```로 이벤트를 추가해보자.
## (1) stub 생성
버튼 요소를 가져오고, 해당 버튼 요소에 이벤트를 추가한다.
```html
<script>
    var btn = document.getElementById("btn");
    btn.addEventListener('click', function(){});

</script>
```

## (2) 익명함수 구현하기
```<ul>``` 안의 ```<li>```에 접근하는 방법은 여러개이지만, css를 제어하는 스크립트이니 이왕이면 css문법으로 접근해보자.

```javascript
btn.addEventListener('click', function(){

    var lis = document.querySelectorAll(".box > li");

    });
```

### **1) 글자색 변경**
글자색을 설정하는 css 속성은 ```color```이다.

```요소.style.color```로 접근한다.
```javascript
btn.addEventListener('click', function(){

    var lis = document.querySelectorAll(".box > li");

    // "#FF0000" == "red"
    lis[0].style.color = "#ff0000"; 
    

    });
```

### **2) 배경색 변경**
배경색을 설정하는 css 속성은 ```background-color```이다.

하이픈은 사용할 수 없으므로 ```요소.style.backgroundColor```로 접근한다.
```javascript
btn.addEventListener('click', function(){

    var lis = document.querySelectorAll(".box > li");

    // "#FF0000" == "red"
    lis[0].style.color = "#ff0000"; 
    
    lis[0].style.backgroundColor = "black";

    });
```

## (3) 요소가 많을 경우 반복문을 사용
요소가 많을 경우 하나하나 입력할 수 없기 때문에 반복문을 사용해서 코드 길이를 줄여보자.
```javascript
for(var i = 0; i < lis.length; i++) {
    lis[i].style.color = "#ff0000";
    lis[i].style.backgroundColor = "black";
}
```

