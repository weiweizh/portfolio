// JavaScript Document
//Globle vars
var HOME_ANIM_DELAY = 1;
var CURTAIN_ANIM_DURATION = 2;
var ANISCROLL_START_SCROLL_Y_PRECENT = 120;
var  HOME_SCROLL_SPEED = 10;
var aniscroll;
var isAniscroll = false;
var scrollcount = 0;
var CURTAIN_HEIGHT = 500;
var IS_START_OVER = false;

function init(){
	aniscroll = new Aniscroll(config);
	if(document.body.style.overflow == 'hidden'){
		document.body.style.overflow = 'scroll';
		}
	window.scrollTo(0,0);
   /*  $(function() {
		    alert("Hover!");
            $('.caption').each(function() {
                $(this).hover(
                    function() {
                        $(this).stop().animate({ opacity: 1.0 }, 800);
                    },
                   function() {
                       $(this).stop().animate({ opacity: 0.3 }, 800);
                   })
                });
        });*/
  // $(window).scroll(function() {
 //  if($(window).scrollTop() >= ($(document).height()-$(window).height())) {
    //$("#overlay-logo1:not(:animated):visible").fadeOut();
 //  } else {
//$("#overlay-logo1:not(:animated):not(:visible)").fadeIn();
}
 

   
   
	
  var setAniscroll = function(){
	  if(isAniscroll)return;
	  isAniscroll = true;
	  $(document.body).css('overflow','scroll');
	  Curtainup();
	  window.scrollTo(0,0);
	  setTimeout('animateScrollToStart()',HOME_ANIM_DELAY*1000);
	  if(aniscroll === undefined)aniscroll = new Aniscroll(config);
	  setTimeout('aniscroll.run()',HOME_ANIM_DELAY*2000);
	
	   
	  }

   var Curtainup = function()
   {
	
	 //alert('up!');
	var winW = 1024, winH = 768;
    var winScroll = 0;
    if (document.body && document.body.offsetWidth) {
    winW = document.body.offsetWidth;
    winH = document.body.offsetHeight;
      }
    if (document.compatMode=='CSS1Compat' &&
       document.documentElement &&
       document.documentElement.offsetWidth ) {
       winW = document.documentElement.offsetWidth;
       winH = document.documentElement.offsetHeight;
     }
    if (window.innerWidth && window.innerHeight) {
     winW = window.innerWidth;
     winH = window.innerHeight;
     }
     var dist = (winW > winH ? winW : winH) * 0.5; 
	 var matop = document.getElementById('Nara').style.marginTop;
	 var begin = winH *0.5+matop;
	if(tCurtainY){
		tCurtainY.stop();
		}
	var tCurtainY = new Tween(document.getElementById('Nara').style,'marginTop',Tween.elasticEaseInOut,-150,-dist,CURTAIN_ANIM_DURATION,'px').start();
	 
	 
	}
	
function Curtaindown(){
	//alert('down!');
	var winW = 1024, winH = 768;
    var winScroll = 0;
    if (document.body && document.body.offsetWidth) {
    winW = document.body.offsetWidth;
    winH = document.body.offsetHeight;
      }
    if (document.compatMode=='CSS1Compat' &&
       document.documentElement &&
       document.documentElement.offsetWidth ) {
       winW = document.documentElement.offsetWidth;
       winH = document.documentElement.offsetHeight;
     }
    if (window.innerWidth && window.innerHeight) {
     winW = window.innerWidth;
     winH = window.innerHeight;
     }
     var dist = (winW > winH ? winW : winH) * 0.5;  
	 
	if(tCurtainY){
		tCurtainY.stop();
		}
	var tCurtainY = new Tween(document.getElementById('Nara').style,'marginTop',Tween.bounceEaseout,-dist,-150,CURTAIN_ANIM_DURATION,'px').start();
	
	$(document.body).css('overflow','hidden');
	 
	}
	
