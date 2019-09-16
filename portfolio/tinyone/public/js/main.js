$(document).ready(function(){
  $('.mobileMenu').click(function(){
    if($('.sectionMobileMenu').is(':visible')){
      $('.mobileMenu__line').removeClass('activ');
      $('.sectionMobileMenu').fadeOut(600);
    } else{
      $('.mobileMenu__line').addClass('activ');
      $('.sectionMobileMenu').fadeIn(600);
    }
  })

  if(matchMedia){
    var screenWindow = window.matchMedia('(min-width:768px)');
    screenWindow.addListener(changes);
    changes(screenWindow);
  }
  function changes(screenWindow){
    if(screenWindow.matches){
      $('.sectionMobileMenu').fadeOut(600);
      $('.mobileMenu__line').removeClass('activ');
    }
  }
})
