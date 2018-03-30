var bigPlates = 1;
var bigPlatesMAX = 2;
var smallPlates = new Array(["smallPlates_bg.png"], ["smallPlates_bg_white.png"]);
var smallPlatesId = '';

function logIn(){
    $('.login_plate').hide();
    $('.login_cloud').fadeIn(300);
}

function logOut(){
    $('.login_plate').fadeIn(300);
    $('.myHomePage').hide(300);
    $('#logout_logo').hide();
}

function goRegister(){
    $('.login_plate').hide();
    $('.register_cloud').fadeIn(300);
}

function show_caipu(name){

    $("#donut_caipu").fadeIn(600);
    $("#dark_body").fadeIn(600);
    $("#navigation").hide();
    $(".myPage").hide();
    $("#dark_body").bind("click", function(){
        $("#dark_body").fadeOut(400);
        $('#donut_caipu').fadeOut(400);
        $("#navigation").fadeIn(600);
    });
}
function show_another_caipu(name){
	$("#another_caipu").fadeIn(600);
    $("#dark_body").fadeIn(600);
    $("#navigation").hide();
    $(".myPage").hide();
}
function show_myPage(){

    $("#dark_body").fadeIn(600);
    $('.myPage').fadeIn(300);
    $("#navigation").hide();
    $("#dark_body").unbind("click");
}

function show_upload_dish(){
    $("#dark_body").fadeIn(600);
    
    $(".upLoad_dish .upLoad_text").fadeIn(600);
    $("#navigation").hide();
    $(".myPage").hide();
    $("#dark_body").unbind("click");
}

function close_upload_dish(){
    $(".upLoad_dish .upLoad_text").fadeOut(400);
    $("#dark_body").fadeOut(400);
    
    
    $("#navigation").show();
    $(".myPage").show();
}

function close_myPage(obj, e){
    $("#dark_body").fadeOut(400);
    $(".myPage").fadeOut(400);
    $("#navigation").fadeIn(600);
    stopBubble(e);
}

function nav_click(obj){
    $('.myPage_navItem').css('background', '');
    $('.myPage_navItem').css('color', '');
    $(obj).css('background-color', '#283734');
    $(obj).css('color', 'white');
    $('.myPage_item').hide();
}

function change_upload_logo(){
    $(".myPage_header img").attr("src", "img/loading_big.gif");
    setTimeout(function(){
        var obj = $("#upload_btn").val().split("\\");
        
        $(".myPage_header img").attr("src", "img/" + obj[obj.length - 1]);
    }, "2000");
}

function check(obj){
    var o = obj.createTextRange().getClientRects();
    alert(o.length);
    //if(o.length>=10){
    //	event.returnValue=false;
    //}
}

function newAssistItem(){
    $("#addistTbody").append("<tr><td>" + $("#mat_input").val() + "</td>" +
    "<td>" +
    $("#size_input").val() +
    "</td>" +
    "<td>" +
    $("#remark_input").val() +
    "</td></tr>");
}

function newMainItem(){
    $("#mainTbody").append("<tr><td>" + $("#majorMat_input").val() + "</td>" +
    "<td>" +
    $("#majorSize_input").val() +
    "</td>" +
    "<td>" +
    $("#majorRemark_input").val() +
    "</td></tr>");
}

function showNextBigPlates(){
    $(".bigPlate").hide();
    bigPlates = bigPlates + 1;
    if (bigPlates > bigPlatesMAX) 
        bigPlates = 1;
    $("#plates_" + bigPlates).fadeIn(200);
    $(".smallPlate").css("background", "url('img/" + smallPlates[bigPlates - 1] + "')");
}

function showPreBigPlates(){

    $(".bigPlate").hide();
    bigPlates = bigPlates - 1;
    if (bigPlates < 1) 
        bigPlates = bigPlatesMAX;
    $("#plates_" + bigPlates).fadeIn(200);
    $(".smallPlate").css("background", "url('img/" + smallPlates[bigPlates - 1] + "')");
}