function setHome(){
	 if(!isAniscroll)return;
	 isAniscroll = false;
	 aniscroll.dispose();
	 Curtaindown();
	 
	}
	
function animateScrollToStart() {
       var winW = 1024, winH = 768;
       var winScroll = 0;
       if (document.body && document.body.offsetWidth) {
         winW = document.body.offsetWidth;
         winH = document.body.offsetHeight;
          }
       if (document.compatMode=='CSS1Compat' &&
              document.documentElement &&
              document.documentElement.offsetWidth ) {
         winW = document.documentElement.offsetWidth;
         winH = document.documentElement.offsetHeight;
          }
       if (window.innerWidth && window.innerHeight) {
             winW = window.innerWidth;
             winH = window.innerHeight;
             }
       if(window.scrollY) {
         winScroll = window.scrollY;
         } 
		 else if(document.documentElement.scrollTop) {
          winScroll = document.documentElement.scrollTop;
         }
       //  scrollcount = winScroll;
           if(winScroll < winH * ANISCROLL_START_SCROLL_Y_PRECENT * 0.01) {
			           
                       window.scrollTo(0, winScroll + HOME_SCROLL_SPEED);
					   setTimeout('animateScrollToStart();', 2);
               } else 
			{   //alert(winScroll);
			      IS_START_OVER = true;
			    //  alert('Now winScroll>percent,winScroll is '+ winScroll);
                 if(window.addEventListener) {
                       window.addEventListener('scroll', onScroll, false);
                           }
				 else if(window.attachEvent) {
                        window.attachEvent('scroll', onScroll);
                        window.attachEvent('onscroll', onScroll);
                           }
              // document.getElementById('sun').style.display = 'block';
			   //  $('#myNav').fadeIn();
			     document.getElementById('sun').style.display = 'block';
			     document.getElementById('moon').style.display = 'block';
				 document.getElementById('star').style.display = 'block';
				 $('#top_down').fadeIn();
				 
			   
              } 
			
        }
function animateScrollToTop() {
          var winScroll = 0;
		   $('#top_down').fadeOut(); 
          if(window.scrollY) {
             winScroll = window.scrollY;
			  }
		 else if(document.documentElement.scrollTop) {
                 winScroll = document.documentElement.scrollTop;
			  }
			  
        
		 if(winScroll > 0) {
			  var to = winScroll - HOME_SCROLL_SPEED;
              if(to < 0) to = 0;
			  window.scrollTo(0, to);
              setTimeout('animateScrollToTop();', 20);
             }
		 else {
               onScrolledToTop();
			   
			  }
      } 
	  
	
	  function onScrolledToTop() {
                setHome();
				 
				// alert('SETHOME: ');
				}

    function onScroll(e) {
		   //  alert('man');
             var winScroll = 0;
             if(window.scrollY) {
                 winScroll = window.scrollY;
				// alert(window.scrollY);
               }
			 else if(document.documentElement.scrollTop) {
                winScroll = document.documentElement.scrollTop;
               }
			   //alert(winScroll);
            if(winScroll < CURTAIN_HEIGHT) {
			 // alert(winScroll); 
              if(window.removeEventListener) window.removeEventListener('scroll', onScroll, false);
              if(window.detachEvent) window.detachEvent('scroll', onScroll);
              if(window.detachEvent) window.detachEvent('onscroll', onScroll);
              if(IS_START_OVER){
				  animateScrollToTop();
				//  alert('aniscrollttopinvoked, now winScroll is '+winScroll);
				  IS_START_OVER =false;
				  document.getElementById('myNav').style.display = 'none';
				   document.getElementById('sun').style.display = 'none';
			       document.getElementById('moon').style.display = 'none';
				   document.getElementById('star').style.display = 'none';
				
				   
			        }
		    
		   
           } else {
			 //  document.getElementById('line').style.display = 'none';
			 
                 }
} 