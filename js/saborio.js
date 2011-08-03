jQuery(function($){
				
  $.supersized({

    // Functionality
    slideshow          : 1,
    autoplay           : 1,
    keyboard_nav       : 1,
    slide_interval     : 6000,
    transition         : 6,
    start_slide        : 0,			// Start slide (0 is random)
    new_window         : 1,			// Image links open in new window/tab
    image_protect      : 1,			// Disables image dragging and right click with Javascript
                           
    // Size & Position						   
    min_width		       : 0,			// Min width allowed (in pixels)
    min_height		     : 0,			// Min height allowed (in pixels)
    vertical_center    : 1,			// Vertically center background
    horizontal_center  : 1,			// Horizontally center background
    fit_always				 : 0,			// Image will never exceed browser width or height (Ignores min. dimensions)
    fit_portrait       : 0,			// Portrait images will not exceed browser height
    fit_landscape			 : 0,			// Landscape images will not exceed browser width
    slides 					   : [			// Slideshow Images
                          {image : 'img/chocolates.jpg'},
                          {image : 'img/sushi.jpg'},
                          {image : 'img/guiso.jpg'}
                        ],
  });

  $('#prevslide').click(function() {
    api.prevSlide();
    return false;
  });

  $('#stop-play').click(function() {
    api.playToggle();
    return false;
  });

  $('#nextslide').click(function() {
    api.nextSlide();
    return false;
  });
});
