$('.text').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$(window).scroll(function(){
    if($(window).scrollTop()>100){
        $(".to-top").show();
    }
    else{
        $(".to-top").hide();
    }
})
// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("#loader").style.display = "none";
//   document.getElementById("#main").style.display = "block";
// }