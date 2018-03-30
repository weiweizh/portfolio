// JavaScript Document
//config 为每一张图片定义一个object对象，里面存储它的相关信息

var config =
{
/**
* Aniscroll Documentation
* author: Magic
* version: 1.0
*
* Global Params
* -------------------------------------------
* imgPath: main images directory
* scrollLength: length of the entire page
* objects: list of page objects
*
*
*/
// config
imgPath: 'img/',
scrollLength: '32580',
scrollUnits: 'px',
speed: 0.7,
scrollSpeed: 0.5,
homeSpacing: -300,
// objects
objects:
[
/*** sun ***/
// I dont mind if you forget me
{img: 'I_dont_Mind.png', z: 3, offsetXPercent: 0, offsetXPixels: -312, offsetYPercent: 110, offsetYPixels: 75, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 800,conditionalYStartPercent:40,conditionalYEndPercent: 20, fromXPercent: 100,linear:false, toXPercent: 5,fromeXPixels:0,toXPixels:0, fromYPercent: 40, toYPercent:  10, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
// Nara potrait
{img: 'sun/Nara.png',caption:'sun/Nara_cap.png', z: 4, offsetXPercent: 0, offsetXPixels: -80, offsetYPercent:  120, offsetYPixels: 152, persistent: false, anim: [
//{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 40, conditionalYEndPercent:  30, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 40, conditionalYEndPercent: 20, linear:false, fromXPercent: 0, toXPercent:-22,fromXPixels:270,toXPixels:  0, fromYPercent:  110,toYPercent: 18,fromYPixels: 200,toYPixels:0,fromOpacity: 0, toOpacity: 1}
]},
// Hi
{img: 'sun/Hi.png',z: 3, offsetXPercent: 0, offsetXPixels: -312, offsetYPercent:  60, offsetYPixels: 600, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 4950, conditionalYStartPercent: 40, conditionalYEndPercent: 20, linear: false, fromXPercent: 0, toXPercent: 10, fromYPercent:  110, toYPercent: 30, fromYPixels: 0, toYPixels: 50, fromOpacity: 0, toOpacity: 1},
]},
// cat in the box
{img: 'sun/Cat_in_box.png',caption:'sun/Cat_in_box_cap.png', z: 4, offsetXPercent: 0, offsetXPixels: -305, offsetYPercent: 100, offsetYPixels: 880, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5150, conditionalYStartPercent: 60, conditionalYEndPercent: 50, linear: true, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},
// cat girl
{img: 'sun/Cat_little_girl.png', z: 3, offsetXPercent: 0, offsetXPixels: - 14, offsetYPercent: 100, offsetYPixels:800, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 80, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 50, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 310, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 200, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
// cat words
{img: 'sun/Cat_in_words.png', z: 4, offsetXPercent: 0, offsetXPixels: -386, offsetYPercent: 125, offsetYPixels: 800, persistent: false, anim: [
//{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 1000, conditionalYEndPercent: 80, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 40, linear: false, fromXPercent: -50, toXPercent: 13, fromXPixels: 0, toXPixels: 0, fromYPercent: 50, toYPercent:  -25, fromYPixels:  0, toYPixels: 0, fromOpacity: 1, toOpacity:0},
//{startAtYPixels: 0, endAtYPixels: 50000, conditionalYStartPercent: 50, conditionalYEndPercent: 30, linear: false, fromXPercent: -10, toXPercent: -50, fromXPixels: -300, toXPixels: -260, fromYPercent: 0, toYPercent: 0, fromYPixels: 200, toYPixels: -20, fromOpacity: 1, toOpacity: 1},
]},

//music simbol
{img: 'sun/music_sim.png', z: 4, offsetXPercent: 0, offsetXPixels: - 14, offsetYPercent: 140, offsetYPixels: 1100, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 80, fromOpacity: 0, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 50, linear: true, fromXPercent: 50, toXPercent: 0, fromXPixels: 310, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 200, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},

//boy in cover
{img: 'sun/Rock_n_roll.png',caption:'sun/Rock_n_roll_cap.png' ,z: 3, offsetXPercent: 0, offsetXPixels: - 14, offsetYPercent: 120, offsetYPixels: 1030, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 80, fromOpacity: 0, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 50, linear: false, fromXPercent: 50, toXPercent: -6, fromXPixels: 310, toXPixels: -100, fromYPercent: 110, toYPercent: 20, fromYPixels: 200, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},

//mountain girl
{img: 'sun/Mountain_girl.png', z: 4, offsetXPercent: 0, offsetXPixels: - 14, offsetYPercent: 120, offsetYPixels:1400, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 100, conditionalYEndPercent: 60, fromXPercent:-10,toXPercent:0,fromOpacity: 0, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 50, linear: false, fromXPercent: 0, toXPercent: -2, fromXPixels: 310, toXPixels: 0, fromYPercent: 0, toYPercent: 25, fromYPixels: 200, toYPixels:  0, fromOpacity: 1, toOpacity: 1},
]},

