$(document).ready(function () {
//toggle head links
    const navContainer = document.getElementById('js-toggle-nav');
    const navBtns = navContainer.getElementsByClassName('nav__item');
    for(var a = 0; a < navBtns.length; a++)
    {
        navBtns[a].addEventListener("click", function()
            {
                let current = navContainer.getElementsByClassName('nav__item_isActive');
                current[0].className = current[0].className.replace(" nav__item_isActive","");
                this.className += " nav__item_isActive";
            });
    }

//owl-carousel for slider-item advantages
    $(".advantages .owl-carousel").owlCarousel(
        {
            responsive:{
                0:{
                    center: true,
                    items: 1,
                    dots: true,
                    mouseDrag: true,
                    touchDrag: true,
                    pullDrag: true,
                },
                768:{
                    items:2,
                },
                1024:{
                    items:4,
                    dots: false,
                    mouseDrag: false,
                    touchDrag: false,
                    pullDrag: false,
                }
            }
        });

// owl-carousel for recSection
    $(".main__rec .owl-carousel").owlCarousel(
        {
            responsive:{
                0:{
                    items: 1,
                    nav: true,
                    navText: false,
                    dots: false,
                    mouseDrag: true,
                    touchDrag: true,
                    pullDrag: true,
                },
                1224:
                {
                    items:3,
                    nav: true,
                    navText: false,
                    dots: false,
                    mouseDrag: true,
                    touchDrag: true,
                    pullDrag: true,
                }
            }
        });

//js-slider

    $(".slider__link").click(function () {
        if (!$(this).hasClass("active")) {
            $(".slider__link").removeClass("active");
            $(this).addClass("active");

            let problemBtnId = this.id;

            $(".slider__item").slideUp();
            if (problemBtnId === "des_btn") {
                $("#des").slideDown();
            } else if (problemBtnId === "adv_btn") {
                $("#adv").slideDown();
            } else if (problemBtnId === "htu_btn") {
                $("#htu").slideDown();
            }   else if (problemBtnId === "res_btn") {
                $("#res").slideDown();
            }
        }
    });

// header

    $(".nav-btn").click(function () {
        $(".header__nav").slideToggle();
    });

//toggle comment menu

    //open
    $(".rf-leave-review").click(function () {
        $(".rf-make_comment-wrapper").slideDown();
    });

    //close
    $(".mc-close").click(function () {
        $(".rf-make_comment-wrapper").slideUp();
    });
    $(".mc-leave_btn").find("input").click(function () {
        $(".rf-make_comment-wrapper").slideUp();
        event.preventDefault();
    });

// show-more comment button

    $(".rf-show-more").click(function () {


        $(".hidden").slideToggle();
    });

// comment menu slider

    $(".problem__btn").click(function () {
        if(!$(this).hasClass("active")) {
            $(".problem__btn").removeClass("active");
            $(this).addClass("active");

            let problemBtnId = this.id;

            //$(".rf-fb-slider-item").removeClass("active");
            $(".rf-fb-slider-item").slideUp();
            if(problemBtnId === "dryness_btn") {
                //$("#dryness").addClass("active");
                $("#dryness").slideDown();
            } else if(problemBtnId === "chafing_btn") {
                //$("#chafing").addClass("active");
                $("#chafing").slideDown();
            } else if(problemBtnId === "exfoliation_btn") {
                //$("#exfoliation").addClass("active");
                $("#exfoliation").slideDown();
            }

            if($(window).width() < 1024) {
                $(".rf-problem-list-outer").toggleClass("more_height");
            }

        } else if($(window).width() < 1024) {
            $(".rf-problem-list-outer").toggleClass("more_height");
        }
    });
        
});