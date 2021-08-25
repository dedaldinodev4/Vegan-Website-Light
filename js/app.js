
//** Js file  **//


//** Loader **//
$(function(){

    menu = $('nav ul');

    $('#toggle-btn').on('click', function(e){
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(this).width();
        if(w > 580 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function(){
        var w = $(window).width();
        if(w < 580 ){
            menu.slideToggle();
        }
    });

    $('.open-menu').height($(window).height());


    //* Contact Form Animate *//
    $('.form-login').hide();
    $('.form-new-account').hide();

    toggleLoginAccount('#btn-login-i','.form-login');
    toggleLoginAccount('#btn-register-i','.form-new-account');

    function toggleLoginAccount (btnUI, formUI){
        $(btnUI).click(()=>{
            $(formUI).toggle('4000', 'swing');
        });
    }

    

  //* Back to top button *//
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });


  //** Target Checkout  **//
  $('#popup-btnClose').click(function(){
        window.history.back();
  });


  //** Navegation Bar Event **//
  $('.menu ul li a').click(function(){

    $('.menu ul li a').removeClass('active');
    $(this).addClass('active');
  })
 

  

});


//** ScrollTop Animate **//
// $('a[href*="#"]')
//     .not('[href="#"]')
//     .not('[href="#0"]')
//     .click(function(event){
//         if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){    
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' +this.hash.slice(1) + ']');
    
//             if(target.length) {
//                 event.preventDefault();
//                 $('html, body').animate({
//                     scrollTop: target.offset().top
//                 }, 1000, function(){
//                     var $target = $(target);
//                     $target.focus();
//                     if($target.is(":focus")) {
//                         return false;
//                     } else {
//                         $target.attr('tabindex', '-1');
//                         $target.focus();
//                     }
//                 });
//             }
//         }
//     });






//** Owl Carousel **//

	$('.main-instagram').owlCarousel({
		loop: true,
		margin: 0,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 2,
				nav: true
			},
			600: {
				items: 3,
				nav: true
			},
			1000: {
				items: 5,
				nav: true,
				loop: true
			}
		}
  });
  
  









