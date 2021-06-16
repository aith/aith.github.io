// For the projects
// Init Masonry
/* https://stackoverflow.com/questions/30888852/masonry-imagesloaded-html5-video-poster */
var posterCount = $('video').length;
var postersLoaded = 0;


var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',  // Make sure there's a div named grid-sizer placed in the html
});

function ready_up() {
    postersLoaded++;
    if (postersLoaded >= posterCount) {
        /* Wait for images to load */
        $grid.imagesLoaded().progress( function() {
          $('grid').masonry('reloadItems');
          $('grid').masonry('layout');
        });
    }
}

var videoCollection = document.getElementsByTagName("video");
Array.from(videoCollection).forEach(function (element) {
  ready_up();
});
