function scrolls(range, classes) {
    if ($(this).scrollTop() > range) {
        if (classes == "hero") {
            // HERO SECTION
            $('.hero .col-md-8 .name').css('margin-top', '3rem');
            $('.hero .col-md-8 .name').addClass('animate__slideInUp');
            $('.hero .col-md-8 .profesion').addClass('animate__slideInUp');
            $('.hero .col-md-8 .sosmed').addClass('animate__slideInUp');
        } else if (classes == "about") {
            //ABOUT SECTION
            $('.hero .col-md-8 .about').addClass('animate__slideInUp');
        } else if (classes == "skills") {
            // SKILLS
            $('.skills').addClass('animate__slideInUp');
        } else if (classes == "porto") {
            // PORTOFOLIO
            $('.portofolio').addClass('animate__slideInUp');
        } else if (classes == "contact") {
            // CONTACT
            $('.contact').addClass('animate__slideInUp');
        }


    } else {

        if (classes == "hero") {
            // HERO
            $('.hero .col-md-4 .shadow-img').show();
            $('.hero .col-md-8 .name').removeClass('animate__slideInUp');
            $('.hero .col-md-8 .profesion').removeClass('animate__slideInUp');
            $('.hero .col-md-8 .sosmed').removeClass('animate__slideInUp');
        } else if (classes == "about") {
            //ABOUT SECTION
            $('.hero .col-md-8 .about').removeClass('animate__slideInUp');
        } else if (classes == "skills") {
            // SKILLS
            $('.skills').removeClass('animate__slideInUp');
        } else if (classes == "porto") {
            // PORTOFOLIO
            $('.portofolio').removeClass('animate__slideInUp');
        } else if (classes == "contact") {
            // CONTACT
            $('.contact').removeClass('animate__slideInUp');
        }

    }
}

$(document).ready(function() {
    $(window).scroll(function() {
        var x = window.matchMedia("(max-width: 700px)");

        if (x.matches) {
            $('.hero .col-md-4 .shadow-img').hide();
            scrolls(240, "hero");
            scrolls(450, "about");
            scrolls(650, "skills");
            scrolls(1650, "porto");
            scrolls(2750, "contact");
        } else {
            scrolls(240, "hero");
            scrolls(450, "about");
            scrolls(650, "skills");
            scrolls(950, "porto");
            scrolls(1750, "contact");
        }


    });

    $('.tab1').on('click', function() {
        $('.tab3').removeClass('active');
        $('.tab2').removeClass('active');
        $('.tab1').addClass('active');
        $('.software').addClass('animate__fadeIn');
        $('.graphic').removeClass('animate__fadeIn');
        $('.tab-text-1').show();
        $('.tab-text-2').hide();
        $('.tab-text-3').hide();
        $('.software').show();
        $('.graphic').hide();
        $('.automation').hide();
    });

    $('.tab2').on('click', function() {
        $('.tab1').removeClass('active');
        $('.tab2').addClass('active');
        $('.tab3').removeClass('active');
        $('.graphic').addClass('animate__fadeIn');
        $('.software').removeClass('animate__fadeIn');
        $('.tab-text-1').hide();
        $('.tab-text-2').show();
        $('.tab-text-3').hide();
        $('.software').hide();
        $('.graphic').show();
        $('.automation').hide();
    });

    $('.tab3').on('click', function() {
        $('.tab1').removeClass('active');
        $('.tab2').removeClass('active');
        $('.tab3').addClass('active');
        $('.automation').addClass('animate__fadeIn');
        $('.graphic').removeClass('animate__fadeIn');
        $('.software').removeClass('animate__fadeIn');
        $('.tab-text-1').hide();
        $('.tab-text-2').hide();
        $('.tab-text-3').show();
        $('.software').hide();
        $('.graphic').hide();
        $('.automation').show();
    });

    $('form').submit(function(e) {
        var name = $('.nama').val();
        var nohp = $('.nohp').val();
        var msg = $('.msg').val();
        if (name == "" && nohp == "" && msg == "") {
            $('.modal#fail').modal('show');
        } else {
            var message = `
            Hi I am ${name}
My phone number is ${nohp}
${msg}`;

            e.preventDefault();
            $.ajax({
                url: 'https://api.telegram.org/bot1891670113:AAHSWnXdd6OsjTpHfbCCt-rZ7Os7v8trJBY/sendMessage',
                method: 'POST',
                data: {
                    chat_id: 989986912,
                    text: `${message}`
                },
                success: function() {
                    $('.modal#success').modal('show');
                    $('form').trigger('reset');
                }
            });
        }

    });

    for (let index = 1; index < 15; index++) {
        $(`#image${index}`).click(() => {
            if (index == 1) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/portodesign1.webp');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/portodesign1.webp' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            } else if (index == 2) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/portodesign2.webp');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/portodesign2.webp' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            } else if (index == 3) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/portodesign4.webp');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/portodesign4.webp' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            } else if (index == 4) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/portodesign9.webp');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/portodesign9.webp' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            } else if (index == 5) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/portodesign5.webp');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/portodesign5.webp' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            } else if (index == 6) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/portodesign6.webp');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/portodesign6.webp' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            } else if (index == 7) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/portodesign7.webp');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/portodesign7.webp' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            } else if (index == 8) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/portodesign8.webp');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/portodesign8.webp' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            } else if (index == 9) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/portodesign3.webp');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/portodesign3.webp' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            } else if (index == 10) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/schematik.pdf');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/pcb_design_smart_module.jpg' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            } else if (index == 11) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/3D/HDA_PROJ');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/product-1.jpg' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            } else if (index == 12) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/logo-outoria.jpg');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/logo-outoria.jpg' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            } else if (index == 13) {
                $('.modal .modal-footer .btn-primary').attr('href', './assets/img/portofolios/logo-nacavibe.jpg');
                $(".modal .modal-body center").empty().append("<img src='./assets/img/portofolios/logo-nacavibe.jpg' class='image-priview-modal'>");
                $('#ModalCenter').modal('show');
            }
        });

    }




});