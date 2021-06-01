# quiz01.html
script03.html 까지 실습 후에 문제를 풀어보자.

### 문제
* 테이블 아래에 두 개의 버튼이 있다. [5개 추가하기], [1개 추가하기]
* 해당 버튼을 누르면 개수만큼 ```<input>``` 행을 추가한다.

```html
<head>
...
    <style>
        table {
            /* 셀과 셀 사이의 간격을 0으로, border와 border 사이의 간격 */
            border-spacing: 0; 
            
            /* border와 border가 붙어서 굵어지는 외곽선을
            하나의 외곽선으로 처리 */
            border-collapse: collapse; 
        }
        thead th {
            border: 1px solid #777;
        }
    </style>

</head>
<body>
    <table>
        <thead>
            <tr>
                <th>교사</th>
                <th>훈련과목</th>
                <th>담당자</th>
                <th>훈련내용</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type="text" size="3"></td>
                <td><input type="text"></td>
                <td><input type="text" size="5"></td>
                <td><input type="text"></td>
            </tr>
        </tbody>
    </table>
</body>
```

# 실행 흐름 생각해보기


# 실습
## (1) 사용할 버튼 추가
```html
    <button type="button" id="addList">5개추가하기</button>
    <button type="button" id="addLists">1개추가하기</button>
```
버튼에 각각 ```id```도 부여하였다.

## (2) 자바스크립트 작성
### 1) stub 생성
행을 1개 추가하는 이벤트를 성공적으로 완성한다면 5개 추가하기는 어렵지 않다.
```html
<script>
    var addList = document.getElementById("addList");
    addList.onclick = function() {
        /* 구현 */
    }
</script>
```

### 2) 함수 구현
```html
<script>
    var addList = document.getElementById("addList");
    addList.onclick = function() {

            var tr = document.createElement("tr");

            var td = document.createElement("td");
            td.innerHTML = '<input type="text" size="3">';
            tr.appendChild(td);
    }
</script>
```
```console.log(td);```로 ```<td>```안에 ```<input>```가 잘 들어갔는지 확인한다. 
* ```<input>``` 의 ```size```가 들죽날죽하기 때문에 ```innerHTML```로 직접 넣어주었다.
* 직접 innerHTML로 넣는게 좋은 방법이 될 수 있다.

값이 잘 들어갔음을 확인했다면, 나머지 ```<td>```도 만들어준다.

```javascript
var addList = document.getElementById("addList");
addList.onclick = function() {

    var tr = document.createElement("tr");

    var td = document.createElement("td");
    td.innerHTML = '<input type="text" size="3">';
    tr.appendChild(td);

    var td = document.createElement("td");
    td.innerHTML = '<input type="text">';
    tr.appendChild(td);

    var td = document.createElement("td");
    td.innerHTML = '<input type="text" size="5">';
    tr.appendChild(td);

    var td = document.createElement("td");
    td.innerHTML = '<input type="text">';
    tr.appendChild(td);

}
```

```<tbody>```에 만들어진 행 ```<tr>```을 ```appendChild```해주어야 하므로, ```<tbody>```의 요소를 가져오자.

```<tbody>```에 ```class```를 부여해서 가져오도록 한다. 5개를 추가하는 버튼에서도 사용할 요소이므로 스크립트 내에서 전역으로 선언한다.
```html
...
    <tbody class="tableList">
...
<script>
    var tableList = document.querySelector(".tableList");

    addList.onclick = function() {
        ...
    }
</script>
```

만들어진 행 ```<tr>```을 ```tbody.tableList``` 에 추가한다.
```javascript
    addList.onclick = function() {
        ...
        ...
        tableList.appendChild(tr);
    }
```

### 3) 5개 추가 버튼 구현
아주 간단하게 ```for```문으로 5번 회전시켜준다.
```javascript
var addLists = document.getElementById("addLists");
addLists.onclick = function() {
    for(var i = 1; i <= 5; i++) {
        
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    td.innerHTML = '<input type="text" size="3">';
    tr.appendChild(td);

    var td = document.createElement("td");
    td.innerHTML = '<input type="text">';
    tr.appendChild(td);

    var td = document.createElement("td");
    td.innerHTML = '<input type="text" size="5">';
    tr.appendChild(td);

    var td = document.createElement("td");
    td.innerHTML = '<input type="text">';
    tr.appendChild(td);

    tableList.appendChild(tr);  
    }
}
```