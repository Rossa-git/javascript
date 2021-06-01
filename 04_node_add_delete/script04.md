# script04(노드삭제).html
선택하고 추가한 것을 배웠으니, 이제는 삭제하는 법이 남았다.
### 노드 삭제
함수 | 설명
--- | ---
```remove()``` | 노드 삭제
```removeChild(삭제 할 자식 노드)``` | 자식 노드 삭제

* ```remove()```는 선택된 자기 자신을 삭제하는 메소드이다.
* ```removeChild(자식 노드)```는 선택한 요소의 자식 노드를 선택하여 삭제한다.

- - - 
버튼을 눌러 ```<li>``` 요소를 추가하고 삭제하는 페이지를 만들어보자.

```html
<body>
    <ul class="list">
        <!-- <li><a href="#"></a></li> -->
    </ul>
    <button type="button" id="add">추가하기</button>
    <button type="button" id="remove">삭제하기</button>
</body>
```

추가될 ```<li>```요소는 아래와 같은 형태를 가지고 있다.
```html
<li><a href="#"></a></li>
```

# 자바스크립트 작성
## (1) stub 생성
부모요소에 접근해야 추가하고 삭제하므로 부모요소도 가져온다.
```html
<script>
    var list = document.querySelector(".list"); //부모요소

    //추가기능
    var add = document.getElementById("add");
    add.onclick = function() {
        /* 구현 */
    }

    //삭제기능
    var remove = document.getElementById("remove");
    remove.onclick = function() {
        /* 구현 */
    }
</script>
```

## (2) 추가기능 구현
앞서 추가하는 방법은 많이 연습했다.
```javascript
add.onclick = function() {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href="#";
    a.innerHTML = "음...";
    li.appendChild(a);
    list.appendChild(li);
}
```

## (3) 삭제기능 구현
```removeChild```를 이용해서 ```.list```의 자식요소인 ```<li>```를 삭제한다.

부모요소에서 자식요소로 접근하는 방법은 여러가지 있다.

* 요소의 자식요소를 선택하는 속성

기능|설명
--|--
```childNodes```|모든 자식 노드 선택 (단, 노드에 생략된 text도 포함된다)
```children```|모든 자식 노드 선택
```parentElement```|부모노드 선택
```nextElementSibling```|다음 형제 노드 선택
```previousElementSibling```|이전 형제 노드 선택
```firstChild```|첫번째 자식 노드 선택
```lastChild```|마지막 자식 노드 선택

여기서 ```childNodes```로 자식에게 접근한다고 했을 때, 몇가지 고려사항이 생긴다.

## (3)-1. childNodes
```javascript
console.log(list.childNodes);
```
```<li>```를 추가하지 않고 바로 위의 코드를 실행해 ```list.childNodes```를 콘솔로 출력해보면 아래와 같이 나온다.
```
NodeList(3) [text, comment, text]
```
분명 아무것도 없는데 자식요소로 무엇인가가 나왔다. 바로 ```<ul class="list">``` 아래에 있는 주석이 자식요소로 함께 추출된 것이다.

주석은 한 줄인데 요소가 3개가 나온 이유는 줄바꿈(공백문자)까지 함께 얻어오기 때문에, 섣불리 ```childNodes```로 자식요소에 접근하면 위험하다.

순수한 자식 요소를 가져올 필요가 있다.

## (3)-2. children
```children```을 사용하면 공백문자를 포함하지 않은 순수한 태그요소만 가져올 수 있다.

모든 자식요소를 가지고 오는 배열(리스트)을 반환한다.

```javascript
list.removeChild(list.children[0]);
/* 첫번째 자식요소를 삭제한다 */
```

조건문을 이용해서 삭제할 요소가 없을 경우 삭제 코드가 실행되지 않도록 한다.

```javascript
if(list.children.length == 0) return;
/* 요소가 없다면 return 탈출문을 통해 함수가 종료된다. */

list.removeChild(list.children[0]);
```

# console.dir(element)
```element``` 요소가 사용할 수 있는 모든 속성을 콘솔에 출력한다.

콘솔에서 출력되는 요소를 펼쳐보면 굉장히 많은 속성들이 보여지는데, 여기서 ```childNodes```, ```children``` 등을 확인할 수 있다.

```javascript
console.dir(list);
```
```list```가 사용할 수 있는 모든 속성이 콘솔에 출력된다.

콘솔에 출력되는 내용 전부는 아래와 같다.

(스압주의)
```
accessKey: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
ariaColIndex: null
ariaColSpan: null
ariaCurrent: null
ariaDescription: null
ariaDisabled: null
ariaExpanded: null
ariaHasPopup: null
ariaHidden: null
ariaKeyShortcuts: null
ariaLabel: null
ariaLevel: null
ariaLive: null
ariaModal: null
ariaMultiLine: null
ariaMultiSelectable: null
ariaOrientation: null
ariaPlaceholder: null
ariaPosInSet: null
ariaPressed: null
ariaReadOnly: null
ariaRelevant: null
ariaRequired: null
ariaRoleDescription: null
ariaRowCount: null
ariaRowIndex: null
ariaRowSpan: null
ariaSelected: null
ariaSetSize: null
ariaSort: null
ariaValueMax: null
ariaValueMin: null
ariaValueNow: null
ariaValueText: null
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {0: class, class: class, length: 1}
autocapitalize: ""
autofocus: false
baseURI: "http://127.0.0.1:5501/04_node_add_delete/script04(%EB%85%B8%EB%93%9C%EC%82%AD%EC%A0%9C).html"
childElementCount: 0
childNodes: NodeList [text]
children: HTMLCollection []
classList: DOMTokenList ["list", value: "list"]
className: "list"
clientHeight: 0
clientLeft: 0
clientTop: 0
clientWidth: 970
compact: false
contentEditable: "inherit"
dataset: DOMStringMap {}
dir: ""
draggable: false
elementTiming: ""
enterKeyHint: ""
firstChild: text
firstElementChild: null
hidden: false
id: ""
innerHTML: "\n\n    "
innerText: ""
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: text
lastElementChild: null
localName: "ul"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: button#add
nextSibling: text
nodeName: "UL"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 0
offsetLeft: 8
offsetParent: body
offsetTop: 16
offsetWidth: 970
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
outerHTML: "<ul class=\"list\">\n\n    </ul>"
outerText: ""
ownerDocument: document
parentElement: body
parentNode: body
part: DOMTokenList [value: ""]
prefix: null
previousElementSibling: null
previousSibling: text
scrollHeight: 0
scrollLeft: 0
scrollTop: 0
scrollWidth: 970
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {additiveSymbols: "", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", …}
tabIndex: -1
tagName: "UL"
textContent: "\n\n    "
title: ""
translate: true
type: ""
__proto__: HTMLUListElement​
```

```innerHTML``` 항목을 보면 ```"\n\n    "``` 공백문자가 들어가있는 것을 확인할 수 있다.

이벤트도 볼 수 있다.