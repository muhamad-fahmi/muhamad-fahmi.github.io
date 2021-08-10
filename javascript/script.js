$(document).ready(function() {
   
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 240) { 
        var x = window.matchMedia("(max-width: 700px)")
        if(x.matches) {
            // $('.hero .col-md-4 .shadow-img').addClass('animate__fadeOut');
            $('.hero .col-md-4 .shadow-img').hide();
            $('.hero .col-md-8 .name').css('margin-top', '3rem');
            $('.hero .col-md-8 .name').addClass('animate__slideInUp');
            $('.hero .col-md-8 .profesion').addClass('animate__slideInUp');
            $('.hero .col-md-8 .sosmed').addClass('animate__slideInUp');
        }else {
            console.log('perangkat desktop')
        }
      } else {
        $('.hero .col-md-4 .shadow-img').show();
      }
    });

    $('.tab1').on('click', function() {
        $('.tab2').removeClass('active');
        $('.tab1').addClass('active');
        $('.software').show();
        $('.graphic').hide();
    });
    
    $('.tab2').on('click', function() {
        $('.tab1').removeClass('active');
        $('.tab2').addClass('active');
        $('.software').hide();
        $('.graphic').show();
    });
});

