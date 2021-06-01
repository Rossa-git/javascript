# script02(노드추가2).html
버튼을 클릭하면 ```ul.list```의 하위요소로 아래와 같은 모형을 추가하는 스크립트를 작성해보자.

```html
<li><a href="##">1. ~~</a></li>
```
이번 실습에서는 요소를 추가하는 방법 중 ```document.createElement()```과 ```createTextNode()```을 이용해본다.

# 실습 외형 만들기
```html
<body>
    <ul class="list">
        <!-- <li><a href="##">1. ~~</a></li> -->
    </ul>
    <button type="button" id="add">추가하기</button>
</body>
```

# 자바스크립트 작성
## (1) stub 생성
```html
<script>
    var add = document.getElementById("add");
    add.addEventListener("click", function() {
        /* 구현 */
    });
</script>
```

## (2) 함수 구현
### 1) 요소 생성
요소를 직접 생성할 때, ```document.createElement("태그")```를 사용한다.

요소(태그)가 아닌 텍스트를 생성하고자 할 때는 ```createTextNode("텍스트")```를 사용한다.

```javascript
add.addEventListener("click", function() {

    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "https://www.naver.com";   /* 이전에 요소선택과 같이 요소의 속성을 선택할 수 있다. */
    var text = document.createTextNode("헐");
    console.log(li);
    console.log(a);
    console.log(text);

});
```
콘솔로 출력되는 내용을 확인해보면 태그 그 자체다.
```
<li></li>
<a></a>
"헐"
```

### 2) 요소 안에 요소 추가
```javascript
    /* li의 자식 요소로 a 를 추가한다 */
    li.appendChild(a);
    /* a의 자식 요소로 text를 추가한다 */
    a.appendChild(text);
```
자식요소를 추가한 뒤 ```console.log(li);```로 확인해보자.
```
<li>
    <a href="https://www.naver.com">헐</a>
</li>
```

이제 완성된 ```<li>```를 ```ul.list```에 추가해보자.
```javascript
    document.querySelector(".list").appendChild(li);
```

### 3) 텍스트에 글번호 매기기
이벤트 함수 밖에 글번호 ```var count```변수를 선언하고 ```createTextNode()```의 매개변수 값을 변경해주자.
```javascript
    var count = 0;
    add.addEventListener("click", function() {
        ...
        var text = document.createTextNode(++count + ". 헐");
        ...
    });
```

# innerHTML과 다른 이유?
이벤트가 실행될 때마다 ```var li```는 새롭게 만들어지는 요소이다.

java로 치면 메소드 안의 멤버변수가 이전에 실행했던 메소드의 변수와 다른 것을 생각해보자.

