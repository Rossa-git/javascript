# script02(css문법으로요소선택).html
css에서 선택자를 사용하듯 요소를 선택할 수 있다. css 문법을 잘 사용한다면 어렵지 않다.

css 선택자를 이용해서 요소 접근하는 방식은 반드시 외워두어야한다.

- **querySelector** : css문법으로 요소를 선택. 첫번째 요소만 가져온다 (단일 선택자)
- **querySelectorAll** : css문법으로 요소를 선택. 해당 요소 전부 가져온다. (다중 선택자)

# 실습 외형 만들기
```html
<body>
    <div class="box">
        <ul>
            <li>안녕하세요</li>
            <li>hello</li>
            <li>니하오</li>
        </ul>
    </div>
    <button type="button" id="btn">querySelector확인</button>
    <button type="button" id="btn2">querySelectorAll확인</button>
</body>
```
버튼을 클릭하면 ```<li>``` 요소를 선택해보자.
# 1. querySelector
위에서 설명했듯, ```querySelector```는 해당되는 요소 중 가장 첫번째만 가지고 온다.
## 자바스크립트 실습
```html
<script>
    var btn = document.getElementById("btn");
btn.onclick = function() {

    var box = document.querySelector(".box > ul > li");
    console.log(box);
}
</script>
```
```querySelector``` 안에 들어갈 값으로 css 선택자를 사용할 수 있다. css 선택자와 동일하므로 ```".box ul li"``` 도 같은 결과가 나온다.

콘솔로 출력하면 ```<li>안녕하세요</li>``` 만 출력되는 것을 확인할 수 있다. 단일 선택자이므로 가장 첫번째 요소만 가져온다.

# 2. querySelectorAll
```<li>``` 요소 전부를 가지고 오고 싶다면 ```querySelectorAll``` 메서드를 사용해야한다.
## 자바스크립트 실습
```html
<script>
    var btn2 = document.getElementById("btn2");
btn2.onclick = function() {

    var lis = document.querySelectorAll(".box ul li");
    console.log(lis);
}
</script>
```
선택자에 해당되는 모든 요소를 가지고 오기 때문에 배열의 형태를 가진다.
콘솔로 출력하면 아래와 같다.

```NodeList(3) [ li, li, li ]```