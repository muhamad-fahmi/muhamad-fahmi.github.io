$(document).ready(function() {
    // // Transition effect for navbar 
    // $(window).scroll(function() {
    //   // checks if window is scrolled more than 500px, adds/removes solid class
    //   if($(this).scrollTop() > 100) { 
    //       $('.navbar').addClass('solid');
    //   } else {
    //       $('.navbar').removeClass('solid');
    //   }
    // });

    $('.tab1').click(function() {
        $('.tab2').removeClass('active');
        $('.tab1').addClass('active');
        $('.software').show();
        $('.graphic').hide();
    });
    
    $('.tab2').click(function() {
        $('.tab1').removeClass('active');
        $('.tab2').addClass('active');
        $('.software').hidee();
        $('.graphic').show();
    });
});

