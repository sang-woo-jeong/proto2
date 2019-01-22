function nav(){
  $(window).click(function(e){
    if(e.target==$("span")[0] || e.target==$(".menu")[0]){
      $("nav").animate({"left":0});
      $(".naveffect").css({"opacity":0.9,"pointer-events":"auto"});
    }else if(e.target!=$("span")[0] && e.target!=$(".menu")[0]){
      $("nav").animate({"left":"-100%"});
      $(".naveffect").css({"opacity":0,"pointer-events":"none"});
    }
  })
}

function y(){
  var y =  $("section .slide ul li img").height();
  $("section .slide ul li div").height(y);
  $("section .slide ul li").height(y);

  $("section .slide ul li div").mouseover(function(){
    $("section .slide ul li img").css({"transform":"scale(1.02)"});
    $("section .slide").css({"box-shadow":"none"});
  })

  $("section .slide ul li div").mouseleave(function(){
    $("section .slide ul li img").css({"transform":"scale(1)"});
    $("section .slide").css({"box-shadow":"8px 8px 5px gray"});
  })
}

function slide(){
  setInterval(function(){
    var x = $(".slide ul li").width();
    $(".slide ul").stop().animate({"margin-left":-x},function(){
      $(".slide ul li").first().appendTo(".slide ul");
      $(this).css({"margin-left":0});
    });
  },7000)
  $(".right").click(function(){
    var x = $(".slide ul li").width();
    $(".slide ul").stop().animate({"margin-left":-x},function(){
      $(".slide ul li").first().appendTo(".slide ul");
      $(this).css({"margin-left":0});
    });
  })
}

function rsz(){
  $(window).resize(function(){
    location.reload();
  })

  $("i.fa-arrow-up").click(function(){
    $(window).scrollTop(0);
  })
}

function thumbButton(){
  $("header ul li").click(function(e){
    $("header ul li").css({"background":"#cccccc","color":"black"});
    $(this).css({"background":"#097c25","color":"white"});
    $("section ul li").css({"opacity":0}).animate({"opacity":1});
    if($(this).val()==0){
      $("section ul li").css({"display":"inline-block"});
    }
    function v(num){
      if(e.target.value==num){
        for(var i=0;i<$("section ul li").length;i++){
          if($("section ul li")[i].value!=num){
            $("section ul li")[i].style.display = "none";
          }else{
            $("section ul li")[i].style.display = "inline-block";
          }
        }
      }
    }
    for(var i=1;i<6;i++){
      v(i);
    }
  })
}

function thumbnail(){
  var y = $("section ul li img").height();
  $("section ul li div").height(y);
  $("section ul li").mouseover(function(e){
    $(this).children("img").css({"transform":"scale(1.02)"});
    $(this).children("div").css({"opacity":1});
    //$("section ul li img").css({"transform":"scale(1.01)"});
  })
  $("section ul li").mouseleave(function(e){
    $(this).children("img").css({"transform":"scale(1)"});
    $(this).children("div").css({"opacity":0});
    //$("section ul li img").css({"transform":"scale(1.01)"});
  })
}

function archive(){
  $(window).click(function(e){
    for(var i=0;i<$("section ul li").length;i++){
        if(e.target==$("section ul li")[i]){
          $(".naveffect").stop().animate({"opacity":"0.9"}).css({"pointer-events":"auto","z-index":99});
          $("article").stop().animate({"opacity":"1"},1500).css({"z-index":"99"});
          $("article").load("./data/"+parseInt(i+1)+".html");
          $(".art").stop().animate({"opacity":1});
        }else if(e.target==$(".naveffect")[0]||e.target==$(".art")[0]){
          $("article").stop().animate({"opacity":"0"},100).css({"z-index":"-1"});
          $(".naveffect").css({"opacity":"0","pointer-events":"none","z-index":"94"});
          $(".art").stop().animate({"opacity":0});
        }else if(e.target==$("article")[0] || e.target==$("article").children()){
          $(".naveffect").stop().animate({"opacity":"0.9"}).css({"pointer-events":"auto"});
        }
    }
  })
}
