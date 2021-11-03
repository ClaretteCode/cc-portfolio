// Parallax -->
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
  
    //jumbotron
    $('.jumbotron img').css({
      'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
  
    // Text typing animation to load when view -->
    if(wScroll > $('#about').offset().top-300) {
      $('#about h2').addClass('typing-demo');
    }
    
    //icon di skills
    if(wScroll > $('#skills').offset().top-300) {
        $('#skills .col').each(function(i) {
            setTimeout(function() {
                $('#skills .col').eq(i).addClass('show');
            }, 300 * (i+1));
        });
    }

    //contact me all
    if(wScroll > $('#contact').offset().top-300) {
        $('#contact .container').addClass('show');
    }
  
    //parallax portfolio
    if(wScroll > $('#portfolio').offset().top-300) {
        $('#portfolio #kobayashi').addClass('show');
        $('#portfolio #mutiarajc').addClass('show');
    }

})



// Preloader -->
      $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
      });

// Make header on top of nav -->
  $('#nav').affix({
        offset: {
          top: $('header').height()
        }
});	


//modal

