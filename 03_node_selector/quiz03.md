# quiz03(문제3).html
* 선택상자 안의 계절을 선택하면 이미지가 계절에 맞는 이미지로 변경되도록 한다.

* 색상을 선택하면 이미지의 외곽선 색상이 변경되도록 한다.

```<input type="color">```은 색상을 선택할 수 있는 태그이다. 

<input type="color">

위와 같은 입력도구로 나타난다.

```html
<body>
    <form>
        <img src="img/1.jpg" width="200"><br/>
        
        <select class="select">
            <option value="img/1.jpg">봄</option>
            <option value="img/2.jpg">여름</option>
            <option value="img/3.jpg">가을</option>
            <option value="img/4.jpg">겨울</option>
        </select>
        
        <span>변경할 색상</span>
        <input type="color" class="input">
    </form>

    <script>
        /* 자바스크립트 구현 */
    </script>
</body>
```

# 실행 흐름 생각해보기
1. ```<select>``` 요소 선택이 변경될 때, ```<img>```의 ```src``` 속성을 변경한다.
2. ```<input type="color">```의 값(```value```)이 변경될 때, ```<img>```의 ```style``` 속성을 변경한다.

# 자바스크립트 작성
작성되어야 할 이벤트는 각각 별개의 이벤트이므로 이미지 변경 이벤트와 이미지 외곽선 변경이벤트를 하나씩 작성해보자.

## (1) 이벤트 공통으로 사용할 요소
구현해야할 이벤트 모두 ```<img>``` 태그를 제어하는 이벤트이므로 ```<img>``` 요소는 스크립트 내에서 전역으로 선언한다.
```<img>```에 ```class```를 부여하여 선택해온다.
```html
...
    <img src="img/1.jpg" class="img" width="200" style="border: 3px solid black"><br/>
...
<script>
var select = document.querySelector(".select");
</script>
```
```getElementsByTagName```으로 요소를 가져오면 ***배열***의 형태로 반환되므로 요소 접근은 ***배열에 접근하는 것과 같다***는 걸 잊으면 안된다.

## (2) stub 생성
script01.html 에서 공부했듯이 원하는 ```<option>```에 접근하는 좋은 방법은 해당 ```<option>```을 가지고 있는 ```<select>```에 먼저 접근한다.
```html
<script>
    var select = document.querySelector(".select");

    /* select 태그 */
    var select = document.querySelector(".select");
    select.onchange = function() {
        /* 함수 구현 */
    }

    /* input 태그 */
    var input = document.querySelector(".input");
    input.onchange = function() {
        /* 함수 구현 */
    }   
</script>
```

### > 강사님이 추가 설명한 내용
```javascript
var a = document.querySelector(".select");
var b = document.getElementsByClassName("select");
```
```var a```와 ```var b```는 ***다르다***.

```var a```는 단일 선택자로 선택된 요소이고 ```var b```는 다중 선택자로 선택된 요소다. ```var b```는 다중선택자로 선택된 여러개의 요소를 담고 있기 때문에 ***배열타입***이며, ```var a```와 같은 요소를 가지고 오고 싶다면 아래와 같이 선택자를 사용해야 한다.
```javascript
var b = document.getElementsByClassName("select")[0];
```
## (3) 이벤트로 실행될 익명함수 구현
### 1) 이미지 변경 이벤트
```<select>```의 ```value``` 값은 ```selected```된 ```<option>```의 ```value``` 값이다

제시된 문제 속 ```<option>```의 ```value```값으로 이미지의 주소값이 들어가 있으니, ```<img>```의 ```src```속성에 바로 대입해줄 수 있다.
```javascript
var select = document.querySelector(".select");
select.onchange = function() {
    img.src = select.value;
}
```

### 2) 이미지 외곽선 변경 이벤트
```<input>```의 외형이 바뀌었다고 어렵게 생각하지 말자.

```type="color"```의 속성을 가지는 ```<input>```태그의 ```value```값은 선택한 색상값이다.
```javascript
var input = document.querySelector(".input");
input.onchange = function() {
    img.style.border = "3px solid" + input.value;
}
```