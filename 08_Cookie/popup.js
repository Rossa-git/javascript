/* 쿠키생성, 쿠키확인 함수를 선언 */

/* 쿠키생성 */
function createCookie(name, value) {
    
    var date = new Date();
    date.setDate(date.getDate() + 1); //유효기간 내일까지

    var cookie = name + "=" + value + ";" + "expires=" + date; // 쿠키 [ 키=값; ]
    
    document.cookie = cookie;
}


/* 쿠키확인 */
function getCookie(find) {
    
    var cookies = document.cookie.split(";"); //쿠키 각각 가져오기

    for(var i in cookies) {
        if(cookies[i].indexOf(find) != -1){ //popupCookie가 없으면
            return true;
        }
    }
    return false;
}

