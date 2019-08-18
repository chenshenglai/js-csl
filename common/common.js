$(function(){
    $('.nav ul').hide();
    $('.nav li a:first-child').click(function(){
      $(this).siblings().toggle();
     
    })
  })
  