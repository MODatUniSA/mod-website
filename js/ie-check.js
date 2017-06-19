function msieversion() 
{
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE");
  var edge = ua.indexOf("Edge");

  if (msie > 0 || edge > 0) // If Internet Explorer
  {
    // Get version number
    // alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));

    // Swap out the animated SVG
    console.log("Microsoft browser.. switch out the animaged SVG");
    $(".morph-tangle-image").attr('src', './img/MOD_morph_tangle_6.png');
  }
  else
  {
    // A 'real' browser, return 0
  }

  return false;
}