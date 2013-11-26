/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#xe000;',
			'icon-list' : '&#xe001;',
			'icon-menu' : '&#xe002;',
			'icon-chrome' : '&#xe003;',
			'icon-firefox' : '&#xe004;',
			'icon-opera' : '&#xe005;',
			'icon-mail' : '&#xe006;',
			'icon-twitter' : '&#xe007;',
			'icon-facebook' : '&#xe008;',
			'icon-phone' : '&#xe009;',
			'icon-cog' : '&#xe00a;',
			'icon-profile' : '&#xe00b;',
			'icon-remove' : '&#xe00c;',
			'icon-switch' : '&#xe00d;',
			'icon-calendar' : '&#xe00e;'
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