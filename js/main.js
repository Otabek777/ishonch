'use strict';
// modal
let modalLogin = document.querySelector('.modal_login'),
    modalReg = document.querySelector('.modal_registration'),
    modalReview = document.querySelector('.modal_review');

window.addEventListener('click', function(e) {
  if(e.target == modalLogin || e.target == modalReg || e.target == modalReview) {
    modalLogin.classList.remove('active');
    modalReg.classList.remove('active');
    modalReview.classList.remove('active');
  };
});

$(window).scroll(function(){
  if ( $(this).scrollTop() > 50) {
      $('.header').addClass('active');
  } else {
      $('.header').removeClass('active');
  };
});

document.querySelector('#open-menu').addEventListener('click', function() {
  document.querySelector('.header_mobile').classList.add('active');
  document.querySelector('body').style.overflow = 'hidden';
});
document.querySelector('#close-menu').addEventListener('click', function() {
  document.querySelector('.header_mobile').classList.remove('active');
  document.querySelector('body').style.overflow = 'visible';
});