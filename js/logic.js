var mt380 = 460 * window.innerWidth / 1280;
var mtNext = mt380 * 2 / 5;
var mtNextWap = mtNext + 20;
$(".main_intro").css("margin-top", "-" + mt380 + "px");
$(".intro_next").css("margin-top", "" + mtNext + "px");
$(".dispatch").css("margin-bottom", "-120px");
$("#navbar").css("background-color", "#fff");

$(".spacial").css("margin-top", "-95px");
$(".spacial").css("padding-top", "-95px");
$(".carousel_wap").css("display", "none");
if(tool.isPhone())
{
    $("#navbar").addClass("navbar-inverse");
    $("#navbar").css("background-color", "#4b5a77");
    $(".saturn_logo_big").attr("width", 309 / 2);
    $(".saturn_logo_big").attr("height", 55 / 2);
    $(".main_intro").css("margin-top", "-356px");
    $(".baipishu").css("margin-top", "1px");
    $(".main_content").css("margin-top", "1px");
    $(".dispatch").css("margin-bottom", "-120px");
    $("#plan").css("margin-bottom", "-220px");
    $(".main_img").css("max-width", "324%");
    $(".intro_next").css("margin-top", "" + mtNextWap + "px");
    $(".main_div").removeClass("mt70");
    $(".main_div").addClass("mt50");
    $(".text_12_any").removeClass("text_12_3");
    $(".text_12_any").removeClass("text_12_6");
    $(".text_12_any").removeClass("text_12_12");
    $(".text_12_any").removeClass("text_12_4");
    $(".text_12_any").addClass("text_12_min");
    $(".slim_content_control").removeClass("slim_content");
    $(".main_back_controller").removeClass("main_back");
    $(".main_back_controller").addClass("main_back_wap");
    $(".beechat").css("margin-right", "1px");
    $(".spacial").css("margin-top", "15px");
    $(".spacial").css("padding-top", "15px");
    $(".second_line").removeClass("slim_content");
    $(".plan_text").addClass("plan_text_wap");
    $(".slim_content_20").addClass("slim_content");
    $(".slim_content").removeClass("slim_content_20");
    $(".plan_text_wap").removeClass("plan_text");
    $(".plan_img").css("display", "none");
    $(".carousel_wap").css("display", "block");
    $(".saturn_msgs").css("display", "none");


    //$(".dispatch").css("margin-top", "-210px");
    //$(".core_page").css("margin-top", "210px");

}

var showWeiXin = false;
$(".wx_rwm").hide();
$("#wx_rwm,.wx_rwm").click(function () {
    if (showWeiXin) {
        $(".wx_rwm").hide();
        showWeiXin = false;
    } else {
        $(".wx_rwm").show();
        showWeiXin = true;
    }
});

var jumpMsgA = function(){
    location.href = "detail.html?id=1";
}

jumpMsgB = function(){
    location.href = "detail.html?id=2";
}

jumpMsgC = function(){
    location.href = "detail.html?id=3";
}

