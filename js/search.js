(function () {
    'use strict';

    var idx = null;
    var store = null;

    // ---- Navbar search ----

    function initNavbarSearch() {
        var input = document.getElementById('search-input');
        var form  = document.getElementById('search-form');
        if (!input || !form) return;

        // Use capture phase (third arg = true) so this runs BEFORE jQuery's
        // bubble-phase handlers — specifically jqBootstrapValidation in
        // clean-blog.js which calls event.preventDefault() on every form submit.
        form.addEventListener('submit', function (e) {
            e.stopPropagation(); // prevent jQuery from seeing this event
            e.preventDefault();
            var q = input.value.trim();
            if (q) window.location.href = '/search/?q=' + encodeURIComponent(q);
        }, true /* capture */);

        var wrapper = form.querySelector('.search-form-wrapper');

        // Pre-fill from URL when the user is on the results page
        var params = new URLSearchParams(window.location.search);
        var q = params.get('q') || '';
        if (q) {
            input.value = q;
            if (wrapper) wrapper.classList.add('has-value');
        }

        input.addEventListener('focus', function () {
            if (wrapper) wrapper.classList.add('is-focused');
        });

        input.addEventListener('blur', function () {
            if (wrapper) wrapper.classList.remove('is-focused');
        });

        input.addEventListener('input', function () {
            if (wrapper) wrapper.classList.toggle('has-value', this.value.trim().length > 0);
        });
    }

    // ---- Lunr index ----

    function loadIndex(callback) {
        if (idx) { if (callback) callback(); return; }

        fetch('/search.json')
            .then(function (r) { return r.json(); })
            .then(function (data) {
                store = data;
                idx = lunr(function () {
                    this.ref('id');
                    this.field('title',    { boost: 10 });
                    this.field('subtitle', { boost: 5  });
                    this.field('tags',     { boost: 5  });
                    this.field('excerpt');
                    data.forEach(function (doc) { this.add(doc); }, this);
                });
                if (callback) callback();
            })
            .catch(function () {
                var status = document.getElementById('search-results-status');
                if (status) status.textContent = 'Search index could not be loaded.';
            });
    }

    function runSearch(query) {
        var terms = query.split(/\s+/).filter(Boolean);
        var q = terms.map(function (t) { return t.length > 2 ? t + '~1' : t; }).join(' ');
        var results;
        try { results = idx.search(q); }
        catch (e) {
            try { results = idx.search(query); }
            catch (e2) { return []; }
        }
        // Sort by date descending (newest first) regardless of Lunr relevance score
        return results.sort(function (a, b) {
            var docA = store.find(function (d) { return String(d.id) === String(a.ref); });
            var docB = store.find(function (d) { return String(d.id) === String(b.ref); });
            return (docB ? docB.date_ts : 0) - (docA ? docA.date_ts : 0);
        });
    }

    // ---- Results page (/search/) ----

    function initResultsPage() {
        var status = document.getElementById('search-results-status');
        var list   = document.getElementById('search-results-list');
        if (!status || !list) return;

        var params = new URLSearchParams(window.location.search);
        var query  = (params.get('q') || '').trim();

        if (!query) {
            status.innerHTML = 'Enter a search term in the box above.';
            return;
        }

        status.innerHTML = 'Searching…';

        loadIndex(function () {
            var results = runSearch(query);

            if (!results.length) {
                status.innerHTML = 'No results found for <em>“' + esc(query) + '”</em>.';
                return;
            }

            var count = results.length;
            status.innerHTML = '<strong>' + count + '</strong> result' +
                (count !== 1 ? 's' : '') + ' for <em>“' + esc(query) + '”</em>';

            list.innerHTML = results.map(function (r) {
                var doc = store.find(function (d) { return String(d.id) === String(r.ref); });
                if (!doc) return '';
                var tags = doc.tags ? doc.tags.split(' ').filter(Boolean) : [];
                return '<div class="search-page-result">' +
                    '<h2 class="search-page-title"><a href="' + doc.url + '">' + esc(doc.title) + '</a></h2>' +
                    '<p class="search-page-meta">' + esc(doc.date) +
                        (tags.length ? ' &nbsp;&mdash;&nbsp; ' + tags.map(esc).join(' &middot; ') : '') +
                    '</p>' +
                    '<div class="search-page-excerpt">' + doc.excerpt + '</div>' +
                    '</div>';
            }).join('');
        });
    }

    function esc(s) {
        if (!s) return '';
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function init() {
        initNavbarSearch();
        var path = window.location.pathname.replace(/\/$/, '');
        if (path === '/search') initResultsPage();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
