# quiz02.html 할일 목록 만들기
할 일 목록 리스트 페이지를 만든다

* 이름을 입력하고 확인버튼을 누르면 ```<input>```과 ```<button>```이 사라지고 이름이 나타난다.
* 할일을 입력하고 확인버튼을 누르면 입력한 할일이 아래에 표시된다.

```html
<body>
    <h2>할일 목록 만들기</h2>
    <div class="nameForm">
        <h2 class="nameTitle"></h2>
        <input type="text" placeholder="이름을 입력하세요">
        <button type="button">확인</button>
    </div>
    <div class="todoForm">
        <input type="text" placeholder="할일을 작성하세요">
        <button type="button">확인</button>
    </div>
</body>
```

# 자바스크립트 실습 - 이름 입력
## (1) 일단 사용할 요소를 온다.
```html
<script>
    var nameForm = document.querySelector(".nameForm");
    var nameTitle = document.querySelector(".nameTitle");
    var nameInput = nameForm.querySelector("input");
    var nameButton = nameForm.querySelector("button");
</script>
```
```nameInput```과 ```nameButton```을 어디에서 요소를 가져오는지 잘 확인해야한다. ```nameForm```에서 접근한다.

## (2) 버튼 이벤트 등록
```javascript
    nameButton.addEventListener("click", regist);

    function regist() {
        
    }
```
* 버튼을 누르면 ```h2.nameTitle```의 ```innerHTML```에 ```<input>``` 입력된 값을 넣는 작업을 해야한다.

```javascript
function regist() {
    nameTitle.innerHTML = nameInput.value + "님 안녕하세요";
}
```

h2.nameTitle에 값을 넣었으면 ```<input>```과 ```<button>```을 화면에 보이지 않게 해주어야한다.

요소를 삭제하는 방법도 있지만, ```style``` 속성을 이용해서 보이지 않게 할 수 있다.

```javascript
function regist() {
    nameTitle.innerHTML = nameInput.value + "님 안녕하세요";

    /*
    //삭제하는 방법
    nameInput.remove();
    nameButton.remove();
    */
    
    //style 속성 변경
    nameInput.style.display = "none";
    nameButton.style.display = "none";
}
```

# 자바스크립트 실습 - 할 일 리스트
확인 버튼을 누를 때마다 항목이 추가되는 프로그램이니 필요한 요소를 만들자.
```html
...
<div class="todoForm">
    <input type="text" placeholder="할일을 작성하세요">
    <button type="button">확인</button>
</div>
<ul class="todoList">

</ul>
...
```

## (1) 필요한 요소 가져오기
```javascript
    var todoForm = document.querySelector(".todoForm");
    var todoList = document.querySelector(".todolist");
    var todoInput = todoForm.querySelector("input");
    var todoButton = todoForm.querySelector("button");
```
요소를 어디에서 접근하는지 잘 확인해야한다. ```todoInput```과 ```todoButton```은 ```todoForm```으로 접근한다

## (2) 버튼 이벤트 등록
```javascript
    todoInput.addEventListener("click", createTodo);
    function createTodo() {
        
}
```

* 버튼을 누르면 ```input.todoInput```에 있던 값을 가져오고, ```<input>```의 입력란이 공백이 되어야한다. (다음 값을 입력받기 위한 UX)
```javascript
    function createTodo() {
        var text = todoInput.value;
        todoInput.value = ""; 공백처리
        
    }
```

* 버튼을 누르면 ```<ul>```아래에 삽입 될 ```<li>```태그를 생성한다. 생성된 ```<li>```의 ```innerHTML```에 ```<input>```로 받아온 값을 넣는다.
```javascript
function createTodo() {
    var text = todoInput.value;
    todoInput.value = ""; 공백처리

    //ul아래에 삽입될 li태그를 생성
    var li = document.createElement("li");
    li.innerHTML = text;
}
```

* 추가된 ```li```를 삭제하는 버튼도 함께 생성해야한다. 삭제기능은 지금 구현하지 않을테지만, 이벤트는 일단 등록해주자.
```javascript
function createTodo() {
    ...
    ...

    //버튼생성
    var button = document.createElement("button");
    button.innerHTML = "X";
    button.onclick = function() {
        alert("1");
    }


}
```

* 조립을 하면된다. ```button```은 ```li```에 자식으로 추가하고, ```li```는 ```ul.todolist```에 자식으로 추가하면 된다.
```javascript
function createTodo() {
    ...
    ...

    li.appendChild(button);
    todoList.appendChild(li);
}
```

# 자바스크립트 실습 - 리스트 삭제 기능

### 지금은 구현하지 않는다

```javascript
...
    button.onclick = function() {
        alert("1");
    }
...
```
위에서는 추가된 ```<li>``` 안에 있는 ```<button>```에 익명함수로 이벤트를 등록해두었다. 공부를 더 하고 아래에서 기본함수를 선언해서 실행시켜주는 방식으로 기능을 구현할 것이다

## (1) 버튼 이벤트 등록
```javascript
function createTodo() {
...
    //버튼생성
    var button = document.createElement("button");
    button.innerHTML = "X";

    // button.onclick = function() { alert("1"); }
    button.addEventListener("click", deleteTodo);

...
}

function deleteTodo() {
    alert("1");
}
```
배운것으로 지금 삭제기능을 구현할 수 없는 이유는 아래와 같다.
1. x버튼 클릭시 해당버튼 요소를 판별할 수 없다
2. x버튼 클릭시 부모요소인 li를 삭제해야한다