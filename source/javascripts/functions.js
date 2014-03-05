$( document ).ready(function() {

  $(".main_project_viewer_container").each(function( index ) {
    console.log( index + ": " + $(this).children(".main_trigger") );
    $(this).children(".main_trigger").on('click', function(e){
      var t_pos = $(this).offset().top;
      var t_pos_r = Math.round(t_pos);
      
      // scroll to the top once clicked
      $("html, body").animate({ scrollTop: 0 }, 200);

      // create and add the main wrapper in the body
      $("body").append("<div id='main_project_viewer_hover'>\
        <div class='main_inner_container'> \
          <div class='main_content'></div>\
          <div class='main_img_container'></div>\
        </div>\
        <div id='close_project_viewer'>X</div>\
        </div>")
      
      // Close button
      $("#close_project_viewer").on('click', function(){
        $(this).parent().remove()
        $("html, body").animate({ scrollTop: t_pos_r - 50 }, 200);
      })

      $("#main_project_viewer_hover").on('click', function(e){
        if( e.target == this ) 
          $(this).remove();
          $("html, body").animate({ scrollTop: t_pos_r - 50 }, 200);
      });
      // Find the thumbnails and add them inside the wrapper
      $(this).siblings('.main_img').children("img").each(function(){
        var current_value = $(this).attr("data_src")
        $("#main_project_viewer_hover .main_img_container").append("<img src='"+current_value+"'>")
      })

      
      // Move the content as well
      $(this).siblings('.content').each(function(){
        // $("#main_slideshow_hover .main_content").append($(this));
        $(this).clone().appendTo("#main_project_viewer_hover .main_content");
      })

    });
  });





  // Mcom Functions
  $("body.projects_mcom").each(function( index ) {

    // move bullets above the container
    $(function(){
        var bullets = $('ol.orbit-bullets');
        bullets.insertBefore($(".orbit-slides-container"));
    });

    // animate when in view
    // Returns true if the specified element has been scrolled into the viewport.
    function isElementInViewport(elem) {
        var $elem = $(elem);

        // Get the scroll position of the page.
        var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        var viewportTop = $(scrollElem).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        // Get the position of the element on the page.
        var elemTop = Math.round( $elem.offset().top );
        var elemBottom = elemTop + $elem.height();

        return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
    }

    // Check if it's time to start the animation.
    function checkAnimation() {
        var $elem = $('.animate_when_in_view');

        // If the animation has already been started
        if ($elem.hasClass('start')) return;

        if (isElementInViewport($elem)) {
            // Start the animation
            $elem.addClass('start');
        }
    }

    // Capture scroll events
    $(window).scroll(function(){
        checkAnimation();
    });
  });
});



var scroll_to_el = function(id) {
  $('html, body').animate({
      scrollTop: $("#"+id).offset().top
   }, 200);
}


