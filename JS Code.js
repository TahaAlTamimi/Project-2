 setInterval(myTimer, 1000);
// jquery
function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("clock").innerHTML = t;

}

// change back ground
// var myVar = setInterval(setColor, 400);
 
// function setColor() {
//   var x = document.body;
//   x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
// }



// cth:counter hour.
// ctm:counter minute.
// cts:counter second.
var cth=0;
    ctm=0;
    cts=0;
    start=0;
function countdownTimer(){
if(start===0&&document.getElementById("minute")&&document.getElementById("second")){
ctm=parseInt(document.getElementById("minute").value);
cts=parseInt(document.getElementById("second").value);
if(isNaN(cth)) cth=0;
if(isNaN(ctm)) ctm=0;
if(isNaN(cts)) cts=0;
document.getElementById("minute").value=cth;
document.getElementById("second").value=ctm;
start=1;
// document.getElementById('btn').setAttribute('disabled', 'disabled'); 
}
if(ctm===0 && cts===0) {
    start = 0;
    document.getElementById('btn').removeAttribute('disabled');
    return false;
}else{
    cts--;
    if(cts<0){
        if(ctm>0){
            cts=59;
            ctm--;
            }
            else{
                cts=0;
                ctm=0;
              
            }
        }
    }

 
document.getElementById('showmns').innerHTML = ctm;
  document.getElementById('showscs').innerHTML = cts;
  setTimeout('countdownTimer()', 1000);
}



$(document).ready(function(){
    $("#btn").on("click",function(){
        var x = $('#btn').val()
        if (x === 'Start') {
            $('#btn').attr('value', 'Stop')
            
        } else {
            $('#btn').attr('value', 'Start')
        }
    })
    
    })
    // to display button start
    // if(cth===0){
    // document.getElementById('btn').setAttribute('disabled', 'disabled');
// }
// else{
    

// }
