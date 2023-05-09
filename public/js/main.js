/*
	Arcana by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -15,
			hoverDelay: 0,
			alignment: 'center'
		});

	// Nav.

		// Bar.
			$(
				'<div id="titleBar" style="text-align:center">' +
					'<a href="#navPanel" class="toggle"></a>' +
					//'<span class="title">' + 'Moonlight Meadery' + '</span>' +
					'<img  style="float:center; max-height: 2.5em;" src="/public/images/logoDark.png">' +
				'</div>'
			)
				.appendTo($body);

				
		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

				
			

})(jQuery);

let current = 'current' 

if(window.location.pathname == '/') { document.getElementById('index').classList.add(current)}
 else if(window.location.pathname == '/whatIsMead'){ document.getElementById('history').classList.add(current)}
else if(window.location.pathname == '/products'){ document.getElementById('prod').classList.add(current)}
else if(window.location.pathname == '/about'){ document.getElementById('info').classList.add(current)}
else if(window.location.pathname == '/careers'){ document.getElementById('careers').classList.add(current)}
else if(window.location.pathname == '/signUp'){ document.getElementById('newsletter').classList.add(current)};





    




var root = document.documentElement;
const lists = document.querySelectorAll('.hs'); 

lists.forEach(el => {
  const listItems = el.querySelectorAll('li');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});