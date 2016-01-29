window.onload=function(){
	// -----------------------画键盘，添加字母------------------
	var hasJiShuqi=false;
	var sence=document.getElementById('sence');
	for(var i=0;i<60;i++){
		var jian=document.createElement('div');
		jian.setAttribute('class','jian');
		sence.appendChild(jian);

		for(var j=0;j<60;j++){
			var shuzi=Math.floor(Math.random()*123);
			if(shuzi>=65&&shuzi<=90||shuzi>=97&&shuzi<=122){
				jian.innerHTML=String.fromCharCode(shuzi);
			} 
		}
	}

// ------------------记录时间------------------------------------
var time=document.createElement('div');
	time.setAttribute('id','time');
	body.appendChild(time);
	var tt=0;
	time.innerHTML=tt+'s';
	var els=document.getElementsByClassName('jian');
	document.onkeydown=function(e){
		console.log(e);
		var num=e.keyCode;
		var zimu=String.fromCharCode(num);
	    zimu=zimu.toLowerCase();
		if(e.shiftKey){
			zimu=zimu.toUpperCase();
			console.log(zimu);
		}
		if(zimu==els[0].innerHTML){
			sence.removeChild(sence.firstElementChild);
		}
		if(els.length==0){
			clearInterval(timeId);alert(tt);
			location.reload();
		}	
		if(!hasJiShuqi){
			var timeId=setInterval(fn=function(){
			tt++;
			time.innerHTML=tt+'s';
			
		},1000);
			hasJiShuqi=true;
			
		}
	};

	




// 打字游戏      拖动（）     鼠标手势
// leetcode.js         mayanlong7@gmail.com





		
	// 随机产生65--122的数，不包括91到97
		// var r=65+Math.floor(Math.random()*(122-65));
		// while(r>91&&r<97){r=65+Math.floor(Math.random()*(122-65));}	


// var body=document.getElementById('body');
// var sence=document.getElementById('sence');
// for(var i=0;i<56;i++){
// 	var jian=document.createElement('div');
// 	jian.setAttribute('class','jian');
// 	sence.appendChild(jian);
// 	var r=65+Math.floor(Math.random()*(123-65));
// 	if(r>=91&&r<=96){
// 		r=65+Math.floor(Math.random()*(123-65));
// 	}

// 	jian.innerHTML=String.fromCharCode(r);
// }

// var els=document.getElementsByClassName('jian');

// document.onkeydown=function(e){
// 	var top=sence.firstElementChild;
// 	if(e.shiftKey){
// 		if(e.keyCode!==top.innerHTML.CharCodeAt(0))   return;
// 	}else{
// 		if(e.keyCode+32!==top.innerHTML.CharCodeAt(0))   return;

// 	}
// 	sence.removeChild(top);
// 	if(sence.children.length==0) location.relode();
	
// };

















};