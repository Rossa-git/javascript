# script01(노드추가1).html
노드를 선택하는 법을 익혔다면 이제는 노드를 추가하거나 삭제하는 방법을 배워보자.

### 요소를 추가하는 방법
|함수|설명|
|-|-|
createElement() | 요소를 생성
createTextNode()| 텍스트를 생성
appendChild() | 요소를 부모 자식 관계로 넣어줌
innerHTML = | 요소를 문자방식으로 생성
insertBefore(삽입노드, 기준노드) |기준노드 앞에 삽입노드 추가

script01.html 실습에서는 우리가 사용해봤던 ```innerHTML```을 이용하여 노드를 추가해본다.
# 실습 외형 만들기
```html
<body>
    <div id="inner1">

    </div>

    <div id="inner2">
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>

    <div id="inner3">

    </div>
    <hr/>
    <button type="button" id="btn1">inner1</button>
    <button type="button" id="btn2">inner2</button>
    <button type="button" id="btn3">inner3</button>
</body>
```
* 1번 버튼을 눌렀을 때 : ```.inner1```에 문자열을 집어넣는다
* 2번 버튼을 눌렀을 때 : ```<li>```에 문자열을 집어넣는다
* 3번 버튼을 눌렀을 때 : ```.inner3```에 체크박스를 넣어본다. 3번 버튼을 누를 때마다 체크박스가 추가된다.

# 자바스크립트 실습
우리가 알고 있는 ```innerHTML```을 사용해서 요소를 추가해보자.

## ```btn1``` : (1) 필요한 요소, stub 생성
```html
<script>
    var inner1 = document.getElementById("inner1");
    var btn1 = document.getElementById("btn1");
    btn1.onclick = function() {
        /* 구현 */
    }
</script>
```

## ```btn1``` : (2) 함수 구현
```javascript
btn1.onclick = function() {
    inner1.innerHTML = "<b>버튼클릭시 문자열의 방식으로 요소를 생성</b>";
}
```
잘 되는지 확인해본다.

- - - -

## ```btn2``` : (1) 요소 가져오기, stub 생성
```javascript
    var inner2 = document.getElementById("inner2");
    var btn2 = document.getElementById("btn2");
    bt2.onclick = function() {
        /* 구현 */
    }
```


## ```btn2``` : (2) 함수 구현
```inner2```는 ```<div>```이다. ```<li>```에 텍스트를 추가하고 싶은 것이므로 ```inner2``` 아래의 ```<li>```까지 접근한다.
```javascript
    var list = inner2.querySelectorAll("ul > li");
```
```var list```는 배열(리스트)이다. 잊으면 안된다. 배열(리스트)는 반복문으로 접근하자.
```javascript
btn2.onclick = function() {
    var list = inner2.querySelectorAll("ul > li");

    for(var i = 0; i < list.length; i++) {
        list[i].innerHTML = "이렇게 한번에 추가하기";
    }
}
```
```<li>```가 한번에 변했는지 확인한다.

- - - 

## ```btn3``` : (1) 요소 가져오기, stub 생성
```javascript
    var inner3 = document.getElementById("inner3");
    var btn3 = document.getElementById("btn3");
    btn3.onclick = function() {
        /* 구현 */
    }
```

## ```btn3``` : (2) 함수 구현
```javascript
btn3.onclick = function() {
    var str = "<input type='checkbox' name='add'>"
    inner3.innerHTML += str;
}
```
값은 잘 나오나, 후에 문제가 생길 수 있다.

```var str```은 함수 밖에서는 접근할 수 없기 때문이다. 

아래와 같이 코드를 보완해준다. 아래 모형은 잘 기억해둬야한다.

```javascript
var inner3 = document.getElementById("inner3");
var btn3 = document.getElementById("btn3");

var str = "";

btn3.onclick = function() {
    str += "<input type='checkbox' name='add'>"
    inner3.innerHTML = str;
}
```
```innerHTML```에 요소(문자열, ```str```)를 덧붙이는 것이 아니라 덧붙여진 문자열(```str```)을 통째로 대입하는 것이다.