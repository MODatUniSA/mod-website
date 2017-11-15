$(".carousel-captions")[0].style.display = "block";
$('#wakeCarousel').on('slid.bs.carousel', function (event) {
  var active = $(event.target).find('.carousel-inner > .item.active');
  var from = active.index();
  var next = $(event.relatedTarget);
  var to = next.index();
  var direction = event.direction;
  var captions = $('.carousel-captions');
  // Show current slide information
  $.each(captions, function( index, value ) {
    if (index == to) {
      value.style.display = "block";
    } else {
      value.style.display = "none";
    }
  });
})