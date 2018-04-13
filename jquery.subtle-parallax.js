/**************************************************/
/* Plugin name: One Subtle Parallax               */
/* Author: Richard Grandi - richard@oneltd.co.uk  */
/* Usage: On any strip with a background-image    */
/* Set to background-attachment: fixed;           */
/**************************************************/

$.fn.subtle_parallax = function () {
  var strip = this,
      scrolltop = $(window).scrollTop(),
      this_top_position = strip.offset().top;

  $(window).on('scroll', function() {
    scrolltop = $(window).scrollTop();

    if (scrolltop < this_top_position) {
      return false;
    }

    if (scrolltop > this_top_position + strip.height()) {
      return false;
    }

    strip.css('background-position', '50% -'+(scrolltop - this_top_position)/3+'px');
  });
};