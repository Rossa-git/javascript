# BOM과 DOM
- BOM : Browser Object Model
- DOM : Document object Model


JS에서 최상위 객체는 ```window```객체이다.
```window``` 객체의 자식 객체로 ```location```, ```histoy```, ```document``` ... 등이 있다.
```document```객체는 ```window```의 자식 객체이므로 크게는 ```BOM```안에 ```DOM```이 포함되어있다고 볼 수 있다.

![image](http://coding404.com/img2/34.png)

# Element 노드 선택
```document.``` 으로 시작한다.
- 단일 선택자 : 특정 태그 하나를 가져온다
- 다중 선택자 : 특정 태그를 전부 가져온다

다중선택자 메소드는 getElement's'~ 로 시작한다. 
| 메소드 | 설명 |
| ----- | --------------|
| ***getElementById()*** | id로 태그 선택 |
| getElement**s**ByName() | name로 태그 선택 |
| getElement**s**ByClassName() | calss로 태그 선택 |
| getElement**s**ByTagName() | tag 이름으로 태그 선택 |
| ***querySelector()*** | 요소 선택 방법이 css와 동일(첫번째 요소만 선택) |
| ***querySelectorAll()*** | 요소 선택 방법이 css와 동일(모든 태그 선택) |

***굵게 기울임으로 쓰인***  메소드는 반드시 외우도록 한다.