# script07(문제4).html
```+``` 버튼을 누르면 숫자가 1씩 증가되고, ```-```를 누르면 숫자가 1씩 감소되는 자바스크립트 페이지를 만들어보자.

# 1. 외형 만들기
```html
...
<body>
    <h3>자바스크립트 카운트(인라인방식으로)</h3>
    <input type="number" value="0" id="result">
    
    <button type="button">+</button>
    <button type="button">-</button>
</body>
...
```
## (1) 고려사항
 ```<input>``` 안에는 숫자만 들어갈 수 있도록 하는 것이 목적이기 때문에 ```type``` 속성값으로 ```number```을 주었다. ```submit```시 원하지 않는 값이 전송되는 것을 방지하기 위함인데, ```<input type='text'>```에 ```readonly``` 속성을 사용하여 사용자가 직접 값을 건드리는 것을 막는 것도 방법 중 하나이다.

*  ```type=number```의 ```spinner```제어가 까다롭기 때문에, ```type=number``` 속성 사용은 만들 프로그램에 적합한지  고려하는 과정이 필요할 것이다.

## (2) 아래 스타일과 관련된 내용은 강사님이 설명하지 않은 내용.
```<input type="number">```은 숫자만 입력할 수 있는 ```textbox```이다. 그냥 사용하게 되면 ```textbox``` 오른쪽에 ```value```값을 증감시켜주는 ```spinner```가 기본적으로 달려있다. 이 ```spinner```를 보이지 않게 해주는 스타일 속성은 아래와 같다.

```html
<style>
    /* 크롬, 사파리, 엣지, 오페라 기준 */
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    /* 파이어폭스 */
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>
```

# 2. 자바스크립트 적용하기
```<button>```에 각각 ```id```를 넣어, ```id```에 따라 다른 함수를 실행시켜주는 자바스크립트도 괜찮지만, 하나의 함수를 실행시키는 인라인 이벤트를 이용해보자.

## (1) 실행 흐름 생각해보기
```<button>```에 id가 없기 때문에, 두 버튼을 구분할 수 있는 방법은 ```<button>```태그 사이에 있는 텍스트가 될 것 같다.

버튼 안의 텍스트가 ```+``` 이면 증가, ```-``` 이면 감소하는 조건문을 사용한다.

## (2) stub 생성
* stub : 가짜 모듈(비어있는 모듈). 이 stub를 구현하는 것으로 프로그램을 완성합니다. 크게 형태를 잡는다고 생각하시면 쉬울 것 같아요.

하나의 함수로 두가지 동작을 할 수 있게 만들 것이다. 이벤트가 실행되는 요소를 구분하기 위해, 자신 요소(태그, element)를 넘겨주고, 버튼 안의 텍스트에 접근할 수 있도록 한다.

자신 요소에 접근하려면  ```this``` 키워드를 사용한다.
```html
...
    <button type="button" onclick="calc(this);">+</button>
    <button type="button" onclick="calc(this);">-</button>

<script>
    function calc(element) {

    }
</script>
...
```

## (3) 필요한 값 가져오기
```<button>``` 안에 있는 텍스트와 제어할 ```<input>``` 태그 요소를 가져온다.

- ```var result``` : ```<input>``` 태그 요소
- ```oper.innerHTML``` : ```<button>``` 안의 텍스트
```html
<script>
     function calc(oper) {
        var result = document.getElementById("result");
        oper.innerHTML;
    }
</script>
```

## (4) 조건문 생성
문제에서 제시한 조건
 - ```+```버튼을 누르면 숫자가 1 증가된다
 - ```-```버튼을 누르면 숫자가 1 감소된다
 - 숫자는 0보다 작을 수 없다

```html
<script>
     function calc(oper) {
        var result = document.getElementById("result");

        /* 버튼 안의 텍스트가 '+' 일 때 */
        if(oper.innerHTML == '+') {

            /* result의 value 속성에 접근 */
            result.value++;

        /* 위의 조건이 거짓일 때 (버튼 안의 텍스트가 '-' 일 때)  */
        } else {

            /* result의 value값이 0보다 작은가 */
            if(result.value <= 0) {
                alert('0보다 작을 수 없습니다');
                return; /* 함수의 종료 */
            } else {
                result.value--;
            }
        }
    }
</script>
```

## (5) 테스트
자바스크립트가 정상적으로 작동되는지 확인해본다.