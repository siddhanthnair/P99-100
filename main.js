Webcam.set({
  width:320 ,
  height: 240 ,
  image_format: 'png' ,
  png_quality : 90 
});
camera= document.getElementById("camera");

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function run(event){
console.log(event);
var content= event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
if (content=="take my selfie"){
  speak();
}

}



function speak(){
    var synth = window.speechSynthesis;
speakdata="taking your selfie in 5 seconds";
var utterThis = new SpeechSynthesisUtterance;
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
take_snapshot();
save();
},5000);
}

function take_snapshot(){
Webcam.snap(function(dataurl){
  document.getElementById("result").innerHTML= '<img id="myimg" src="'+dataurl+'">';
})
}

function save(){
 link=document.getElementById("link");
 image=document.getElementById("myimg").src;
link.href=image;
link.click();
}
 

