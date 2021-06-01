# script03(노드추가3).html
버튼을 누를 때마다, ```div.addList``` 안에 
```html
<ul>
    <li></li>
    <li></li>
    ... 
    <!-- <li>가 10개 -->
    ...
    <li></li>
    <li></li>
</ul>
```
이것을 추가하는 이벤트를 만들어보자. script02.html의 응용이다.


# 실습 외형 만들기
```html
<body>
    
    <div id="addList">

    </div>
    <button type="button" id="add">10개 추가하기</button>

</body>
```

# 자바스크립트 실습
## 1. 연습
페이지가 실행되자마자 10개의 ```<li>```가 자동으로 추가되는 스크립트를 먼저 만들어보자.

```html
<script>
    var ul = document.createElement("ul");

    for(var i = 1; i <= 10; i++) {
        /* 새로운 <li>를 생성해서 <ul>에 추가해야 하므로 반복문 안에 들어간다. */
        var li = document.createElement("li");
        var text = document.createTextNode(i + ".리스트");
        
        li.appendChild(text);/* text를 li에 자식요소로 추가 */
        ul.appendChild(li); /* ul에 li를 자식요소로 추가 */
    }
    /* div#addList에 ul을 자식요소로 추가 */
    document.getElementById("addList").appendChild(ul);
</script>
```

페이지를 실행하면 자동으로 ```<li>```가 만들어진 것을 확인할 수 있다.

- - -

## 2. 실습 - 버튼을 클릭했을 때 ```<li>```를 10개씩 추가
이 화면에서 버튼을 눌렀을 때 ```<li>```를 더 추가하는 이벤트를 만들어보자.

### (1) stub 생성
```html
<script>
    ...
    var add = document.getElementById("add");
        add.onclick = function() {

        }
</script>
```

### (2) 요소 생성 후 추가
버튼 한번 누를 때마다 ```<li>```가 10개 추가되므로 반복문 안에서 추가가 되어야 할 것이다.

```javascript
add.onclick = function() {
    for(var i = 1; i <= 10; i++) {
        var li = document.createElement("li");
        var text = document.createTextNode("추가된리스트");
        
        li.appendChild(text); /* li에 text 를 자식요소로 추가 */

        //ul태그가 이미 만들어져 추가되어 있는 형태이기 때문에 #addList > ul 로 접근한다.
        document.querySelector("#addList > ul").appendChild(li);
    }
}
```