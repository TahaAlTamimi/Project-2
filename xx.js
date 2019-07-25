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
    var timer_is_on = 0;

    var control;
function down(){
    
if(start===0&&document.getElementById("minute")&&document.getElementById("second")){
ctm=parseInt(document.getElementById("minute").value);
cts=parseInt(document.getElementById("second").value);
// if(isNaN(cth)) cth=0;
// if(isNaN(ctm)) ctm=0;
// if(isNaN(cts)) cts=0;
document.getElementById("minute").value=ctm;
document.getElementById("second").value=cts;
start=1;
// document.getElementById('btn').setAttribute('disabled', 'disabled'); 
}
if(ctm===0 && cts===0) {
    start = 0;
   // document.getElementById('btn').removeAttribute('disabled');
    return false;
}else{

if(ctm>60)
ctm=60;
document.getElementById("minute").value=ctm;

if(cts>60)
cts=60;
document.getElementById("second").value=cts;

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
    
    
document.getElementById('minute').innerHTML = ctm;
  document.getElementById('second').innerHTML = cts;
   control= setTimeout('down()', 1000);

/////////////////////
}

function startTimer(){
  
  down();
  document.getElementById('btn1').setAttribute('disabled', 'disabled');

  document.getElementById('btn2').disabled= false;

  }


function stopTimer(){
  //  document.getElementById('btn2')

    clearTimeout(control);
    document.getElementById('btn2').setAttribute('disabled', 'disabled');

    document.getElementById('btn1').disabled= false;

}


function Reset(){
    //  document.getElementById('btn2')
    document.getElementById('minute').innerHTML = 0;
    document.getElementById('second').innerHTML = 0;
   document.getElementById('minute').value = 0;
   document.getElementById('second').value = 0;
   var cth=0;
    ctm=0;
    cts=0;
    start=0;
    var timer_is_on = 0;

    var control;
    document.getElementById('btn1').disabled= false;

  }



// $(document).ready(function(){

    
//     $("#btn").on("click",function(){

        
//         var x = $('#btn').val()
//         if (x === 'Start') {
//             $('#btn').attr('value', 'Stop')
            
//         } else {
//             $('#btn').attr('value', 'Start')
//         }


        
//     })
    
//     });
    
   
    // to display button start
    // if(cth===0){
    // document.getElementById('btn').setAttribute('disabled', 'disabled');
// }
// else{
    

// }