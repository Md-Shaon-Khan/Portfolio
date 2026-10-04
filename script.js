(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s) { return document.querySelector(s); };
  var progress = $('#progress'), nav = $('#nav'), parallax = $('#parallax');
  var timeline = $('#timeline'), lineFill = $('#lineFill');
  var links = document.querySelectorAll('.nav nav a');
  var sections = Array.prototype.map.call(links, function (a) { return $(a.getAttribute('href')); });

  $('#year').textContent = new Date().getFullYear();

  /* Reveal elements as they enter the viewport */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      var c = e.target.querySelector('[data-count]');
      if (c) countUp(c);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  /* Animated numbers */
  function countUp(el) {
    var end = parseFloat(el.dataset.count), dec = +el.dataset.dec || 0, suf = el.dataset.suffix || '', pre = el.dataset.prefix || '';
    if (reduce) { el.textContent = pre + end.toFixed(dec) + suf; return; }
    var t0 = performance.now(), dur = 1400;
    (function step(t) {
      var p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + (end * eased).toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* Scroll-linked effects, throttled with requestAnimationFrame */
  var ticking = false;
  function update() {
    var y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
    nav.classList.toggle('stuck', y > 20);

    /* Parallax only on large screens; on small screens the photo stays put */
    if (parallax) {
      if (!reduce && window.innerWidth > 900 && y < window.innerHeight) {
        parallax.style.transform = 'translateY(' + (y * 0.12).toFixed(1) + 'px)';
      } else {
        parallax.style.transform = '';
      }
    }

    var r = timeline.getBoundingClientRect(), vh = window.innerHeight;
    var p = Math.min(Math.max((vh * 0.65 - r.top) / r.height, 0), 1);
    lineFill.style.transform = 'scaleY(' + p + ')';

    var current = 0;
    sections.forEach(function (s, i) { if (s.getBoundingClientRect().top < vh * 0.4) current = i; });
    links.forEach(function (a, i) { a.classList.toggle('active', i === current && y > 200); });
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();

  /* Tech stack tabs */
  var tabs = document.querySelectorAll('.tablist [role=tab]');
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab, p = document.getElementById(t.getAttribute('aria-controls'));
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      p.hidden = !on;
      if (on && !reduce) { p.classList.remove('show'); void p.offsetWidth; p.classList.add('show'); }
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      var next = tabs[(n + tabs.length) % tabs.length];
      next.focus(); select(next);
    });
  });

  /* Mobile menu */
  var menuBtn = $('#menuBtn');
  function setMenu(open) { nav.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open); }
  menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  links.forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* Project detail toggles */
  document.querySelectorAll('.toggle').forEach(function (b) {
    b.addEventListener('click', function () {
      var p = document.getElementById(b.getAttribute('aria-controls')), open = p.classList.toggle('open');
      b.setAttribute('aria-expanded', open);
      b.textContent = open ? 'Hide details' : 'View details';
    });
  });

  /* Contact form: delivered to the owner's inbox through FormSubmit */
  var EMAIL = 'shaon.iit52@gmail.com';
  var form = $('#form'), note = $('#formNote'), sendBtn = form.querySelector('button[type=submit]');
  function resetBtn() { sendBtn.disabled = false; sendBtn.textContent = 'Send message'; }

  /* Fallback: a normal form post. It also works when the page is opened from a file. */
  function postDirectly() {
    form.elements._subject.value = 'Portfolio message: ' + form.elements.subject.value;
    if (/^https?:$/.test(location.protocol)) {
      var next = document.createElement('input');
      next.type = 'hidden'; next.name = '_next'; next.value = location.href.split('#')[0] + '#contact';
      form.appendChild(next);
    }
    note.className = 'note';
    note.textContent = 'Sending your message...';
    setTimeout(resetBtn, 5000);
    form.submit();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    if (d.get('_honey')) return;
    sendBtn.disabled = true; sendBtn.textContent = 'Sending...';
    note.className = 'note'; note.textContent = '';
    fetch('https://formsubmit.co/ajax/' + EMAIL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: d.get('name'), email: d.get('email'), subject: d.get('subject'), message: d.get('message'),
        _subject: 'Portfolio message: ' + d.get('subject'), _template: 'table', _captcha: 'false'
      })
    }).then(function (r) { return r.json(); }).then(function (res) {
      var msg = String((res && res.message) || '');
      if (/activat/i.test(msg)) {
        note.classList.add('ok');
        note.textContent = 'One-time setup: please confirm the activation email sent to ' + EMAIL + ', then send the message again.';
      } else if (String(res.success) === 'true') {
        form.reset(); note.classList.add('ok');
        note.textContent = 'Thank you. Your message has been sent.';
      } else { return postDirectly(); }
      resetBtn();
    }).catch(postDirectly);
  });

  
  /* At-a-glance slider: auto-advances, pauses on hover or focus */
  (function () {
    var box = $('#glance');
    if (!box) return;
    var slides = box.querySelectorAll('.g-slide'), dotsWrap = box.querySelector('.g-dots');
    var idx = 0, timer = null, dots = [];

    slides.forEach(function (s, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Show item ' + (i + 1));
      b.addEventListener('click', function () { show(i); restart(); });
      dotsWrap.appendChild(b);
      dots.push(b);
    });

    function show(n) {
      var old = slides[idx];
      if (n === idx) { dots[n].setAttribute('aria-current', 'true'); return; }
      slides.forEach(function (s) { if (s !== old && s !== slides[n]) s.classList.remove('prev'); });
      old.classList.remove('active'); old.classList.add('prev');
      slides[n].classList.remove('prev'); slides[n].classList.add('active');
      idx = n;
      dots.forEach(function (d, i) { d.setAttribute('aria-current', i === n); });
    }
    function next() { show((idx + 1) % slides.length); }
    function stop() { clearInterval(timer); timer = null; }
    function start() { if (!reduce && !timer) timer = setInterval(next, 3500); }
    function restart() { stop(); start(); }

    box.addEventListener('mouseenter', stop);
    box.addEventListener('mouseleave', start);
    box.addEventListener('focusin', stop);
    box.addEventListener('focusout', start);
    show(0); start();
  })();
})();
