$(document).ready(function(){
  // Activate Carousel with a specified interval
  $("#myCarousel").carousel({interval: 6000});
        
  // Click on the button to start sliding 
  $("#myBtn").click(function(){
    $("#myCarousel").carousel("cycle");
  });

  // Click on the button to stop sliding 
  $("#myBtn2").click(function(){
    $("#myCarousel").carousel("pause");
  });
});