# quiz02(문제2).html
비밀번호, 아이디가 변경될 때마다 메세지를 출력하는 자바스크립트 구현하기

### **문제**
* 아이디가 4글자 미만, 비밀번호가 8글자 미만일 때 해당 ```textbox```아래에 조건을 만족해야 한다는 메세지를 출력한다.
* 조건을 만족한 상태에는 ```<input>```의 외곽선을 초록색이 된다
* 조건을 만족하지 못한 상태에는 ```<input>```의 외곽선이 빨간색이 된다.

```html
<body>
<section>
    <form>

        <label>아이디</label>
        <input type="text" name="id" id="id"><br/>
        <span class="idMsg"></span><br/>

        <label>비밀번호</label>
        <input type="password" name="pw" id="pw"><br/>
        <span class="pwMsg"></span><br/>
        
    </form>
</section>

<script>
    /* 자바스크립트 작성 */
</script>
</body>
```

# 자바스크립트 작성
## (1) stub 생성
사용할 이벤트 선정
* **onchange** : 값이 변경될 때, 이벤트 발생. 정확히는 ```<input>```에서 focus가 바뀌었을때 이벤트가 발생하므로, 버튼을 사용하는 경우에는 괜찮으나 입력 즉시 이벤트 발생은 이루어지지 않는다. ***이 문제에서 사용하기에 적합한 이벤트 속성은 아니다.***
* **onkeyup** : ```value```값이 변경된 이후, 키보드에서 손을 떼면 발생하는 이벤트. 키를 꾹 눌러 입력을 반복하는 경우 당연히 발생하지 않는다.
* **oninput** : ```value```값이 바뀔 때마다 발생하는 이벤트. ```keyPress```(키를 누른 상태) 직후 ```value```값이 변경되면서 이벤트가 발생한다.

강사님이 제시한 답에서는 ```onkeyup```을 사용함. 

(검색해서 찾아보니 안드로이드 브라우저에서는 ```onkeyup```이 제대로 발생되지 않으므로 ```oninput```를 사용하는 경우가 있다고 합니다)

```<input>``` 요소와 함께 메세지를 출력할 ```<span>``` 도 같이 가져오자. 이벤트가 발생될 때마다 ```<span>```을 가져와도 상관없다.

* 제시된 문제 속 ```<span>```은 ```class``` 속성으로 구분할 수 있기 때문에, 선택자를 잘 선택해야한다.
* ```querySelector```로 특정 클래스의 첫번째 요소만 가져오는 방법도 있고, ```getElementsByClassName```로 클래스를 지정하여 가지고 올 수 있다.
* 이때 ```getElementsByClassName```로 요소를 가져온다면 요소는 배열의 형태로 가져오기 때문에 요소에 접근할 때에는 ***배열에 접근하는 형태***로 접근해야한다.
```html
<script>
    var id = document.getElementById("id");
    /* querySelector로 접근 */
    var idMsg = document.querySelector(".idMsg");

    id.onkeyup = function() {
        /* 함수 구현 */
    }

    var pw = document.getElementById("pw");
    /* getElementsByClassName */
    var pwMsg = document.getElementsByClassName("pwMsg");

    pw.onkeyup = function() {
        /* 함수 구현 */
    }
</script>
```

## (2) 이벤트로 실행 될 익명함수 구현
문제에서 제시한 내용을 다시 보자.
* 조건 : 아이디는 4글자 이상, 비밀번호는 8글자 이상
* 조건을 만족한 상태 : ```<input>```의 외곽선(```border```)이 초록색
* 조건을 만족하지 못한 상태 : ```<input>```의 외곽선(```border```)이 빨간색, ```<span>``` 안에 조건을 만족하라는 메세지 출력

조건문을 사용해서 스타일을 지정하자.
```javascript
id.onkeyup = function() {
    if(id.value.length < 4) {
        id.style.borderColor = "red";
        idMsg.innerHTML = "아이디는 4글자 이상 입력해주세요";
    } else {
        idMsg.innerHTML = "";
        id.style.borderColor = "green";
    }
}

...

pw.oninput = function() {
    if(pw.value.length < 8) {
        pwMsg[0].innerHTML = "비밀번호는 8글자 이상 입력해주세요";
        pw.style.borderColor = "red";
    } else {
        pwMsg[0].innerHTML = ""
        pw.style.borderColor = "green";
    }
}
```