
                                          //  1. Init Date Picker

(function initDatePicker()
{
  var dp = $('#datepicker');
  var date = new Date();
  var dateM = date.getMonth() + 1;
  var dateD = date.getDate();
  var dateY = date.getFullYear();
  var dateFinal = dateM + '/' + dateD + '/' + dateY;
  dp.val(dateFinal);
  dp.datepicker();
})();

                                            //  2. Init Time Picker

(function initTimePicker()
{
  $('.timepicker').timepicker(
  {
    interval: 60,
    minTime: '10',
    maxTime: '6:00pm',
    defaultTime: '11',
    startTime: '10:00',
    dynamic:  true,
    dropdown: true,
    scrollbar: true
  });
})();

                                          // 3. Init Video

(function initVideo()
{
  $(".vimeo").colorbox(
  {
    iframe:true,
    innerWidth:640,
    innerHeight:409,
    maxWidth: '90%'
  });
})();




let title = document.querySelector('.title');
let header = document.querySelector('.header');

window.onscroll = function(){
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  changeOpacityTitle(scrollTop);
  changeHeaderMenu(scrollTop);
};
                                // 3. Function Change Transparence Title On Scroll Event

function changeOpacityTitle(st){
  if(st < 335){
    st *= 0.003;
    let primaryOpacity = 1;
    let transparence = primaryOpacity - st;
    transparence = transparence.toFixed(2);
    title.style.opacity = transparence;
  }
}
                                // 4. Function Change Header-Menu On Scroll Event

function changeHeaderMenu(st){
  if(st > 100){
    if(!header.classList.contains('header-scroll')) {
      header.classList.add('header-scroll');
    }
  } else {
    if(header.classList.contains('header-scroll')) {
      header.classList.remove('header-scroll');
    }
  }
}


                                // 5. Mobile Menu

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
  var screenWindow = window.matchMedia('(min-width:992px)');
  screenWindow.addListener(changes);
  changes(screenWindow);
}
function changes(screenWindow){
  if(screenWindow.matches){
    $('.sectionMobileMenu').fadeOut(600);
    $('.mobileMenu__line').removeClass('activ');
  }
}
