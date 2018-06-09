/**
 * Created by yys on 2018/5/31.
 */

init = {};

EJS.config( {cache: true, type: '<', ext: '.template' } );
init.artObj = new EJS({url: "partials/art.template"});

var jumpMsg = function(){
    var html = init.artObj.render({art:[{}]});
    console.log(html);
    $(".only_one").html(html);
}

var jumpMsgB = function(){
    location.href = "detail.html?id=2";
}

var jumpMsgC = function(){
    location.href = "detail.html?id=3";
}

var jumpTo = function(url){
    location.href = url;

}
