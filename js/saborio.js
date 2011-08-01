jQuery(function($){
				
  $.supersized({
    start_slide        : 0,			// Start slide (0 is random)
    new_window         : 1,			// Image links open in new window/tab
    image_protect      : 1,			// Disables image dragging and right click with Javascript
                           
    // Size & Position						   
    min_width		       : 0,			// Min width allowed (in pixels)
    min_height		     : 0,			// Min height allowed (in pixels)
    vertical_center    : 1,			// Vertically center background
    horizontal_center  : 1,			// Horizontally center background
    fit_always				 : 1,			// Image will never exceed browser width or height (Ignores min. dimensions)
    fit_portrait       : 1,			// Portrait images will not exceed browser height
    fit_landscape			 : 0,			// Landscape images will not exceed browser width
    slides 					   : [			// Slideshow Images
                          {image : 'img/chocolates.jpg'},
                          {image : 'img/sushi.jpg'},
                          {image : 'img/guiso.jpg'}
                        ],
  });
});