//mountain girl frame
{img: 'sun/Mountain_girl_frame.png',caption:'sun/Mountain_girl_cap.png', z: 3, offsetXPercent: 0, offsetXPixels: - 14, offsetYPercent: 120, offsetYPixels:1400, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 80, fromOpacity: 0, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 50, linear: false, fromXPercent: 50, toXPercent: -5, fromXPixels: 310, toXPixels: 0, fromYPercent: 0, toYPercent: 20, fromYPixels: 200, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
 
/*moon*/

// three pics

//white
{img: 'moon/moon_1.png',caption:'moon/moon_1_cap.png', z: 3, offsetXPercent: 0, offsetXPixels: -355, offsetYPercent: 200, offsetYPixels: 1850, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5150, conditionalYStartPercent: 60, conditionalYEndPercent: 50, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
// blood
{img: 'moon/moon_2.png', z: 3, offsetXPercent: 0, offsetXPixels: - 14, offsetYPercent: 200, offsetYPixels:1700, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 80, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 50, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 310, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 200, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
// kill the pain
{img: 'moon/Feel_the_pain.png', z: 4, offsetXPercent: 0, offsetXPixels: -486, offsetYPercent: 200, offsetYPixels: 1780, persistent: false, anim: [
//{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 1000, conditionalYEndPercent: 80, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 40, linear: false, fromXPercent: -50, toXPercent: 13, fromXPixels: 0, toXPixels: 0, fromYPercent: 50, toYPercent:  -5, fromYPixels:  0, toYPixels: 0, fromOpacity: 1, toOpacity:0},
//{startAtYPixels: 0, endAtYPixels: 50000, conditionalYStartPercent: 50, conditionalYEndPercent: 30, linear: false, fromXPercent: -10, toXPercent: -50, fromXPixels: -300, toXPixels: -260, fromYPercent: 0, toYPercent: 0, fromYPixels: 200, toYPixels: -20, fromOpacity: 1, toOpacity: 1},
]},
//Yellow
{img: 'moon/moon_3.png', z: 4, offsetXPercent: 0, offsetXPixels: -255, offsetYPercent: 240, offsetYPixels: 1980, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5150, conditionalYStartPercent: 60, conditionalYEndPercent: 50, linear: true, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},
//slash with a knife
{img: 'moon/slash_with_a.png', z: 5, offsetXPercent: 0, offsetXPixels: 30, offsetYPercent: 250, offsetYPixels: 2000, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5150,conditionalYStartPercent:60,conditionalYEndPercent: 50, fromXPercent:0,linear:false, toXPercent: 10,fromeXPixels:0,toXPixels:0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},

//blue and red
{img: 'moon/moon_4.png', caption:'moon/moon_4_cap.png', z: 4, offsetXPercent: 0, offsetXPixels: - 14, offsetYPercent:290, offsetYPixels:2000, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 80, fromOpacity: 0, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 50, linear: false, fromXPercent: 50, toXPercent: -6, fromXPixels: 310, toXPixels: -100, fromYPercent: 110, toYPercent: 20, fromYPixels: 200, toYPixels:100, fromOpacity: 1, toOpacity: 1},
]},
//如果老老实实
{img: 'moon/just.png', z: 4, offsetXPercent: 0, offsetXPixels: -312, offsetYPercent: 290, offsetYPixels: 2350, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000,conditionalYStartPercent:80,conditionalYEndPercent: 20, fromXPercent: 100,linear:false, toXPercent: 3,fromeXPixels:10,toXPixels:0, fromYPercent: 0, toYPercent: 45, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
//nice to meet u
{img: 'moon/Nice_to_see_you.png', z: 4, offsetXPercent: 0, offsetXPixels: -312, offsetYPercent: 290, offsetYPixels: 2380, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000,conditionalYStartPercent:80,conditionalYEndPercent: 20, fromXPercent:  -50,toXPercent:13,linear:false,  fromeXPixels:-650,toXPixels:0, fromYPercent: 0, toYPercent: 45, fromYPixels: 0, toYPixels: 20, fromOpacity: 1, toOpacity: 1},
]},
//red
{img: 'moon/moon_5.png',caption:'moon/moon_5_cap.png', z: 4, offsetXPercent: 0, offsetXPixels: -300, offsetYPercent:330, offsetYPixels:2500, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 6000,conditionalYStartPercent:80,conditionalYEndPercent: 40, fromXPercent: 100,linear:false, toXPercent: 10,fromeXPixels:0,toXPixels:-300, fromYPercent:  0, toYPercent:  30, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},

