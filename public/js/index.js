$(document).ready(function(){
  
  $("#start").prop('disabled',true);

  $(window).scroll(function() {
    var top = $(document).scrollTop();
    if(top <= $(document).height())
    {
      $('.arrow').css('top', top+($(window).height()-$('.arrow').height())/2+'px');
    }
  });

  // Click on the button to start sliding 
  $("#start").click(function(){
    $("#myCarousel").carousel("cycle");
    $("#stop").prop('disabled',false);
    $("#start").prop('disabled',true);
  });

  // Click on the button to stop sliding 
  $("#stop").click(function(){
    $("#myCarousel").carousel("pause");
    $("#start").prop('disabled',false);
    $("#stop").prop('disabled',true);
  });
});