$(document).ready(function(){
  $(".icon").on("click",function(){
    $(this).toggleClass("active");
    $(".hamburgerUl").toggleClass("hamburgerUlHider");
  });
});
