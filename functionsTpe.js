$(".cloud-container").show();
$("#cloud-bottom").show();
$("body").css('background', '#cbcbcb');

$(".code").hide();
$(".flicker").hide();
$(".flicker-bottom").hide();
$(".face").hide();
$(".a").hide();
$(".labyrinth").hide();
$(".math").hide();
$("#enter2").hide();
$(".taipei-bottom").hide();
$(".ric-bottom").hide();
$(".flight-1").hide();
$("#sky").hide();
$(".flight").hide();
$(".flight-bottom").hide();


$(".taipei-bottom").click(function() {
  $(".cloud-container").show();
  $("#cloud-bottom").show();
  $(".ric-bottom").hide();
  $(".taipei-bottom").hide();
  $(".flight-1").hide();
  $("body").css('background', '#cbcbcb');
});

$(".cloud2").click(function() {
  $(".face").hide();
  $(".face").css('color', '#cbcbcb');
  $(".face").show();
  $(".face-bottom").show();
  $("#cloud-bottom").hide();
});

$("#cloud-bottom").click(function() {
  $("#cloud-bottom").hide();
  $(".face").css('color', '#cbcbcb');
  $(".cloud-container").hide();
  $(".face").hide();
  $(".math").show();
});

$(".face-bottom").click(function() {
  $("#cloud-bottom").hide();
  $(".cloud-container").hide();
  $(".face").hide();
  $(".math").show();
});

$(document).ready(function()
{
    $("#answer").change(function() {
        if($(this).val() == "3225578") {
            $("#yes").show();
        }
        else {
            $("#yes").hide();
        }
    });
});

$("#yes").hide();

$("#answer").click(function(){
  $("input").css('color', '#8e8a7e');
});

$(".math-answer").hide();
$(".math-answer-hover").mouseover(function(){
     $(".math-answer").fadeIn();
 });

 $(".math-answer-hover").mouseleave(function(){
      $(".math-answer").fadeOut();
  });


$("#yes").click(function(){
  $(".yes").hide();
  $(".math").hide();
  $(".a").show();
});

$(".a").click(function(){
  $(".begin-board").show();
  $(".face").show();
  $(".face").css('color', 'rgb(0, 0, 0)');
  $(".labyrinth").show();
  $("body").css('background', '#000000');
  $("#enter2").show();
  $(".face-bottom").hide();
});

$("#enter2").click(function() {
  $(".labyrinth").hide();
  $("#enter2").hide();
  $("#sky").show();
  $(".flight").show();
  $(".flight-bottom").show();
});

$(".flight-bottom").click(function() {
  $(".flight-bottom").hide();
  $(".flight").hide()
  $(".taipei-bottom").show();
  $(".ric-bottom").show();
  $(".flight-1").show();
  // $("body").css('background', '#161616');
});

$(".flight-bottom").click(function() {
  $(".flight-bottom").hide();
  $(".flight").hide()
  $(".taipei-bottom").show();
  $(".ric-bottom").show();
  $(".flight-1").show();
  // $("body").css('background', '#161616');
});

$(".ric-bottom").click(function() {
  $(".taipei-bottom").hide();
  $(".ric-bottom").hide();
  $(".flight-1").hide();
  $("body").css('background', '#ffffff');
  $(".code").show();
});

$(".flower-bottom").mouseover(function() {
  $(".flower-bottom").css('font-weight', 'bolder');
  $(".flower-bottom").css('background', 'white');

});

$(".flower-bottom").mouseleave(function() {
  $(".flower-bottom").css('font-weight', 'normal');
  $(".flower-bottom").css('background', 'none');
});

$(".flower-bottom").click(function() {
  $(".code").hide();
  $(".flower-bottom").hide();
  $(".flicker").show();
  $(".flicker-bottom").show();
});

$(".lines").hide();
$("#line-bottom").hide();

$(".flicker-bottom").click(function() {
  $(".flicker").hide();
  $(".lines").show();
  $("#line-bottom").show();
});

$("#line-bottom").click(function() {
  $(".lines").hide();
  $(".begin-board").show();
  $(".code").show();
  $(".face").css('color', 'rgb(0, 0, 0)');
  $(".labyrinth").show();
  $("body").css('background', '#000000');
  $("#enter2").show();
  $("body").css('background', '#000000');
});

  $(document).ready(function(){
      animateDiv();

  });

  function makeNewPosition(){

      // Get viewport dimensions (remove the dimension of the div)
      var h = $(window).height() - 50;
      var w = $(window).width() - 50;

      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);

      return [nh,nw];

  }

  function animateDiv(){
      var newq = makeNewPosition();
      var oldq = $('.a').offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);

      $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
        animateDiv();
      });

  };

  function calcSpeed(prev, next) {

      var x = Math.abs(prev[1] - next[1]);
      var y = Math.abs(prev[0] - next[0]);

      var greatest = x > y ? x : y;

      var speedModifier = 0.1;

      var speed = Math.ceil(greatest/speedModifier);

      return speed;

  }
