// JavaScript Document
//这个js用来控制屏幕的滑动效果
function Aniscroll(config){

     var mScroller;
	 var mContainer;
	 var mConfig;
	 var sun;
	 var moon;
	 var star;
	 var line_1;
	 var line_2;
	 var line_3;
	 var cap_num = 0;
	 var pic_num = 0;
	 
	 
	 //CONSTRUCTOR
	 {
		 mConfig = config;
		 }
	 
	 this.run = function(){
		 if(window.addEventListener){
			 window.addEventListener('scroll',onScroll,false);
			 window.addEventListener('resize',onScroll,false);
			 
			 }
			 else if(window.attachEvent){
				 window.attachEvent('scroll',onScroll);
				 window.attachEvent('onscrool',onScroll);
				 window.attachEvent('resize',onScroll);
				 window.attachEvent('onresize',onScroll);
				 
			 }
			 createContainer();
			 addObjectsToDocument(config.objects);
			 // alert('run!');
			 onScroll(null);
		 }	
		 
	  this.dispose = function() {
           if(window.removeEventListener) {
              window.removeEventListener('scroll', onScroll, false);
             }
			  else if(window.detachEvent) {
                  window.detachEvent('scroll', onScroll);
                  window.detachEvent('onscroll', onScroll);
              }
            document.body.removeChild(mContainer);
            document.body.removeChild(mScroller);
            pic_num = 0;
			cap_num = 0; 
           } 
		   
		function createContainer(){
			mScroller = document.createElement('div');
			mScroller.style.position = 'absolute';
			mScroller.style.width = '100%';
			mScroller.style.height = mConfig.scrollLength + mConfig.scrollUnits;
			document.body.appendChild(mScroller);
			//alert('mscroller created!');
			mContainer = document.createElement('div');
			mContainer.style.position = 'fixed';
			mContainer.style.width = '100%';
			mContainer.style.height = '100%';
			mContainer.style.overflow = 'hidden';
			mContainer.style.zIndex = '1';
			mContainer.style.maxHeight = '32584px';
			
			document.body.appendChild(mContainer);
			//alert('mContainer created!');
			
		 
			
			}
/*	function setSecBg()
	{
		$('#sun').css('position','absolute');
		$('#sun').css('top','1407px');
		$('#sun').css("background-image","url('../img/sun/bg_sun.png')");
		$('#sun').css('background-repeat','repeat');
		$('#sun').css('height','3000px');
		
		}*/
	
	function addObjectsToDocument(objects) {
             for(i in objects) {
                 addObjectToDocument(objects[i]);
                  }
     } 
	 
	 function addObjectToDocument(o) {
         var div = document.createElement('div');
             div.style.position = 'absolute';
             div.style.zIndex = o.z;
			 
			 if(o.caption){
				 cap_num = cap_num + 1;
				  pic_num = pic_num + 1;
			 div.setAttribute('id','pic_'+pic_num);
			 }
             div.innerHTML = (o.link? ('<a href="' + o.link + 'target="' + (o.link_target ? o.linkTarget : '_self') + '">') : '') + '<img src="' + mConfig.imgPath + o.img +'"'+' border="0" />' + (o.link ? '</a>' : '')+(o.caption?('<div>' + '<img class="caption" src="' + mConfig.imgPath+o.caption+'"'+'border ="0"'+'id="caption_'+cap_num+'"/>'+'</div>'):'');
			 
				
             mContainer.appendChild(div);
             o.div = div;
			 
      } 
	  
	  function positionObject(o) {
               var positionX = 0;
               var positionY = 0;
               var opacity = 1;
               var winW = 1024, winH = 768;
               var winScroll = 0;
              if (document.body && document.body.offsetWidth) {
                  winW = document.body.offsetWidth;
                  winH = document.body.offsetHeight;
                   }
              if (document.compatMode=='CSS1Compat' &&document.documentElement &&document.documentElement.offsetWidth ) {
                  winW = document.documentElement.offsetWidth;
                  winH = document.documentElement.offsetHeight;
                   }
              if (window.innerWidth && window.innerHeight) {
                  winW = window.innerWidth;
                  winH = window.innerHeight;
                   }
              if(window.scrollY) {
                 winScroll = window.scrollY;
                } else if(document.documentElement.scrollTop) {
                      winScroll = document.documentElement.scrollTop;
				}
				var realScroll = winScroll;
                 winScroll *= mConfig.scrollSpeed;
                 winScroll -= mConfig.homeSpacing;
                var baseX = o.offsetXPixels ? o.offsetXPixels : 0;
                 baseX += o.offsetXPercent ? (winH * o.offsetXPercent * 0.01) : 0;
                 var baseY = o.offsetYPixels ? o.offsetYPixels : 0;
                 baseY += (winH * o.offsetYPercent * 0.01 - winScroll);
                 positionX = baseX;
                 positionY = baseY;
                 var anims = findApplicableAnimations(o);
                 var anyApplied = false;
                for(var i in anims) {
                  var anim = anims[anims.length - i - 1];
                   if(anim != null) {
                    anyApplied = true;
                    var startAtY = anim.startAtYPixels;
                    var endAtY = anim.endAtYPixels;
                   if(anim.conditionalYStartPercent != null && anim.conditionalYEndPercent != null) {
                      var conditionalStartY = anim.conditionalYStartPercent * winH * 0.01 + (anim.conditionalYStartPixels ? anim.conditionalYStartPixels : 0);
                        var conditionalEndY = anim.conditionalYEndPercent * winH * 0.01 + (anim.conditionalYEndPixels ? anim.conditionalYEndPixels : 0);
                          if(anim.linear || (baseY >= conditionalEndY && baseY <= conditionalStartY)) {
                                if(anim.fromYPixels != null || anim.fromYPercent != null) {
                                     var offset = resolveValue(anim.fromYPixels + anim.fromYPercent * 0.01 * winH, anim.toYPixels + anim.toYPercent * 0.01 * winH, conditionalStartY, conditionalEndY, baseY);
                                       positionY = baseY + offset;
                                       }
                                 if(anim.fromXPercent != null || anim.toXPercent != null || anim.fromXPixels != null || anim.toXPixels != null) {
                                      positionX = resolveValue(anim.fromXPercent, anim.toXPercent, conditionalStartY, conditionalEndY, baseY) * 0.01 * winW;
                                       var ml = resolveValue(anim.fromXPixels, anim.toXPixels, conditionalStartY, conditionalEndY, baseY);
                                       positionX += (ml ? (ml + baseX) : baseX);
                                         }
                                 if(anim.fromOpacity != null || anim.toOpacity != null) {
                                  opacity = resolveValue(anim.fromOpacity, anim.toOpacity, conditionalStartY, conditionalEndY, baseY);
                                         }
                             } else if(!anim.linear) {
                                   if(baseY < conditionalEndY) {
                                     if(anim.toYPercent) {
                                 positionY = baseY + anim.toYPercent * 0.01 * winH;
                                           }
                          if(anim.toXPercent) {
                                positionX = anim.toXPercent * 0.01 * winW;
                                 var ml = anim.toXPixels;
                                positionX += (ml ? (ml + baseX) : baseX);
                              }
//opacity = anim.toOpacity;
                      } else if(baseY > conditionalStartY) {
                          if(anim.fromYPercent) {
                            positionY = baseY + anim.fromYPercent * 0.01 * winH;
                             }
                          if(anim.fromXPercent) {
                            positionX = anim.fromXPercent * 0.01 * winW;
                            var ml = anim.fromXPixels;
                            positionX += (ml ? (ml + baseX) : baseX);
                             }
//opacity = anim.fromOpacity;
                           }
                      }
               } else if(anim.conditionalYStartPixels != null && anim.conditionalYEndPixels != null) {
                     } else {
                 var offset = resolveValue(anim.fromYPixels + anim.fromYPercent * 0.01 * winH, anim.toYPixels + anim.toYPercent * 0.01 * winH, startAtY, endAtY, window.scrollY);
                 positionY = baseY + offset;
                 positionX = resolveValue(anim.fromXPercent, anim.toXPercent, startAtY, endAtY, winScroll) * 0.01 * winW;
                 var ml = resolveValue(anim.fromXPixels, anim.toXPixels, startAtY, endAtY, winScroll);
                 positionX += (ml ? (ml + baseX) : baseX);
                               if(anim.fromOpacity != null && anim.toOpacity != null) {
                                      opacity = resolveValue(anim.fromOpacity, anim.toOpacity, startAtY, endAtY, winScroll);
                                         }
                         }
                     }
                   }

       if(!anyApplied) {
           positionX = baseX;
           positionY = baseY;
           }
       if(String(positionX) == 'NaN') positionX = baseX;
       if(String(positionY) == 'NaN') positionY = baseY;
       if(String(opacity) == 'NaN') opacity = 1;
       setObjectParams(o, positionX + winW * 0.5, positionY, opacity);
     }
	 
	 
function setObjectParams(o, x, y, opacity) {
                o.div.style.left = x + 'px';
                o.div.style.top = y + 'px';
                o.div.style.opacity = opacity;
                o.div.style.filter = 'alpha(opacity = ' + opacity * 100 + ')';
				$(o.div).addClass('picture');
          }
		  
function findApplicableAnimation(o) {
        var winScroll = 0;
       if(window.scrollY) {
          winScroll = window.scrollY;
         } else if(document.documentElement.scrollTop) {
                    winScroll = document.documentElement.scrollTop;
         }
     winScroll *= mConfig.scrollSpeed;
     for(i in o.anim) {
     if(o.anim[i].startAtYPixels <= winScroll && o.anim[i].endAtYPixels >= winScroll) return o.anim[i];
     }
    return null;
}


function findApplicableAnimations(o) {
                var winScroll = 0;
               if(window.scrollY) {
               winScroll = window.scrollY;
               } else if(document.documentElement.scrollTop) {
                         winScroll = document.documentElement.scrollTop;
               }
     winScroll *= mConfig.scrollSpeed;
     winScroll -= mConfig.homeSpacing;
     var anims = new Array();
     for(i in o.anim) {
         if(o.anim[i].startAtYPixels <= winScroll && o.anim[i].endAtYPixels >= winScroll) anims.push(o.anim[i]);
       }
        return anims;
     }


function resolveValue(startPosition, endPosition, startY, endY, currentY) {
              return Number(startPosition) + (endPosition - startPosition) * ((currentY - startY) / (endY - startY));
     } 
	
	/*监听器*/
	/* LISTENERS */
        function onScroll(e) {
             var winW = 1024, winH = 768;
             
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
          
			mScroller.style.height = mConfig.scrollLength - (2000 - winH) + mConfig.scrollUnits;

			// onScroll(null);
			 
	             
                 
			 
			  
               
			
			 var o;
		    for(i in mConfig.objects) {
             o = mConfig.objects[i];
               positionObject(o);
			   
			 var scrolltop = document.documentElement.scrollTop + document.body.scrollTop; //此句是为了兼容google chrome和 firefox
		    if(scrolltop<31362&&scrolltop>=1350)
			{
				$('#myNav').fadeIn();
				}else{
					$('#myNav').fadeOut();
					}
			if(scrolltop>=1350&&scrolltop<5107)
			  {     
				 
			     $('#isun').addClass('active');
				 $('#imoon').removeClass('active');
			     $('#inight').removeClass('active');
			    $('#istar').removeClass('active');
				  }
			else if(scrolltop>=5107&&scrolltop<12980)
			  {
				  $('#isun').removeClass('active');
				  $('#imoon').addClass('active');
				  $('#inight').removeClass('active');
			    $('#istar').removeClass('active');
				  }
		   else if(scrolltop>=12980&&scrolltop<21346)
			  {     $('#isun').removeClass('active');
				   $('#imoon').removeClass('active');
				  $('#inight').addClass('active');
				  $('#istar').removeClass('active');
				  }
		  else if(scrolltop>=21346&&scrolltop<31470)
			  {
				   $('#isun').removeClass('active');
				   $('#moon').removeClass('active');
				   $('#inight').removeClass('active');
				  $('#istar').addClass('active');
				   
				  }
		 
		 else {
			 
			  $('#isun').removeClass('active');
			 $('#moon').removeClass('active');
			 $('#inight').removeClass('active');
			 $('#istar').removeClass('active');
			        
			 } 
              
			        
			}
          }
}