//有多喜欢
{img: 'moon/youduo.png', z: 4, offsetXPercent: 0, offsetXPixels: -312, offsetYPercent: 330, offsetYPixels: 2530, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 6000,conditionalYStartPercent:80,conditionalYEndPercent:  0, fromXPercent: -50,toXPercent:20,linear:false,  fromeXPixels:-650,toXPixels:0, fromYPercent: 0, toYPercent: 50, fromYPixels: 0, toYPixels:  45, fromOpacity: 0, toOpacity: 1},
]},

//white roit
{img: 'moon/moon_6.png', caption:'moon/moon_6_cap.png', z: 4, offsetXPercent: 0, offsetXPixels: - 14, offsetYPercent:370, offsetYPixels:2800, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 6000, conditionalYStartPercent: 80, conditionalYEndPercent: 40, fromOpacity: 0, toOpacity: 1,fromXPercent:-300,toXPercent:10,fromYPercent: 0, toYPercent:0 ,fromYPixels: 0,toYPixels:300 },
//{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 0, toXPercent: 0, fromXPixels:  0, toXPixels: 0, fromYPercent: 110, toYPercent:  0, fromYPixels:  0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},

//suoyouren
{img: 'moon/jishi_everyone.png', z: 4, offsetXPercent: 0, offsetXPixels: 565, offsetYPercent: 370, offsetYPixels: 2970, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 6000, conditionalYStartPercent: 80, conditionalYEndPercent: 55, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 100, toYPercent: 0, fromYPixels: -70, toYPixels: -70, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 50000, conditionalYStartPercent: 55, conditionalYEndPercent: 20, linear: false, fromXPercent: 0, toXPercent: -30, fromYPercent: 0, toYPercent: 20, fromYPixels: -70, toYPixels: -70, fromOpacity: 1, toOpacity: 1},
 ]},
 
//sprout
{img: 'moon/moon_7.png', caption:'moon/moon_7_cap.png', z: 4, offsetXPercent: 0, offsetXPixels:  -300, offsetYPercent:420, offsetYPixels:2970, persistent: false, anim: [
{startAtYPixels:  1000, endAtYPixels: 6000, conditionalYStartPercent: 80, conditionalYEndPercent: 60,linear:false, fromOpacity: 0, toOpacity: 1,fromXPercent:-100,toXPercent:-90,fromYPercent: 0, toYPercent:0 ,fromYPixels: 0,toYPixels: 0 },]},

