$(document).ready(function(){

  $('.btn-menu').click(function(){
    if($('.menu').is(':visible')){
      $('.btn-menu__item').removeClass('activ');
      $('.menu').slideUp(600);
    } else{
      $('.btn-menu__item').addClass('activ');
      $('.menu').slideDown(600);
    }
  })

})
