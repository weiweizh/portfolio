// JavaScript Document


var mycav = document.getElementById('pintu') ;
var context = mycav.getContext('2d');
var IMG= new Image();
var SOLVED = false;
var random_num;
var baseText;

function showPopup(w,h){
	var popup = document.getElementById('popupcontent');
	popup.style.marginLeft = '50%';
	popup.style.marginTop= '50%';
	popup.style.top = '32900px';
	popup.style.width = w + "px"; 
    popup.style.height = h + "px";
	 
     if (baseText == null)
    baseText = popUp.innerHTML; 
    popup.innerHTML = baseText + "<div id=\"statusbar\"><input type='button' id='close' value = '关闭' onclick=\"hidePopup();\"></div>"; 
    var sbar = document.getElementById("statusbar");   
    sbar.style.marginTop = (parseInt(h)-80) + "px";   
	 popup.style.display = "block";
	
	};
	
function hidePopup(){
	var popup = document.getElementById('popupcontent');
	popup.style.display = 'none';
	
	}

function ne_img(){
	do{
		var nrandom_num = Math.random()*((24-1)+1);
	    nrandom_num = Math.floor(nrandom_num);
		}while(!config.objects[nrandom_num].caption&&random_num!=nrandom_num);
	     IMG.src = config.imgPath + config.objects[nrandom_num].img;
	   
	   if(IMG.width ==0)IMG.width = 600;
       if(IMG.height == 0)IMG.height = 600;
        mycav.width = IMG.width;
        mycav.height = IMG.height;
		
	 boardWidth = mycav.width;
     boardHeight = mycav.height;
     tileCount = document.getElementById('scale').value;

     tileWidth = boardWidth / tileCount;
     tileHeight = boardHeight / tileCount;	
	 clickLoc.x = 0;
     clickLoc.y = 0;
	 emptyLoc.x = 0;
     emptyLoc.y = 0;

	 setBoard();
		
	IMG.addEventListener('load',drawTiles,false);
	random_num = nrandom_num;
	
	};
	
if(config){
do{
random_num = Math.random()*((24-1)+1);
random_num = Math.floor(random_num);
 
}while (!config.objects[random_num].caption);
}
 
IMG.src=config.imgPath+config.objects[random_num].img;
IMG.addEventListener('load',drawTiles,false);

if(IMG.width ==0)IMG.width = 600;
if(IMG.height == 0)IMG.height = 600;
mycav.width = IMG.width;
mycav.height = IMG.height;

 
var boardWidth = document.getElementById('pintu').width;
var boardHeight = document.getElementById('pintu').height;
var tileCount = document.getElementById('scale').value;

var tileWidth = boardWidth / tileCount;
var tileHeight = boardHeight / tileCount;

var boardParts = new Object;

//鼠标点击的那个part的x,y
var clickLoc = new Object;
clickLoc.x = 0;
clickLoc.y = 0;
//空白的part的x,y
var emptyLoc = new Object;
emptyLoc.x = 0;
emptyLoc.y = 0;

//设置画板元素为一个二维数组，外层数组的每一个元素又是一个数组，内层数组保存的是该部分图片目前所在的位置，如boardParts[i][j]={x,y}表示正确位置坐标在（i,j）的图片现在的位置是（x,y）
//空出来的位置是右下角的那一块。
setBoard();

function setBoard(){
	boardParts = new Array(tileCount);
	for(var i = 0; i<tileCount;++i){
		boardParts[i] = new Array(tileCount);
		 for(var j = 0;j < tileCount; ++j){
			 boardParts[i][j] = new Object;
			 boardParts[i][j].x = (tileCount - 1) - i;
			 boardParts[i][j].y = (tileCount - 1) - j;
			 }
		}
		
	emptyLoc.x = boardParts[tileCount - 1][tileCount - 1].x;
	emptyLoc.y = boardParts[tileCount - 1][tileCount - 1].y;
	 
	SOLVED = false;
	}
	

//捕捉scale修改事件，当scale被用户修改时，重新设置tileCount并重新绘制拼图
document.getElementById('scale').onchange = function(){
	tileCount = this.value;
	tileWidth = boardWidth / tileCount;
	tileHeight = boardHeight / tileCount;
	setBoard();
	drawTiles();
	};

//追踪鼠标经过的拼图以及哪个拼图被点击;	
	
document.getElementById('pintu').onmousemove = function(e){
	 
    var top =  getoffsetTop(document.getElementById('pintu'));
	var left = getoffsetLeft(document.getElementById('pintu'));
	 
	clickLoc.x = Math.floor((e.pageX - left)/tileWidth);
	clickLoc.y = Math.floor((e.pageY- top)/tileHeight);
	};
	
document.getElementById('pintu').onclick = function (){
	 
	
		slideTile(emptyLoc,clickLoc);
		drawTiles();
		

	if(SOLVED){
		baseText = '<p>Well done!</p>'
		setTimeout('showPopup(200,100)',500);
		setTimeout('ne_img()',5000);
		}
	};
	
//检查一个拼图的四周是否可以移动 x相同判断y是否为1，y相同x是否为1

function distance(x1,x2,y1,y2){
	return Math.abs(x1 -x2) + Math.abs(y1-y2);
	}	
	
//移动拼图

function slideTile(toLoc,fromLoc){
	
	if(!SOLVED){
		boardParts[toLoc.x][toLoc.y].x = boardParts[fromLoc.x][fromLoc.y].x;
		boardParts[toLoc.x][toLoc.y].y = boardParts[fromLoc.x][fromLoc.y].y;
		
		boardParts[fromLoc.x][fromLoc.y].x = tileCount - 1;
		boardParts[fromLoc.x][fromLoc.y].y = tileCount - 1;
		
		toLoc.x = fromLoc.x;
		toLoc.y = fromLoc.y;
		
		checkSolved();
		
		}
	};
	
	
	//检查拼图是否全部在正确的位置
	
	function checkSolved(){
		var flag = true;
		
		for(var i = 0;i<tileCount;++i)
		{
			for(var j=0;j<tileCount;++j)
			{
				if(boardParts[i][j].x!=i||boardParts[i][j].y!=j)
				{
					flag = false;
					}
				}
			}
		SOLVED = flag;
		
		};
		
	
	function drawTiles(){
		
		
		context.clearRect(0,0,boardWidth,boardHeight);
		for(var i = 0;i<tileCount;++i){
			for(var j = 0;j<tileCount;++j){
				var x = boardParts[i][j].x;
				var y = boardParts[i][j].y;
				
				if(i!= emptyLoc.x||j!= emptyLoc.y||SOLVED == true){
				     
					context.drawImage(IMG,x*tileWidth,y*tileHeight,tileWidth,tileHeight,i*tileWidth,j*tileHeight,tileWidth,tileHeight);
					}
				}
			
			}
		
		};
	
	//获取页面元素相对于document的具体位置。	
	function getoffsetTop(el){
		var _t =el.offsetTop;
         while(el = el.offsetParent){
        _t += el.offsetTop;
    }
    return _t;
		
		};
		
		function getoffsetLeft(el){
		var _t =el.offsetLeft;
         while(el = el.offsetParent){
        _t += el.offsetLeft;
    }
    return _t;
		
		};
		
		
		