/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'allanwhite-io\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-screen' : '&#xe000;',
			'icon-mobile' : '&#xe001;',
			'icon-mobile-2' : '&#xe002;',
			'icon-tv' : '&#xe003;',
			'icon-map' : '&#xe004;',
			'icon-map-2' : '&#xe005;',
			'icon-phone' : '&#xe006;',
			'icon-profile' : '&#xe007;',
			'icon-tags' : '&#xe008;',
			'icon-tag' : '&#xe009;',
			'icon-quotes-left' : '&#xe00a;',
			'icon-search' : '&#xe00b;',
			'icon-zoom-in' : '&#xe00c;',
			'icon-zoom-out' : '&#xe00d;',
			'icon-plus' : '&#xe00e;',
			'icon-minus' : '&#xe00f;',
			'icon-play' : '&#xe010;',
			'icon-play-2' : '&#xe011;',
			'icon-feed' : '&#xe012;',
			'icon-twitter' : '&#xe013;',
			'icon-vimeo' : '&#xe014;',
			'icon-google-plus' : '&#xe015;',
			'icon-facebook' : '&#xe016;',
			'icon-github' : '&#xe017;',
			'icon-linkedin' : '&#xe018;',
			'icon-tumblr-sign' : '&#xf174;',
			'icon-location-arrow' : '&#xf124;',
			'icon-linkedin-2' : '&#xf0e1;',
			'icon-google-plus-2' : '&#xe019;',
			'icon-facebook-2' : '&#xe01a;',
			'icon-tumblr' : '&#xe01b;',
			'icon-tumblr-2' : '&#xe01c;',
			'icon-chevron-sign-left' : '&#xf137;',
			'icon-chevron-sign-right' : '&#xf138;',
			'icon-chevron-sign-up' : '&#xf139;',
			'icon-chevron-sign-down' : '&#xf13a;',
			'icon-envelop' : '&#xe01d;',
			'icon-reorder' : '&#xf0c9;',
			'icon-easel-logo-2013-k' : '&#xe01e;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};