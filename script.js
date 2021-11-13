$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });

    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }


        });

    });

}); 



var id1 = document.getElementById("id1");
var id2 = document.getElementById("id2");
var id3 = document.getElementById("id3");
var id4 = document.getElementById("id4");
var id5 = document.getElementById("id5");
function erase() {
    alert("Your response has been submited");
    id1.value = "";
    id2.value = "";
    id3.value = "";
    id4.value = "";
    id5.value = "";
}
//# sourceMappingURL=Hack%202.0.js.map