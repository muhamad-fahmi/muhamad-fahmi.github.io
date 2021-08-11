$(document).ready(function() {
   
    $(window).scroll(function() {
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
        $('.hero .col-md-8 .name').removeClass('animate__slideInUp');
        $('.hero .col-md-8 .profesion').removeClass('animate__slideInUp');
        $('.hero .col-md-8 .sosmed').removeClass('animate__slideInUp');
      }

      if($(this).scrollTop() > 450) { 
        var x = window.matchMedia("(max-width: 700px)")
        if(x.matches) {
            $('.hero .col-md-8 .about').addClass('animate__slideInUp');
        }else {
            console.log('perangkat desktop')
        }
      } else {
        $('.hero .col-md-8 .about').removeClass('animate__slideInUp');
      }

      if($(this).scrollTop() > 650) { 
        var x = window.matchMedia("(max-width: 700px)")
        if(x.matches) {
            $('.skills').addClass('animate__slideInUp');
        }else {
            console.log('perangkat desktop')
        }
      } else {
        $('.skills').removeClass('animate__slideInUp');
      }

      if($(this).scrollTop() > 1650) { 
        var x = window.matchMedia("(max-width: 700px)")
        if(x.matches) {
            $('.portofolio').addClass('animate__slideInUp');
        }else {
            console.log('perangkat desktop')
        }
      } else {
        $('.portofolio').removeClass('animate__slideInUp');
      }

      if($(this).scrollTop() > 2050) { 
        var x = window.matchMedia("(max-width: 700px)")
        if(x.matches) {
            $('.contact').addClass('animate__slideInUp');
        }else {
            console.log('perangkat desktop')
        }
      } else {
        $('.contact').removeClass('animate__slideInUp');
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

    // $('#ex1').multilang(
    //   {
    //     pixFormat:'png',
    //     pathToPix:'../assets/img/lang'
    //   }
    // );


     
    
});

