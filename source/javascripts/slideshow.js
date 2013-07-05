$( document ).ready(function() {
  console.log( "ready!" );


  $(".main_slide_show_container").each(function( index ) {
    console.log( index + ": " + $(this).children(".main_trigger") );
    $(this).children(".main_trigger").on('click', function(e){
      
      // scroll to the top once clicked
      $("html, body").animate({ scrollTop: 0 }, "slow");

      // create the main wrapper
      var main_c_div = document.createElement("div");
      main_c_div.setAttribute("id","main_slideshow_hover");
      // add the main wrapper in the body
      $("body")[0].appendChild(main_c_div)
      
      // add additional elements inside the main wrapper
      $("#main_slideshow_hover").each(function() {
        $(this).append("<div class='main_inner_container'> \
          <div class='main_img_container'></div>\
          </div>\
          <div id='close_slideshow'></div>");

      });

      // Close button
      $("#close_slideshow").on('click', function(){
        $(this).parent().remove()
      })

      // Find the thumbnails and add them inside the wrapper
      $(this).siblings('.main_img').children("div").children("img").each(function(){
        var current_value = $(this).attr("data_src")
        //$(this).attr("src", current_value)
        var main_images = document.createElement("img");
        $("#main_slideshow_hover .main_img_container")[0].appendChild(main_images).setAttribute("src", current_value)
        //appendChild(thumb_images);
      })

      
      

    });
  });


});