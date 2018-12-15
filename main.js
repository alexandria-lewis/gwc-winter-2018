$(function(){
  $('.tabs').click(function(e) {
    e.preventDefault();
    $('.tab_content').hide();
    var selectTab = $(this).attr("href");
    $(selectTab).show();
  });
});