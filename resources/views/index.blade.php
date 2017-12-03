<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
	<title>香草網誌</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0 user-scalable=no">
	<link rel="stylesheet" href="{{asset('css/main.css')}}">
</head>
<body>
	<div id="app">
    <div class="app">
      <header id="header" class="borderbox">
        <div id="hamburger"></div>
      </header>

      <div class="body-container borderbox" id="body-container">
        <section>
          <article id="slider">
            <div class="slider"></div>
          </article>

          <article id="detail">
            <div id="detail"></div>
          </article>

          <article id="site">
            <div class="container map borderbox">
              <div id="tab"></div>

              <div class="right-box">
                <div id="gmapmap" name="map"></div>
              </div>
            </div>
          </article>

        </section>
      </div>

      <footer class="vuefooter"></footer>
      <div class="tree"></div>
      <div class="sun"></div>
      <div class="cloud"></div>
      
    </div>

    <div id="sidebar"></div>
    <div id="detailswiper"></div>


  </div>



	
	<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
	</script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCE_-UWOXAUeq_kY7a1WXm1u6P0oqW23l4" ></script>
	<script src="{{asset('js/app.js')}}"></script>
	<script type="text/javascript">
		function includeLinkStyle(url) {
			var link = document.createElement("link");
			link.rel = "stylesheet";
			link.type = "text/css";
			link.href = url;
			document.getElementsByTagName("head")[0].appendChild(link);
		}

		var isFirefox = navigator.userAgent.match("Firefox"); 
		var isIE = (/Trident\/7\./).test(navigator.userAgent);
		var isOpera = navigator.userAgent.match("Opera"); 
		var isSafari = navigator.userAgent.match("Safari"); 
		if (isIE)
		{
			includeLinkStyle("{{asset('css/ie.css')}}") 
		}
		if (isFirefox)
		{
			includeLinkStyle("{{asset('css/firefox.css')}}")
		}          
	</script>
</body>
</html>