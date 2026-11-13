// Theme toggle. The initial theme is applied by the inline script in
// _includes/head.html before first paint; this file wires up the buttons.
(function () {
    var root = document.documentElement;

    function stored() {
        try { return localStorage.getItem('theme'); } catch (e) { return null; }
    }

    function apply(theme) {
        root.setAttribute('data-theme', theme);
        var label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
        var buttons = document.querySelectorAll('.theme-toggle');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('aria-label', label);
            buttons[i].setAttribute('title', label);
            buttons[i].setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        }
    }

    function init() {
        apply(root.getAttribute('data-theme') || 'light');
        var buttons = document.querySelectorAll('.theme-toggle');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                apply(next);
                try { localStorage.setItem('theme', next); } catch (e) {}
            });
        }
    }

    // Follow OS changes until the reader picks a theme explicitly
    if (window.matchMedia) {
        var mq = window.matchMedia('(prefers-color-scheme: dark)');
        var onChange = function (e) {
            var s = stored();
            if (s !== 'light' && s !== 'dark') apply(e.matches ? 'dark' : 'light');
        };
        if (mq.addEventListener) mq.addEventListener('change', onChange);
        else if (mq.addListener) mq.addListener(onChange);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