//这是无聊的世界
{img: 'moon/zheshiwuliao.png', z: 4, offsetXPercent: 0, offsetXPixels: -150, offsetYPercent: 410, offsetYPixels:3680, persistent: false, anim: [
{startAtYPixels:   1000, endAtYPixels: 6500,conditionalYStartPercent:80,conditionalYEndPercent:  0, fromXPercent: -50,toXPercent:-30,linear:false,  fromeXPixels:-650,toXPixels:0, fromYPercent: 0, toYPercent: 50, fromYPixels: 0, toYPixels:  45, fromOpacity: 1, toOpacity: 0.5},
]},

/*night*/
//blue head
{img: 'night/night_1.png', z: 4, offsetXPercent: 0, offsetXPixels: -410, offsetYPercent: 460, offsetYPixels: 3650, persistent: false, anim: [
{startAtYPixels: 2000, endAtYPixels: 8150, conditionalYStartPercent: 60, conditionalYEndPercent:40, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
//green head
{img: 'night/night_2.png', z: 4, offsetXPercent: 0, offsetXPixels: 30, offsetYPercent: 460, offsetYPixels:3840, persistent: false, anim: [
{startAtYPixels: 2000, endAtYPixels: 8000, conditionalYStartPercent: 60, conditionalYEndPercent: 80, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 2000, endAtYPixels: 8000, conditionalYStartPercent: 80, conditionalYEndPercent:  40, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 310, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 200, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
//doggy
{img: 'night/night_3.png', z: 4, offsetXPercent: 0, offsetXPixels: -260, offsetYPercent: 480, offsetYPixels: 3930, persistent: false, anim: [
{startAtYPixels: 2000, endAtYPixels: 8150, conditionalYStartPercent: 80, conditionalYEndPercent:  60, linear: true, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},
//
//dark red
{img: 'night/night_4.png', z: 4, offsetXPercent: 0, offsetXPixels:0, offsetYPercent:530, offsetYPixels:3900, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 8800,conditionalYStartPercent:80,conditionalYEndPercent: 40, fromXPercent: 100,linear:false, toXPercent: 10,fromeXPixels:0,toXPixels:-300, fromYPercent:  0, toYPercent:  30, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
//when i was young
{img: 'night/Then_we_are_young.png', z: 4, offsetXPercent: 0, offsetXPixels: -312, offsetYPercent: 530, offsetYPixels: 3930, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 8800,conditionalYStartPercent:80,conditionalYEndPercent:  40, fromXPercent: -50,toXPercent: -10,linear:false,  fromeXPixels:-650,toXPixels:0, fromYPercent: 0, toYPercent: 50, fromYPixels: 0, toYPixels:  45, fromOpacity: 40, toOpacity: 1},
]},

//white
{img: 'night/night_5.png', z: 4, offsetXPercent: 0, offsetXPixels: - 350, offsetYPercent:570, offsetYPixels:4340, persistent: false, anim: [
{startAtYPixels:  0, endAtYPixels:8800, conditionalYStartPercent: 80, conditionalYEndPercent:  40, fromOpacity: 0, toOpacity: 1,fromXPercent:-100,toXPercent:-10,fromYPercent: 0, toYPercent:0 ,fromYPixels: 0,toYPixels:100 },]},
//比起快乐的事
{img: 'night/than_happy.png', z: 4, offsetXPercent: 0, offsetXPixels: -100, offsetYPercent:580, offsetYPixels:4340, persistent: false, anim: [
{startAtYPixels:  0, endAtYPixels: 8800, conditionalYStartPercent: 80, conditionalYEndPercent:  40, fromOpacity: 0, toOpacity: 1,fromXPercent:100,toXPercent:-10,fromYPercent: 0, toYPercent:0 ,fromYPixels: 0,toYPixels: 0 },]},
//light green
{img: 'night/night_6.png', z: 4, offsetXPercent: 0, offsetXPixels:  0, offsetYPercent:580, offsetYPixels:4540, persistent: false, anim: [
{startAtYPixels:  0, endAtYPixels: 8800, conditionalYStartPercent: 80, conditionalYEndPercent:  40, fromOpacity: 0, toOpacity: 1,fromXPercent:100,toXPercent:0,fromYPercent: 0, toYPercent:0 ,fromYPixels: 0,toYPixels: 0 },]},
//imagination
{img: 'night/imagine.png', z: 4, offsetXPercent: 0, offsetXPixels:  0, offsetYPercent:600, offsetYPixels:4630, persistent: false, anim: [
{startAtYPixels:  0, endAtYPixels: 8800, conditionalYStartPercent: 80, conditionalYEndPercent:  40, fromOpacity: 0, toOpacity: 1,fromXPercent:100,toXPercent:0,fromYPercent: 0, toYPercent:0 ,fromYPixels: 0,toYPixels: 0 },]},

//a girl with a house on her head
{img: 'night/night_7.png', caption:'night/night_7_cap.png',z: 4, offsetXPercent: 0, offsetXPixels: -210, offsetYPercent: 640, offsetYPixels: 4650, persistent: false, anim: [
{startAtYPixels: 2000, endAtYPixels: 12150, conditionalYStartPercent: 100, conditionalYEndPercent:40, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 0},
]},
// end girl
{img: 'night/night_8.png', caption:'night/night_8_cap.png',z: 4, offsetXPercent: 0, offsetXPixels: -300, offsetYPercent: 640, offsetYPixels:5200, persistent: false, anim: [
{startAtYPixels: 2000, endAtYPixels: 14150, conditionalYStartPercent: 110, conditionalYEndPercent:40, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},

{img: 'night/on_the_beautifull_land.png', z: 4, offsetXPercent: 0, offsetXPixels: -150, offsetYPercent: 640, offsetYPixels: 5950, persistent: false, anim: [
{startAtYPixels: 2000, endAtYPixels:14050, conditionalYStartPercent: 100, conditionalYEndPercent:40, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},

{img: 'night/its_better_to.png', z: 4, offsetXPercent: 0, offsetXPixels: -200, offsetYPercent: 640, offsetYPixels: 6400, persistent: false, anim: [
{startAtYPixels: 4000, endAtYPixels: 18050, conditionalYStartPercent: 110, conditionalYEndPercent:40, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},

//star
{img: 'star/we_move_on.png', z: 4, offsetXPercent: 0, offsetXPixels: -150, offsetYPercent: 680, offsetYPixels: 6400, persistent: false, anim: [
{startAtYPixels: 4000, endAtYPixels:18050, conditionalYStartPercent: 60, conditionalYEndPercent:50, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},
{img: 'star/star_1.png', z: 4,caption:'star/star_1_cap.png', offsetXPercent: 0, offsetXPixels: -255, offsetYPercent: 720, offsetYPixels: 6480, persistent: false, anim: [
{startAtYPixels: 4000, endAtYPixels: 18150, conditionalYStartPercent: 60, conditionalYEndPercent: 40, linear: true, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},

{img: 'star/I_feel.png', z: 4, offsetXPercent: 0, offsetXPixels: -200, offsetYPercent: 760, offsetYPixels: 6800, persistent: false, anim: [
{startAtYPixels: 4000, endAtYPixels:18050, conditionalYStartPercent: 100, conditionalYEndPercent:20, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},

{img: 'star/star_2.png',caption:'star/star_2_cap.png' ,z: 4, offsetXPercent: 0, offsetXPixels: -350, offsetYPercent: 800, offsetYPixels: 6720, persistent: false, anim: [
{startAtYPixels: 4000, endAtYPixels:24050, conditionalYStartPercent: 100, conditionalYEndPercent:20, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},

{img: 'star/when_i_climb.png', z: 4, offsetXPercent: 0, offsetXPixels: -170, offsetYPercent: 880, offsetYPixels: 7040, persistent: false, anim: [
{startAtYPixels: 4000, endAtYPixels:24050, conditionalYStartPercent: 100, conditionalYEndPercent:40, linear: false, fromXPercent: 100, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},

]},

{img: 'star/star_3.png', caption:'star/star_3_cap.png', z: 4, offsetXPercent: 0, offsetXPixels: -250, offsetYPercent: 930, offsetYPixels: 7200, persistent: false, anim: [
{startAtYPixels: 4000, endAtYPixels:24050, conditionalYStartPercent: 110, conditionalYEndPercent:30, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},

{img: 'star/beautiful_land.png', z: 4, offsetXPercent: 0, offsetXPixels: -150, offsetYPercent: 930, offsetYPixels: 7720, persistent: false, anim: [
{startAtYPixels: 4000, endAtYPixels:24050, conditionalYStartPercent: 100, conditionalYEndPercent:40, linear: false, fromXPercent: -80, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},

]},

{img: 'star/star_4.png', z: 4, offsetXPercent: 0, offsetXPixels: -250, offsetYPercent: 950, offsetYPixels: 8100, persistent: false, anim: [
{startAtYPixels: 4000, endAtYPixels:28050, conditionalYStartPercent: 100, conditionalYEndPercent:40, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},

{img: 'star/I_wont_stop.png', z: 4, offsetXPercent: 0, offsetXPixels: -350, offsetYPercent: 950, offsetYPixels: 8600, persistent: false, anim: [
{startAtYPixels: 4000, endAtYPixels:28050, conditionalYStartPercent: 110, conditionalYEndPercent:40, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},
{img: 'star/star_5.png', z: 4, offsetXPercent: 0, offsetXPixels: -320, offsetYPercent: 950, offsetYPixels: 8700, persistent: false, anim: [
{startAtYPixels: 4000, endAtYPixels:28050, conditionalYStartPercent: 100, conditionalYEndPercent: 0, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},
/*
// But buying
{img: '3/but_buying.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 860, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: -40, toXPercent: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
// Grey hand (But buying)
{img: 'hands/grey.png', z: 1, offsetXPercent: 0, offsetXPixels: -666, offsetYPercent: 100, offsetYPixels: 860, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: -40, toXPercent: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 0, linear: false, fromXPercent: 0, toXPercent: -40, fromYPercent: 0, toYPercent: 200, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 0, conditionalYEndPercent: -10000, linear: false, fromOpacity: 0, toOpacity: 0},
]},
// If that's
{img: '3/if_thats.png', z: 0, offsetXPercent: 0, offsetXPixels: -155, offsetYPercent: 100, offsetYPixels: 930, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 40, toXPercent: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
// Small hand Magenta
{img: 'hands/small_magenta.png', z: 10, offsetXPercent: 0, offsetXPixels: -36, offsetYPercent: 100, offsetYPixels: 930, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 40, toXPercent: 0, fromXPixels: 0, toXPixels: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: 32, toYPixels: 32, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 0, linear: false, fromXPercent: 0, toXPercent: 20, fromYPercent: 0, toYPercent: 200, fromYPixels: 32, toYPixels: 32, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 0, conditionalYEndPercent: -10000, linear: false, fromOpacity: 0, toOpacity: 0},
]},
// Small hand Blue
{img: 'hands/small_blue.png', z: 10, offsetXPercent: 0, offsetXPixels: -54, offsetYPercent: 100, offsetYPixels: 930, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 40, toXPercent: 0, fromXPixels: 200, toXPixels: 200, fromYPercent: 50, toYPercent: 0, fromYPixels: -20, toYPixels: -20, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 0, linear: false, fromXPercent: 0, toXPercent: 40, fromXPixels: 200, toXPixels: 200, fromYPercent: 0, toYPercent: 200, fromYPixels: -20, toYPixels: -20, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 0, conditionalYEndPercent: -10000, linear: false, fromOpacity: 0, toOpacity: 0},
]},
// Small hand Yellow
{img: 'hands/small_yellow.png', z: 10, offsetXPercent: 0, offsetXPixels: -402, offsetYPercent: 100, offsetYPixels: 930, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 40, toXPercent: 0, fromXPixels: 200, toXPixels: 200, fromYPercent: 50, toYPercent: 0, fromYPixels: 30, toYPixels: 30, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 0, linear: false, fromXPercent: 0, toXPercent: 0, fromXPixels: 200, toXPixels: 200, fromYPercent: 0, toYPercent: 200, fromYPixels: 30, toYPixels: 30, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 0, conditionalYEndPercent: -10000, linear: false, fromOpacity: 0, toOpacity: 0},
]},
//4
// Actually
{img: '4/actually.png', z: 4, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 1044, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 55, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 100, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
// Orange hand left
{img: 'hands/orange_left.png', z: 5, offsetXPercent: 0, offsetXPixels: -760, offsetYPercent: 100, offsetYPixels: 1044, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 55, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 100, toYPercent: 0, fromYPixels: -70, toYPixels: -70, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 50000, conditionalYStartPercent: 55, conditionalYEndPercent: 20, linear: false, fromXPercent: 0, toXPercent: -50, fromYPercent: 0, toYPercent: 70, fromYPixels: -70, toYPixels: -70, fromOpacity: 1, toOpacity: 1},
]},
// Orange hand right
{img: 'hands/orange_right.png', z: 5, offsetXPercent: 0, offsetXPixels: 170, offsetYPercent: 100, offsetYPixels: 1044, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 80, conditionalYEndPercent: 55, linear: false, fromXPercent: 0, toXPercent: 0, fromYPercent: 100, toYPercent: 0, fromYPixels: -84, toYPixels: -84, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 50000, conditionalYStartPercent: 55, conditionalYEndPercent: 20, linear: false, fromXPercent: 0, toXPercent: 50, fromYPercent: 0, toYPercent: 70, fromYPixels: -84, toYPixels: -84, fromOpacity: 1, toOpacity: 1},
]},
// But they're
{img: '4/but_theyre.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 1145, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 50, linear: true, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},
// True
{img: '4/true.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 1310, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, fromOpacity: 1, toOpacity: 1},
]},
// Scissors
{img: '4/scissors.png', z: 0, offsetXPercent: 0, offsetXPixels: -300, offsetYPercent: 100, offsetYPixels: 1262, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 70, conditionalYEndPercent: 50, linear: false, fromXPercent: -50, toXPercent: 50, fromXPixels: -50, toXPixels: 290, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 50000, conditionalYStartPercent: 50, conditionalYEndPercent: 0, linear: false, fromXPercent: 50, toXPercent: 50, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 0},
]},
/5 
// That's where
{img: '5/thats.png', z: 0, offsetXPercent: 0, offsetXPixels: -158, offsetYPercent: 100, offsetYPixels: 1476, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, fromOpacity: 1, toOpacity: 1},
]},
// Stone 1
{img: '5/stone_1.png', z: 5, offsetXPercent: 0, offsetXPixels: -290, offsetYPercent: 100, offsetYPixels: 1416, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 70, conditionalYEndPercent: 70, fromOpacity: 1, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 70, conditionalYEndPercent: -100, fromOpacity: 0, toOpacity: 0},
]},
// Stone 2
{img: '5/stone_2.png', z: 4, offsetXPercent: 0, offsetXPixels: -290, offsetYPercent: 100, offsetYPixels: 1416, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 200, conditionalYEndPercent: 70, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 65, conditionalYEndPercent: 65, fromOpacity: 1, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 65, conditionalYEndPercent: -100, fromOpacity: 0, toOpacity: 0},
]},
// Stone 3
{img: '5/stone_3.png', z: 3, offsetXPercent: 0, offsetXPixels: -290, offsetYPercent: 100, offsetYPixels: 1416, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 200, conditionalYEndPercent: 65, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 60, conditionalYEndPercent: 60, fromOpacity: 1, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 60, conditionalYEndPercent: -100, fromOpacity: 0, toOpacity: 0},
]},
// Stone 4
{img: '5/stone_4.png', z: 2, offsetXPercent: 0, offsetXPixels: -290, offsetYPercent: 100, offsetYPixels: 1416, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 200, conditionalYEndPercent: 60, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 55, conditionalYEndPercent: 55, fromOpacity: 1, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 55, conditionalYEndPercent: -100, fromOpacity: 0, toOpacity: 0},
]},
// Stone 5
{img: '5/stone_5.png', z: 1, offsetXPercent: 0, offsetXPixels: -290, offsetYPercent: 100, offsetYPixels: 1416, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 200, conditionalYEndPercent: 55, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 50, conditionalYEndPercent: 50, fromOpacity: 1, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 50, conditionalYEndPercent: -100, fromOpacity: 0, toOpacity: 0},
]},
/ 6 
// It's the suply
{img: '6/its_the.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 1610, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 200, conditionalYEndPercent: 80, linear: false, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 350, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 34, toYPixels: 34, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 60, conditionalYEndPercent: -100, linear: false, fromXPercent: 0, toXPercent: 0, fromXPixels: 0, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 34, toYPixels: 34, fromOpacity: 1, toOpacity: 1},
]},
// Chain
{img: '6/chain.png', z: 1, offsetXPercent: 0, offsetXPixels: -2234, offsetYPercent: 100, offsetYPixels: 1610, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 80, conditionalYEndPercent: 60, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 350, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 60, conditionalYEndPercent: 30, linear: false, fromXPercent: 0, toXPercent: -50, fromXPixels: 0, toXPixels: -350, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
// So much for abolition
{img: '6/so_much.png', z: 0, offsetXPercent: 0, offsetXPixels: -155, offsetYPercent: 100, offsetYPixels: 1740, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 75, conditionalYEndPercent: 55, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 200, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
// Pointing hand yellow (So much for abolition)
{img: 'hands/pointing_yellow.png', z: 0, offsetXPercent: 0, offsetXPixels: 80, offsetYPercent: 100, offsetYPixels: 1740, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 75, conditionalYEndPercent: 55, linear: false, fromXPercent: 50, toXPercent: 0, fromXPixels: 200, toXPixels: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: -12, toYPixels: -12, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 10000, conditionalYStartPercent: 55, conditionalYEndPercent: 35, linear: false, fromXPercent: 0, toXPercent: 50, fromXPixels: 0, toXPixels: 200, fromYPercent: 0, toYPercent: 0, fromYPixels: -12, toYPixels: -12, fromOpacity: 1, toOpacity: 1},
]},
// That's why we'd
{img: '6/thats_why.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 1814, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 60, conditionalYEndPercent: 50, linear: true, fromXPercent: 0, toXPercent: 0, fromYPercent: 0, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 0, toOpacity: 1},
]},
// So you will
{img: '6/so_you_will.png', z: 0, offsetXPercent: 0, offsetXPixels: -314, offsetYPercent: 100, offsetYPixels: 1906, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 1000, conditionalYEndPercent: 75, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 75, conditionalYEndPercent: 55, linear: false, fromXPercent: 40, toXPercent: 0, fromXPixels: 310, toXPixels: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: 0, toYPixels: 0, fromOpacity: 1, toOpacity: 1},
]},
// Orange hand (So you will)
{img: 'hands/orange_right_2.png', z: 1, offsetXPercent: 0, offsetXPixels: 150, offsetYPercent: 100, offsetYPixels: 1906, persistent: false, anim: [
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 1000, conditionalYEndPercent: 75, fromOpacity: 0, toOpacity: 0},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 75, conditionalYEndPercent: 55, linear: false, fromXPercent: 40, toXPercent: 0, fromXPixels: 310, toXPixels: 0, fromYPercent: 50, toYPercent: 0, fromYPixels: -60, toYPixels: -60, fromOpacity: 1, toOpacity: 1},
{startAtYPixels: 0, endAtYPixels: 5000, conditionalYStartPercent: 55, conditionalYEndPercent: 35, linear: false, fromXPercent: 0, toXPercent: 50, fromXPixels: 0, toXPixels: 310, fromYPercent: 0, toYPercent: 40, fromYPixels: -60, toYPixels: -60, fromOpacity: 1, toOpacity: 1},
]},
*/
]

}