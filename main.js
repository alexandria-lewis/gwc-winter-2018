$(document).ready(function(){
  $('.tabs').click(function(e) {
    e.preventDefault();
    $('.tab_content').hide();
    var selectTab = $(this).data("href");
    
    $(selectTab).show();
  });
  
  $("#burger").click(function(e){
    e.preventDefault();
    if( $(".fa-bars").is(":visible") ){
      $(".fa-bars").hide();
      $(".fa-times").show();
      $("#mobileMenu").show();
    }else if( $(".fa-times").is(":visible") ){
      $(".fa-times").hide();
      $(".fa-bars").show();
      $("#mobileMenu").hide();
    }
  });
  
  $(".linkMobile").click(function(e) {
    e.preventDefault();
    $('.tab_content').hide();
    var selectTab = $(this).data("href");
    $(selectTab).show();
    $(".fa-times").hide();
    $(".fa-bars").show();
    $("#mobileMenu").hide();
  });
});