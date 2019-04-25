$(document).ready(function(){
  // Activate Carousel with a specified interval
  $("#myCarousel").carousel({interval: 500});
        

  $(window).scroll(function() {
    var top = $(document).scrollTop();
    if(top <= $('.page').height()*5.6)
    {
      $('#loading').css('top', top+($(window).height()-$('#loading').height())/2+'px');
      $('#store').css('top', top+'px');
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