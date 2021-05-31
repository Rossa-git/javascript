# quiz01.html
예약버튼을 클릭했을 때,
- 좌석이 최소 1개 이상 체크 되어있지 않다면 경고창을 띄우는 이벤트를 발생.
- 체크된 좌석이 있다면 리스트에 저장하고 JSON 형태의 문자열로 변경

```html
<body>
    <form>
        좌석: 
        <input type="checkbox" name="seat" value="1">1
        <input type="checkbox" name="seat" value="2">2
        <input type="checkbox" name="seat" value="3">3
        <input type="checkbox" name="seat" value="4">4
        <input type="checkbox" name="seat" value="5">5
        <input type="checkbox" name="seat" value="6">6
        <input type="checkbox" name="seat" value="7">7
        <input type="checkbox" name="seat" value="8">8
        <br/>
        <button type="button">예약</button>
    </form>

    <script>
        /* 자바스크립트 작성하기 */
    </script>
</body>
```

# 실행 흐름 생각해보기
1. 버튼을 클릭했을 때, (```onclick```)
2. ```name``` 속성 값이 'seat'인 ```<input>``` 요소를 가져온다.
3. 가져온 ```<input>``` 요소들의 ```checked``` 값이 하나 이상 ```true```라면, list에 저장하고 JSON형태의 문자열로 변경(```JSON.stringify(var)```)
4. 가져온 ```<input>``` 요소가 전부 ```false```라면 경고창을 띄운다. (```alert```)

# 자바스크립트 작성
## (1) 요소 가져오기, stub 생성
버튼 요소를 가져오고 이벤트를 등록한다. 버튼 요소를 가지고 오기 위해 ```<button>```에 ```id```도 부여한다.
```html
<button type="button" id="btn">예약</button>
```
```html
<script>
    var btn = document.getElementById("btn");
    btn.onclick = function() {

    }
</script>
</body>
```

## (2) 필요한 변수 선언
```checkbox``` 요소들을 갖고 있는 변수를 선언하고 요소들로 초기화한다.

아래에 있는 내용들은 ```onclick``` 이벤트로 실행될 익명 함수 안에 들어갈 코드들이다.
```javascript
var checkbox = document.querySelectorAll("input[name='seat']");
var checkbox = document.getElementsByName("name");
```
```querySelectorAll``` 나 ```getElementsByName``` 를 사용하는게 적절해보인다.
* ```querySelectorAll```을 사용할 때 ```input```만 선택하는건 위험한 방법이다. ```[name='seat']```를 추가하여 ```input```의 속성을 함께 선택할 수 있도록 한다.

```javascript
var bool = true;
var list = new Array();
```
좌석이 바르지않게 선택되었음을 가지는 ```boolean``` 타입 변수 ```var bool```, 결과값을 저장할 ```list```인 ```var list``` 를 선언한다.

올바른 좌석 선택이 아니라면 ```bool```의 값은 ```true```이다.

## (3) 조건문 작성
가져온 ```checkbox``` 요소들을 전부 순회하며 검사해야하므로 반복문 안에서 조건문을 작성한다.
```javascript
for(var i = 0; i < checkbox.length; i++) {
    
    /* checkbox[i]가 체크되어 있다면 */
    if(checkbox[i].checked) {
        
        // 체크된 요소가 존재하므로 false
        bool = false; 

        // 해당 요소를 리스트에 저장한다
        list.push(checkbox[i].value);
    }

}
```
## (4) 경고창과 리스트 처리
반복문 밖에서 올바른 좌석 체크 여부(```var bool```)에 따라 조건문을 작성한다. 
JSON 형태의 문자열로 변경하려면 ```JSON.stringify()```를 사용한다.

```javascript
if(bool) {
    alert("좌석체크는 필수 입니다");
} else {
    var data = JSON.stringify({data: list});
    console.log(data);
}
```
1번, 2번, 4번 좌석을 선택했을 때 콘솔에서 ```{"data":["1","2","4"]}``` 가 출력됨을 확인할 수 있다.

---
# 자바스크립트 전문
```html
<script>
    var btn = document.getElementById("btn");
    btn.onclick = function() {
        var checkbox = document.querySelectorAll("input[name='seat']");
        // var checkbox = document.getElementsByName("name");
        
        var bool = true;
        var list = new Array();

        for(var i = 0; i < checkbox.length; i++) {
            if(checkbox[i].checked) {
                bool = false; 
                list.push(checkbox[i].value);
            }
        }

        if(bool) {
            alert("좌석체크는 필수 입니다");
        } else {
            var data = JSON.stringify({data: list});
            console.log(data);
        }
    }
</script>
```