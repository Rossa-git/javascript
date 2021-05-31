# script01(요소선택).html
# 1. getElementsByName
지금껏 요소 선택 방법으로 ```document.getElementById```를 사용하여 id로 요소를 구분해 선택해왔지만, ```checkbox```와 같이 요소 하나가 아닌 여러개를 가지고 와야하는 경우가 있을 수 있다.

요소 여러개를 선택하는 다중 선택자를 알아보자.

# 실습 외형 만들기
```html
<body>
    <form action="">
        <input type="checkbox" name="inter" value="1">java
        <input type="checkbox" name="inter" value="2">jsp
        <input type="checkbox" name="inter" value="3">js
        <input type="checkbox" name="inter" value="4">css
        <input type="checkbox" name="inter" value="5">html
        <button type="button" id="btn1">체크박스 요소확인</button>
    </form>
</body>
```

'체크박스 요소확인'이라는 버튼을 누르면 콘솔 창에 체크박스 요소들의 ```value```값을 출력하도록 만들어보자.

# 자바 스크립트 실습
## (1) 함수 생성, 버튼 요소 가져오기
```html
<script>
    var btn1 = document.getElementById("btn1");

    btn1.onclick = function() {

    }
</script>
```

## (2) name 속성 값이 'inter'인 요소 선택
```getElementsByName``` 메소드를 사용해서 가져온다.
가져온 값은 여러개일 수 있으므로 ```var inter```은 배열타입이 된다.

```html
<script>
    ...
    btn1.onclick = function() {
        /* name이 inter인 요소들을 선택 */
        var inter = document.getElementsByName("inter");
    }
</script>
```
콘솔창에서 ```inter```을 출력하면 배열의 형태로 나오는 것을 확인할 수 있다.

```NodeList(5) [input, input, input, input, input]```

## (3) 요소 접근하기
반복문을 사용해서 체크박스 요소에 접근하여 ```value```값을 출력한다.
```html
<script>
    ...
    btn1.onclick = function() {

    var inter = document.getElementsByName("inter"); //배열

    for(var i = 0; i < inter.length; i++) {
        //배열 안 요소의 값
        console.log(inter[i].value); 
        
        //배열 안의 요소가 체크 되었는지 여부
        console.log(inter[i].checked); 
    }
}
</script>
```

----
# 2. getElementsByClassName 
```name``` 속성이 아닌 ```class``` 속성으로도 접근이 가능하다. 라디오 버튼의 요소를 갖고 와 보자.

# 실습 외형 만들기
```html
<body>
    <form>
        <input type="radio" name="major" class="test" value="1">프로그램
        <input type="radio" name="major" class="test" value="2">디자인
        <input type="radio" name="major" class="test" value="3">시스템
        <input type="radio" name="major" class="test" value="4">네트워크
        <button type="button" id="btn2">라디오버튼 요소 확인</button>
    </form>
</body>
```
```class``` 값을 이용해 자바스크립트를 통해 요소에 접근할 수 있다
# 자바스크립트 실습
```getElementsByClassName``` 메소드를 이용해 요소를 가져온다.
```html
<script>
    /* btn2 요소 가져오기 */
    var btn2 = document.getElementById("btn2");

    /* class 값을 기준으로 */
    btn2.onclick = function() {
        var test = document.getElementsByClassName("test"); //배열

        for(var i = 0; i < test.length; i++) {
            console.log(test[i].value);
            console.log(test[i].checked);
        }
    }
</script>
```
콘솔에서 ```var test```를 출력하면 가져올 값이 여러개이므로 배열 타입이다.

```HTMLCollection(4) [input.test, input.test, input.test, input.test, major: input.test]```

---
# 3. getElementsByTagName
태그의 이름으로 요소를 가지고 올 수 있다. 사용에 조금 주의가 필요하다.

# 실습 외형 만들기
```html
<form>
    <select>
        <option>봄</option>
        <option>여름</option>
        <option>가을</option>
        <option>겨울</option>
    </select>
    <button type="button" id="btn3">셀렉트 요소 확인</button>
</form>
```
버튼을 누르면 ```<option>``` 요소를 가져오도록 해보자.

# 자바스크립트 실습
## (1) 함수 생성, 요소 가져오기
```html
<script>
    var btn3 = document.getElementById("btn3");
    btn3.onclick = function() {

    }
</script>
```

## (2) option 요소 가져오기
```getElementsByTagName``` 메소드를 이용해 해당 태그의 요소를 가져올 수 있다.
```html
<script>
    var btn3 = document.getElementById("btn3");
    btn3.onclick = function() {
        var option = document.getElementsByTagName("option");
    }
</script>
```
콘솔로 출력하면 아래와 같은 값을 얻을 수 있다.

```HTMLCollection { 0: option, 1: option, 2: option, 3: option, length: 4 }```

# TagName으로 요소를 가져올 시 주의사항
만약 페이지에 ```select```가 2개 이상이라면 위의 코드로 작성시 큰 문제가 생긴다.
```html
...
<select>
    <option>감자</option>
    <option>토마토</option>
    <option>게</option>
    <option>배</option>
</select>
<select>
    <option>봄</option>
    <option>여름</option>
    <option>가을</option>
    <option>겨울</option>
</select>
...
```
```<option>```이 계절인 요소만 가져오고 싶어도 ```getElementsByTagName```을 사용한다면 원하지 않는 요소도 함께 가져오게 된다.

이런 문제를 방지하기 위해 ```<option>```에 바로 접근하는 것이 아니라 상위 태그인 ```<select>```에 ```id```값을 부여하여 점진적으로 접근하는 방법을 사용한다.

css 문법으로 보면 ```select#id > option``` 처럼 접근하는 것이다.

## 코드 개선하기
```<body>```영역 안, 가져오고 싶은 ```<select>```에 ```id```값을 부여한다.
```html
<select id="selector">
    <option>봄</option>
    <option>여름</option>
    <option>가을</option>
    <option>겨울</option>
</select>
```

가져올 ```<option>```을 갖고 있는 ```<select>```요소를 가져온다.
```javascript
var selector = document.getElementById("selector");
```

```var selector```의 하위 요소인 ```<option>```에 ```.``` 으로 접근이 가능하다.
 ```DOM```이 ```BOM```에 포함되고, ```<body>```가 ```DOM```에 포함되어있듯, ```<option>``` 또한 ```<select>```에 포함되어있다.
```javascript
var option = selector.getElementsByTagName("option");
```

요소는 여러개이므로 ```var option```은 배열타입이다. 반복문을 이용해서 요소의 값을 추출해보자.
```html
<script>
    var btn3 = document.getElementById("btn3");
    btn3.onclick = function() {

    var selector = document.getElementById("selector");
    var option = selector.getElementsByTagName("option");

    for(var i = 0; i < option.length ; i++) {
        /* option의 value값 */
        console.log(option[i].value); 

        /* option 요소들의 선택여부 */
        console.log(option[i].selected);
    }
}
</script>
```