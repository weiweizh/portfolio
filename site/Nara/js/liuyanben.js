// JavaScript Document
function savelocalStorage(id){
	 
var data=document.getElementById('nickname').value;
data+=": ";
data+=document.getElementById(id).value;
 
var time=new Date().getTime();
localStorage.setItem(time,data);
loadlocalStorage('msg');
}

function loadlocalStorage(id){
  var result='<table class = "guestbook" border="0">';
  
   for(var i=0;i<localStorage.length;i++)
   {
     var key=localStorage.key(i);
     var value=localStorage.getItem(key);
     var date=new Date();
     date.setTime(key);
     var datestr=date.toGMTString();
     result +='<tr><td>'+value+'</td><td>'+datestr+'</td></tr>';
}
result +='</table>';
var target = document.getElementById(id);
target.innerHTML=result;
}

function clearlocalStorage(){
localStorage.clear();
loadlocalStorage('msg');
alert("localStorage留言已被清除！");
}