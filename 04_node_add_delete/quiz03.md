# quiz03.html
quiz02.html을 복사해서 가져온다.

quiz02의 할일 목록 리스트에 기능을 추가해보자.

* 추가된 할일 항목을 위아래로 이동할 수 있는 버튼 2개를 추가한다.
* 할일 추가버튼을 누르면 생성되는 ```<li>``` 안에 버튼이 생성된다.

```javascript
function createTodo() {
    ...
    ...

    //위로이동버튼생성
    var upBtn = document.createElement("button");
    upBtn.innerHTML = "↑";
    upBtn.addEventListener("click", up);

    //아래로이동버튼생성
    var downBtn = document.createElement("button");
    downBtn.innerHTML = "↓";
    downBtn.addEventListener("click", down);

    li.appendChild(button);

    /* 버튼을 자식요소로 추가한다 */
    li.appendChild(upBtn);
    li.appendChild(downBtn);
    
    todoList.appendChild(li);
}
```

# 이벤트가 실행되는 요소 가져오기
```event.target```는 이벤트가 실행되고 있는 요소 자체를 가져온다.
```javascript
function up() {
    console.log(event.target)
}
```
실행하면 클릭했던 버튼의 요소가 나온다.

이걸 이용해서 부모요소에 접근하자.

# 자바스크립트 실습
script05.html에서 했던 내용과 코드흐름이 똑같이 작동하기 때문에 이벤트 실행 주체 요소를 가져오는 방법을 아는게 이번 문제의 핵심이다.
## function up()
```javascript
function up() {

    console.log(event.target); 
    
    var current = event.target.parentElement;
    var previous = current.previousElementSibling;
    
    if(previous == null) return;
    
    if(confirm("이동하시겠습니까?")){
        todoList.insertBefore(current, previous);
    }
    
}
```

## function down()
```javascript
function down() {

    var current = event.target.parentElement;
    var next = current.nextElementSibling;
    
    if(next == null) return;
    
    if(confirm("이동하시겠습니까?")){
        todoList.insertBefore(next, current);
    }

}
```

# 삭제기능 구현
이제는 삭제기능을 구현함에 있어 생긴 문제점을 해결할 수 있게 되었다.
### 1. x버튼 클릭시 해당버튼 요소를 판별할 수 없다

- 이 문제는 ```event.target```로 해결이 가능하다.

### 2. x버튼 클릭시 부모요소인 li를 삭제해야한다
- 클릭 한 버튼 요소를 가져올 수 있으므로, 그 부모요소 접근 또한 가능하다

```javascript
function deleteTodo() {
    //문제점
    //1. x버튼 클릭시 해당버튼 요소를 판별할 수 없다
    //2. x버튼 클릭시 부모요소인 li를 삭제해야한다
    
    console.log(event.target);
    event.target.parentElement.remove();
}
```
