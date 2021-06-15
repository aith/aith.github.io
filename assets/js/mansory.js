// For the projects
$(document).ready(function() {
  // Init Masonry
  var $grid = $('.grid').masonry({
    // gutter: '.gutter-sizer',
    // horizontalOrder: true,
    itemSelector: '.grid-item',
    percentPosition:true,
    columnWidth: '.grid-sizer',  // Make sure there's a div named grid-sizer placed in the html
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});
