function scrolls(range, classes) {
  if($(this).scrollTop() > range) { 
    if(classes == "hero"){
       // HERO SECTION
        $('.hero .col-md-8 .name').css('margin-top', '3rem');
        $('.hero .col-md-8 .name').addClass('animate__slideInUp');
        $('.hero .col-md-8 .profesion').addClass('animate__slideInUp');
        $('.hero .col-md-8 .sosmed').addClass('animate__slideInUp');
    }else if(classes == "about") {
        //ABOUT SECTION
        $('.hero .col-md-8 .about').addClass('animate__slideInUp');
    }else if(classes == "skills") {
        // SKILLS
        $('.skills').addClass('animate__slideInUp');
    }else if(classes == "porto") {
        // PORTOFOLIO
        $('.portofolio').addClass('animate__slideInUp');
    }else if(classes == "contact") {
        // CONTACT
        $('.contact').addClass('animate__slideInUp');
    }


  } else {

   if(classes == "hero"){
      // HERO
      $('.hero .col-md-4 .shadow-img').show();
      $('.hero .col-md-8 .name').removeClass('animate__slideInUp');
      $('.hero .col-md-8 .profesion').removeClass('animate__slideInUp');
      $('.hero .col-md-8 .sosmed').removeClass('animate__slideInUp');
   }else if(classes == "about") {
       //ABOUT SECTION
       $('.hero .col-md-8 .about').removeClass('animate__slideInUp');
   }else if(classes == "skills") {
       // SKILLS
       $('.skills').removeClass('animate__slideInUp');
   }else if(classes == "porto") {
       // PORTOFOLIO
       $('.portofolio').removeClass('animate__slideInUp');
   }else if(classes == "contact") {
       // CONTACT
       $('.contact').removeClass('animate__slideInUp');
   }

  }
}

$(document).ready(function() {
    $(window).scroll(function() {
      var x = window.matchMedia("(max-width: 700px)");

      if(x.matches) {
        $('.hero .col-md-4 .shadow-img').hide();
          scrolls(240, "hero");
          scrolls(450, "about");
          scrolls(650, "skills");
          scrolls(1650, "porto");
          scrolls(2750, "contact");
      }else {
          scrolls(240, "hero");
          scrolls(450, "about");
          scrolls(650, "skills");
          scrolls(950, "porto");
          scrolls(1750, "contact");
      }


    });

    $('.tab1').on('click', function() {
        $('.tab2').removeClass('active');
        $('.tab1').addClass('active');
        $('.software').show();
        $('.software').addClass('animate__bounceIn');
        $('.graphic').removeClass('animate__bounceIn');
        $('.graphic').hide();
    });
    
    $('.tab2').on('click', function() {
        $('.tab1').removeClass('active');
        $('.tab2').addClass('active');
        $('.graphic').addClass('animate__bounceIn');
        $('.software').removeClass('animate__bounceIn');
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