function showFoodSelect(mid){
    if ($('#' + mid).css("display") == "block") {
        $('#' + mid).fadeOut(200);
        $('.foodSelect').css('height', 0);
        $(".food_arrow").fadeOut(200);
    }
    else {
        smallPlatesId = mid;
        $('.foodType').hide();
        $('#' + smallPlatesId).fadeIn(400);
        setTimeout(function(){
            var height = $("#" + smallPlatesId).css("height");
            $('.foodSelect').css('height', height);
            var arrow_x;
            if (smallPlatesId == "vegetable") 
                arrow_x = 0;
            else 
                if (smallPlatesId == "meat") 
                    arrow_x = 1;
                else 
                    if (smallPlatesId == "egg") 
                        arrow_x = 2;
                    else 
                        if (smallPlatesId == "beans") 
                            arrow_x = 3;
                        else 
                            if (smallPlatesId == "jiangLiao") 
                                arrow_x = 4;
                            else 
                                if (smallPlatesId == "plateTime") 
                                    arrow_x = 5;
            var arrow_x = 123 + arrow_x * 87;
            $(".food_arrow").css("left", arrow_x + "px");
            $(".food_arrow").fadeIn(20);
        }, 1);
    }
}

function selectFood(obj){
    var changeId = $(obj).parent().parent().attr("id") + "Plate";
    if ($(obj).attr("class") == "none") {
        $("#" + changeId + " div p img").hide();
        $("#" + changeId + " div p img").attr("src", "");
        return;
    }
    $("#" + changeId + " div p img").hide();
    var reg = /\/html\/img(.+\.(jpg|png))/;
    var imgUrl = $(obj).css("background-image").match(reg);
    var newStr = "img/" + imgUrl[1];
    
    
    
    $("#" + changeId + " div p img").attr("src", newStr);
    $("#" + changeId + " div p img").attr("width", 40);
    $("#" + changeId + " div p img").attr("height", 40);
    $("#" + changeId + " div p img").fadeIn(300);
}

function selectTime(obj){
    $("#timeShow").html($(obj).html());
}

function platesSubmit(){
    // $('.foodItem').fadeOut(200);
    $('.foodSelect').css('height', 0);
    $(".food_arrow").fadeOut(200);
    $('.foodType').hide();
    
    var meat_args = $("#meatPlate div p img").attr("src").split("/");
    var vegetable_args = $("#vegetablePlate div p img").attr("src").split("/");
    var jiang_args = $("#jiangLiaoPlate div p img").attr("src").split("/");
    
    
    $(".bigPlate div p").html('<img src="img/loading_big.gif" />');
    setTimeout(function(){
        if ($("#timeShow").html() == "30分钟以上") {
            $(".bigPlate div p").html('哎呀！掌握不好火候，东西都糊了！ ');
        }
        else 
            if (meat_args[meat_args.length - 1] == "fish.jpg" && vegetable_args[vegetable_args.length - 1] == "tomato.jpg") {
                $(".bigPlate div p").html('鱼肉+西红柿 食物中的维生素C会对铜的析放量产生抑制作用。 ');
            }
            else 
                if (meat_args[meat_args.length - 1] == "fish.jpg" && jiang_args[jiang_args.length - 1] == "jiangyou.jpg") {
                    $(".bigPlate div p img").attr("src", "img/doneFood/shousi.png");
                }
                else 
                    if (meat_args[meat_args.length - 1] == "cow.jpg" && vegetable_args[vegetable_args.length - 1] == "tomato.jpg" && jiang_args[jiang_args.length - 1] == "cong.jpg") {
                        $(".bigPlate div p img").attr("src", "img/doneFood/cow.png");
                    }
                    else {
                        $(".bigPlate div p img").attr("src", "img/doneFood/shuizhuyu.png");
                    }
    }, 2000);
    
}

function registerSucceed(){
    alert('注册成功~');
    $('.register_cloud .fl').hide();
    $('.afterRegister').fadeIn(300);
}

function goHome(){
    $('.afterRegister').hide();
    $('.register_cloud .fl').show();
    $('.register_cloud').hide();
    $('.login_plate').fadeIn(300);
}

function goMyPage(){
    $('.afterRegister').hide();
    $('.register_cloud .fl').show();
    $('.register_cloud').hide();
    $('.login_cloud').hide();
    $('.myHomePage').fadeIn(1000);
    $('#logout_logo').fadeIn(400);
}

function goProfile(){
    goMyPage();
    show_myPage();
}
function showjsstar()
{
	$(".jsstar").fadeIn(300);
}
