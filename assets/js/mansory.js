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


// // Init Masonry
// /* https://stackoverflow.com/questions/30888852/masonry-imagesloaded-html5-video-poster */
// var posterCount = $('video').length;
// var postersLoaded = 0;


// var grid = $('.grid').masonry({
//   itemSelector: '.grid-item',
//   percentPosition: true,
//   columnWidth: '.grid-sizer',  // Make sure there's a div named grid-sizer placed in the html
// });

// grid.on( 'load loadeddata', function() {
//   grid.masonry('layout');
// });

// function ready_up() {
//       postersLoaded++;
//       if (postersLoaded >= posterCount) {
//           /* Wait for images to load */
//         console.log("hi");
//         // $('grid').masonry('reloadItems');
//         $('grid').masonry('reloadItems');
//         $('grid').masonry('layout');
//       }
// }

// grid.imagesLoaded( function() {
//   document.querySelectorAll('video').forEach(vid => 
//     vid.addEventListener('loadeddata', (event) => {
//       grid.masonry('layout');
//     })
//   )
//   // var videoCollection = document.getElementsByTagName("video");
//   // Array.from(videoCollection).forEach(function (element) {
//   //   console.log("hi");
//   //   ready_up();
//   // });
// });
