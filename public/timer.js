const url = "https://uswork.today/api/cow";
const minutes = 10;
const timerLength = minutes*1000*60;
var timeElapsed;
var startTime;
var endTime;


function reqListener () {
 //  document.getElementById("date").innerHTML = this.responseText;
     endTime = parseInt(this.responseText) + timerLength;
//   console.log(this.responseText); 
     //clearTimeout(tick);
     setTimeout(getTime, 500);
}

function getTime() {
  //alert("getTime() called");
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", url);
  oReq.send();
//setTimeout(getTime,500);
}

function postTime() {
  var http = new XMLHttpRequest();
  var params = '';
  http.open('POST', url, true);
  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function() {//Call a function when the state changes.
          //endTime = Date.now() + timerLength;
endTime = parseInt(http.responseText) + timerLength;    
tick();
//setTimeout(tick, 1);
	//getTime();  
}
  http.send(params);
 
}

function timeRemaining(){
  //return Math.floor((endTime-Date.now())/1000);
 
 return ( endTime-Date.now());
}

window.addEventListener("load", function(event) {
  getTime();
  tick();

  document.getElementById("start").addEventListener("click", function(){
    postTime();
    
  });

  document.getElementById("update").addEventListener("click", function(){
    getTime();
  });
});

function tick() {
var totalSeconds =Math.floor(timeRemaining()/1000);
var seconds = totalSeconds%60;
var minutes =(totalSeconds-seconds)/60;
var zeroVal = "";
var zVal = "";

if (minutes <10){
 zVal = "0";
}


if (seconds < 10){
    zeroVal="0";
}
if(!(totalSeconds>0)){
    minutes = 0;
    seconds = 0;
    document.getElementById("status").innerHTML = "Status: Completed";
}
else{
	
}
//getTime();
document.getElementById("time").innerHTML =zVal + minutes + ":"+zeroVal+ seconds;

//postTime();
clearTimeout(tick);  
setTimeout(tick, 500);
}