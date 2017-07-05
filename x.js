var url = "https://www.hltv.org/forums/create-xxxthread";
var params = "forum=1&subject=HLTV.pro&topic=BATISTUTA%20pls%20fix";

var http = new XMLHttpRequest();
http.open("POST", url, true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.send(params);
