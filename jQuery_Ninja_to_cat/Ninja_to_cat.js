$(document).ready(function(){
      $("img").click(function(){
            console.log($(this).attr("data-alt-src"));
            var alt_src = $(this).attr("data-alt-src");
            var src = $(this).attr("src");
            $(this).attr('src', alt_src);
            $(this).attr('data-alt-src', src);
      })
})
