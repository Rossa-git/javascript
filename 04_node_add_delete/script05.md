# script05(노드회전).html
요소를 선택하는 법을 좀 더 자세히 알아보자.

기능 |설명
-|-
```childNodes```|모든 자식 노드 선택 (단, 노드에 생략된 text도 포함된다
```children```|모든 자식 노드 선택
```parentElement```|부모노드 선택
```nextElementSibling```|다음 형제 노드 선택
```previousElementSibling```|이전 형제 노드 선택
```firstChild```|첫번째 자식 노드 선택
```lastChild```|마지막 자식 노드 선택

이번에는 나 자신이나, 자식요소를 선택하는 방법이 아닌 부모나 형제 요소를 선택하는 방법을 익혀보자.

```html
<body>
    <table>
        <thead>
        <tr>
            <th>이동</th>
            <th>번호</th>
            <th>이름</th>
            <th>내용</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <button onclick="up(this)">↑</button>
                    <button onclick="down(this)">↓</button>
                </td>
                <td>1</td>
                <td>홍길동</td>
                <td>안녕하세요</td>
            </tr>
            <tr>
                <td>
                    <button onclick="up(this)">↑</button>
                    <button onclick="down(this)">↓</button>
                </td>
                <td>2</td>
                <td>강감찬</td>
                <td>안녕하세요</td>
            </tr>
            <tr>
                <td>
                    <button onclick="up(this)">↑</button>
                    <button onclick="down(this)">↓</button>
                </td>
                <td>3</td>
                <td>홍길자</td>
                <td>안녕하세요</td>
            </tr>
            <tr>
                <td>
                    <button onclick="up(this)">↑</button>
                    <button onclick="down(this)">↓</button>
                </td>
                <td>4</td>
                <td>신사임당</td>
                <td>안녕하세요</td>
            </tr>
            <tr>
                <td>
                    <button onclick="up(this)">↑</button>
                    <button onclick="down(this)">↓</button>
                </td>
                <td>5</td>
                <td>이순신</td>
                <td>안녕하세요</td>
            </tr>
        </tbody>
    </table>
</body>

```

화살표 버튼을 누르면 행을 이동시키는 스크립트를 작성해보자.

# 자바스크립트 실습
버튼을 누르면 행의 위치를 바꾸는 프로그램이다.

행을 의미하는 ```<tr>```을 이동시켜주면 될 것이다.

하지만 버튼은 <tr> 안에 있는 <td> 안에 있기 때문에 그냥 부모요소도 아닌 할아버지할머니요소를 찾을 수 있어야한다.

버튼을 기준으로 부모형제 요소들을 선택해보는 것부터 먼저 해보자.

## (1) 부모/형제/자식요소 선택하기

```html
<script>
    function up(node) {
        console.dir(node);
    }
</script>
```
콘솔에 출력해서 확인하고 부모와 관련된 속성을 찾아보자.

```
...
parentElement: td
parentNode: td
...
```
콘솔로 이 요소들을 출력해자
```javascript
    console.log(node.parentElement);
    console.log(node.parentNode);
```

똑같이 ```td```가 나오지만, 둘은 다르다.

text 요소 포함 여부가 다르므로, 구현해야할 기능에서 필요한 것을 선택해서 사용해야한다.

이 실습에서는 ```element```가 붙어있는 걸 사용하는게 적절해보인다.

```html
<script>
function up(node) {
    console.dir(node);

    console.log(node.parentElement); //순수한 element요소
    console.log(node.parentNode); //text요소도 포함되어 있다면 선택

    console.log(node.nextElementSibling); //다음 형제노드
    console.log(node.previousElementSibling); //이전 형제노드

    console.log(node.firstElementChild); //첫번째 자식요소
    console.log(node.lastElementChild); //첫번째 자식요소
}
</script>
```
한줄씩 입력해보고 어떤 자식요소가 선택되는지 확인해보자.

## (2) 화살표 버튼 구현하기

### 1) 현재 행 선택
버튼을 눌렀을 때, 현재 행(```tr```)을 선택을 해야한다.
* 버튼의 부모 : ``td``
* ``td``의 부모 : ```tr```

쉽게 생각하면 된다. 부모의 부모를 찾아가면 된다.
```javascript
function up(node) {
    var current = node.parentElement.parentElement;
}
```
- - -

### 2) 이동할 위치의 행을 선택
밥상에 숟가락과 젓가락이 올라가있을때, 숟가락과 젓가락의 위치를 바꾸는 방법은 2가지다.
* 숟가락을 젓가락의 오른쪽에 둔다.
* 젓가락을 숟가락의 왼쪽에 둔다.

둘 중 어느 방법을 써도 젓가락, 숟가락 순서로 밥상에 올라가 있을것이다.

행을 이동하는 것도 마찬가지인데, ```up```이 실행되었을 때, 
* 현재 행의 위에 있는 행을 현재 행의 아래로 옮기는 방법
* 현재 행의 위에 있는 행의 위에 현재 행을 옮기는 방법

현재 행 위에 있는 행 요소를 가져와야하는건 동일하므로, 일단 윗 행을 가져오자.
```javascript
function up(node) {
    var current = node.parentElement.parentElement;

    var previous = current.previousElementSibling;
}
```

### 3) 기준노드 앞에 노드 추가
```부모요소.insertBefore```를 사용해서 노드 사이에 요소를 추가할 수 있다.

요소에 접근하기 쉽도록 ```tr```의 부모요소인 ```tbody```에 ```class```를 부여하자
```html
...
    <tbody class="tableList">
        ...
```

```tbody```의 요소도 가져온다
```html
<script>
    function up(node) {
        console.dir(node);

        var tableList = document.querySelector(".tableList");

        var current = node.parentElement.parentElement;

        var previous = current.previousElementSibling;

    }
</script>
```

```부모요소.insertBefore(삽입할 노드, 기준 노드)```를 사용해서 노드를 추가한다
```html
<script>
    function up(node) {
        console.dir(node);

        var tableList = document.querySelector(".tableList");

        var current = node.parentElement.parentElement;

        var previous = current.previousElementSibling;

        //부모요소.insertBefore(삽입할노드,기준노드)
        tableList.insertBefore(current, previous);
    }
</script>
```

결과를 확인해보고 잘 작동된다면, 안정적인 프로그램을 위해 코드를 보완하자.

행이 가장 맨 위에 있을 때 행을 위로 이동시키면 경고창을 띄우는 조건문을 만들어주자.

맨 윗 행의 이전 형제노드(자신보다 빨리 태어난 형제 노드)가 없는 경우 ```previousElementSibling```은 ```null```을 반환한다
```javascript
function up(node) {
    console.dir(node);

    var tableList = document.querySelector(".tableList");

    var current = node.parentElement.parentElement;

    var previous = current.previousElementSibling;


    if(previous == null) {
        alert("첫번째 행입니다");
        return; //함수종료
    }

    //부모요소.insertBefore(삽입할노드,기준노드)
    tableList.insertBefore(current, previous);

}
```

행을 아래로 이동하는 건 위의 기능과 아주 유사하게 작동된다. 위로 이동하는게 성공했다면 아래로 이동하는 것도 구현해보자.

### 4) 아래로 버튼 구현하기
```javascript
function down(node) {
    console.dir(node);

    var tableList = document.querySelector(".tableList");

    //버튼을 클릭했을 때 행노드를 선택하기
    var current = node.parentElement.parentElement;
    //현재 행 노드 뒤에 있는 형제노드 선택하기
    var next = current.nextElementSibling;


    if(next == null) {
        alert("마지막 행입니다");
        return; //함수종료
    }

    //부모요소.insertBefore(삽입할노드,기준노드)
    tableList.insertBefore(next, current);

}
```
위로 이동하기와 다른점은
```javascript
tableList.insertBefore(next, current);
```
인데, 위로 이동하기와는 순서가 반대가 되어야한다. 

현재 행(```current```)의 아래에 있는 행(```next```)을 현재 행의 위에 올릴 것이기 때문에, 요소 추가 기준은 현재행(```current```)이 된다