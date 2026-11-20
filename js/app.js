/* Bruno Carneiro Leão — portfólio
   Idiomas, configurações e efeitos. Sem dependências. */
(function () {
  'use strict';

  var D = window.PORTFOLIO;
  if (!D) return;

  var html = document.documentElement;
  var body = document.body;
  var KEY = 'bl.settings';
  var mqDark = window.matchMedia('(prefers-color-scheme: dark)');
  var mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mqFine = window.matchMedia('(pointer: fine)');

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(v) {
    return String(v).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function hexRgb(s, fallback) {
    var m = /^#([0-9a-f]{6})$/i.exec((s || '').trim());
    if (!m) return fallback;
    var n = parseInt(m[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  /* ---------------------------------------------------------------------
     Configurações (persistidas em localStorage)
     ------------------------------------------------------------------ */
  function defaults() {
    var calm = mqMotion.matches;
    return {
      lang: (navigator.language || 'pt').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en',
      theme: 'system',
      accent: 'tangerine',
      size: 'm',
      fx: { field: !calm, lens: !calm, motion: !calm }
    };
  }
  var hadSaved = false;
  function load() {
    var d = defaults();
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (s && typeof s === 'object') {
        hadSaved = true;
        var out = Object.assign({}, d, s);
        out.fx = Object.assign({}, d.fx, s.fx || {});
        if (!D.i18n[out.lang]) out.lang = d.lang;
        if (!D.accents.some(function (a) { return a.id === out.accent; })) out.accent = d.accent;
        if (['system', 'light', 'dark'].indexOf(out.theme) < 0) out.theme = 'system';
        if (['s', 'm', 'l'].indexOf(out.size) < 0) out.size = 'm';
        return out;
      }
    } catch (e) { /* armazenamento indisponível */ }
    return d;
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignora */ }
  }

  var S = load();
  var L = D.i18n[S.lang];
  var field = null;
  var lens = null;
  var revealIO = null;

  function motionOn() { return S.fx.motion; }
  function effTheme() { return S.theme === 'system' ? (mqDark.matches ? 'dark' : 'light') : S.theme; }
  function t(path) {
    return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, L);
  }

  function apply() {
    html.setAttribute('data-theme', S.theme);
    html.setAttribute('data-accent', S.accent);
    html.setAttribute('data-size', S.size);
    html.setAttribute('data-motion', S.fx.motion ? 'on' : 'off');
    html.setAttribute('data-field', S.fx.field ? 'on' : 'off');
    html.setAttribute('data-lens', (S.fx.lens && mqFine.matches) ? 'on' : 'off');
    html.setAttribute('data-theme-effective', effTheme());
    var tc = $('meta[name="theme-color"]');
    if (tc) tc.setAttribute('content', getComputedStyle(html).getPropertyValue('--bg').trim() || '#0B0E17');
    if (field) { field.setEnabled(S.fx.field); field.refreshColors(); }
    if (lens) lens.setEnabled(html.getAttribute('data-lens') === 'on');
    syncControls();
  }

  function syncControls() {
    $$('[data-set]').forEach(function (el) {
      var key = el.getAttribute('data-set');
      if (key.indexOf('fx.') === 0) {
        el.setAttribute('aria-checked', String(!!S.fx[key.slice(3)]));
        if (key === 'fx.lens') el.disabled = !mqFine.matches;
        return;
      }
      var on = el.getAttribute('data-value') === S[key];
      if (el.getAttribute('role') === 'radio') el.setAttribute('aria-checked', String(on));
      else el.setAttribute('aria-pressed', String(on));
    });
    $$('.langswitch button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === S.lang));
    });
  }

  /* ---------------------------------------------------------------------
     Renderização do conteúdo
     ------------------------------------------------------------------ */
  function renderAll() {
    document.title = L.title;
    html.lang = L.htmlLang;
    var md = $('meta[name="description"]');
    if (md) md.setAttribute('content', L.description);

    $$('[data-t]').forEach(function (el) {
      var v = t(el.getAttribute('data-t'));
      if (typeof v === 'string') el.textContent = v;
    });
    $$('[data-t-aria]').forEach(function (el) {
      var v = t(el.getAttribute('data-t-aria'));
      if (typeof v === 'string') el.setAttribute('aria-label', v);
    });

    renderHero();
    renderAbout();
    renderExperience();
    renderSkills();
    renderQuery();
    renderProjects();
    renderEducation();
    renderContact();
    renderSwatches();
    syncControls();
  }

  function renderHero() {
    var h = L.hero;
    var idx = 0;
    var name = h.nameLines.map(function (line) {
      var chars = Array.from(line).map(function (ch) {
        return '<span class="ch" style="--i:' + (idx++) + '">' + esc(ch) + '</span>';
      }).join('');
      return '<span class="hero__line">' + chars + '</span>';
    }).join('');

    $('#heroInner').innerHTML =
      '<div class="hero__text">' +
        '<p class="hero__intro" data-rise style="--d:0">' + esc(h.intro) + '</p>' +
        '<h1 class="hero__name"><span class="sr-only">' + esc(D.meta.name) + '</span>' +
          '<span aria-hidden="true">' + name + '</span></h1>' +
        '<p class="hero__role" data-rise style="--d:2">' + esc(h.role) + '</p>' +
        '<p class="hero__statement" data-rise style="--d:3">' + esc(h.statement) + '</p>' +
        '<ul class="hero__meta" data-rise style="--d:4">' +
          h.meta.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') +
        '</ul>' +
        '<div class="hero__cta" data-rise style="--d:5">' +
          '<a class="btn btn--primary" href="#projects">' + esc(h.ctaProjects) + '</a>' +
          '<a class="btn" href="' + esc(D.meta.cv) + '" download>' + esc(h.ctaCv) + '</a>' +
        '</div>' +
      '</div>' +
      '<figure class="hero__photo" data-rise style="--d:1">' +
        '<img src="' + esc(D.meta.photo) + '" alt="' + esc(h.photoAlt) + '" width="311" height="301" decoding="async" fetchpriority="high">' +
        '<span class="hero__frame" aria-hidden="true"></span>' +
      '</figure>';
    $('#scrollHint').textContent = h.scrollHint;
  }

  function renderAbout() {
    var a = L.about;
    $('#aboutBody').innerHTML =
      '<div class="prose" data-reveal>' +
        a.paragraphs.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') +
      '</div>' +
      '<ul class="facts" data-reveal>' +
        a.facts.map(function (f) {
          return '<li class="fact"><span class="fact__value">' + esc(f.value) + '</span>' +
                 '<span class="fact__label">' + esc(f.label) + '</span></li>';
        }).join('') +
      '</ul>';
  }

  function renderExperience() {
    var items = L.experience.items;
    $('#experienceBody').innerHTML =
      '<ol class="timeline" data-reveal><span class="timeline__progress" aria-hidden="true"></span>' +
        items.map(function (it, i) {
          return '<li class="job' + (i === 0 ? ' job--current' : '') + '" style="--d:' + i + '">' +
            '<div class="job__head">' +
              '<h3 class="job__role">' + esc(it.role) + '</h3>' +
              '<p class="job__company">' + esc(it.company) + '<span class="job__place">' + esc(it.place) + '</span></p>' +
              '<p class="job__period">' + esc(it.period) + '</p>' +
            '</div>' +
            '<ul class="job__bullets">' + it.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' +
          '</li>';
        }).join('') +
      '</ol>';
  }

  function renderSkills() {
    var sk = L.skills;
    $('#skillsBody').innerHTML =
      '<div class="skillgrid">' +
        sk.groups.map(function (g) {
          return '<section class="sgroup" data-reveal>' +
            '<h3 class="sgroup__name">' + esc(g.name) + '</h3>' +
            '<ul class="sgroup__list">' +
              g.items.map(function (s, i) {
                if (s.level) {
                  var lvl = sk.levelNames[s.level];
                  return '<li class="skill" style="--d:' + i + '">' +
                    '<span class="skill__name">' + esc(s.name) + '</span>' +
                    '<span class="skill__lvl" data-level="' + s.level + '" role="img" aria-label="' + esc(sk.levelHint + ': ' + lvl) + '"><i></i><i></i><i></i></span>' +
                    '<span class="skill__note">' + esc(lvl) + (s.note ? ', ' + esc(s.note) : '') + '</span>' +
                  '</li>';
                }
                return '<li class="chip-item">' + esc(s.name) +
                  (s.note ? '<span class="chip-item__note">' + esc(s.note) + '</span>' : '') + '</li>';
              }).join('') +
            '</ul>' +
          '</section>';
        }).join('') +
      '</div>';
  }

  function renderQuery() {
    var q = L.query;
    $('#queryBody').innerHTML =
      '<p class="lead" data-reveal>' + esc(q.intro) + '</p>' +
      '<div class="console" data-reveal>' +
        '<div class="console__presets" role="group" aria-label="' + esc(q.title) + '">' +
          q.presets.map(function (p, i) {
            return '<button type="button" class="chip" data-preset="' + i + '" aria-pressed="false">' + esc(p.label) + '</button>';
          }).join('') +
        '</div>' +
        '<pre class="console__sql" id="sqlPre" aria-label="SQL"><code id="sqlText"></code><span class="caret" aria-hidden="true"></span></pre>' +
        '<div class="console__out">' +
          '<div class="console__result" id="sqlResult"><p class="console__empty">' + esc(q.empty) + '</p></div>' +
          '<p class="console__meta" id="sqlMeta" aria-live="polite"></p>' +
        '</div>' +
      '</div>';
  }

  function renderProjects() {
    var p = L.projects;
    var icon = '<svg class="prow__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>';
    $('#projectsBody').innerHTML =
      '<p class="lead" data-reveal>' + esc(p.intro) + '</p>' +
      '<ol class="plist" data-reveal>' +
        p.items.map(function (it) {
          return '<li class="prow">' +
            '<a class="prow__link" href="' + esc(it.url) + '" target="_blank" rel="noopener" aria-label="' + esc(it.name + ': ' + p.open) + '">' +
              '<span class="prow__main"><span class="prow__name">' + esc(it.name) + '</span>' +
              '<span class="prow__desc">' + esc(it.desc) + '</span></span>' +
              '<span class="prow__stack">' + it.stack.map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('') + '</span>' +
              icon +
            '</a>' +
          '</li>';
        }).join('') +
      '</ol>';
  }

  function renderEducation() {
    var e = L.education;
    $('#educationBody').innerHTML =
      '<ul class="edu" data-reveal>' +
        e.items.map(function (it) {
          return '<li class="edu__item"><span class="edu__school">' + esc(it.school) + '</span>' +
            '<span class="edu__degree">' + esc(it.degree) + '</span>' +
            '<span class="edu__period">' + esc(it.period) + '</span></li>';
        }).join('') +
      '</ul>' +
      '<h3 class="subhead" data-reveal>' + esc(e.certsTitle) + '</h3>' +
      '<ul class="certs" data-reveal>' + e.certs.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>';
  }

  function renderContact() {
    var c = L.contact;
    var m = D.meta;
    $('#contactBody').innerHTML =
      '<h3 class="contact__heading" data-reveal>' + esc(c.heading) + '</h3>' +
      '<p class="lead" data-reveal>' + esc(c.text) + '</p>' +
      '<a class="contact__email" href="mailto:' + esc(m.email) + '" data-reveal>' + esc(m.email) + '</a>' +
      '<div class="contact__actions" data-reveal>' +
        '<button type="button" class="btn btn--primary" id="copyEmail">' + esc(c.copy) + '</button>' +
        '<a class="btn" href="' + esc(m.links.linkedin) + '" target="_blank" rel="noopener">' + esc(c.linkedin) + '</a>' +
        '<a class="btn" href="' + esc(m.links.github) + '" target="_blank" rel="noopener">' + esc(c.github) + '</a>' +
        '<a class="btn" href="' + esc(m.cv) + '" download>' + esc(c.cv) + '</a>' +
      '</div>';
  }

  function renderSwatches() {
    var box = $('#swatches');
    if (!box) return;
    box.innerHTML = D.accents.map(function (a) {
      return '<button type="button" class="swatch" data-set="accent" data-value="' + a.id + '"' +
        ' style="--sw:' + a.dark + ';--swl:' + a.light + '" aria-label="' + esc(a[S.lang] || a.en) + '" aria-pressed="false"></button>';
    }).join('');
  }

  /* ---------------------------------------------------------------------
     Revelação ao rolar e navegação ativa
     ------------------------------------------------------------------ */
  function observeReveals(settleVisible) {
    var els = $$('[data-reveal]:not(.in)');
    var instant = !motionOn() || !revealIO;
    els.forEach(function (el) {
      if (instant || (settleVisible && el.getBoundingClientRect().top < window.innerHeight)) {
        el.classList.add('in');
        return;
      }
      revealIO.observe(el);
    });
  }

  function initNavSpy() {
    if (!('IntersectionObserver' in window)) return;
    var links = $$('.topnav a');
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('active'); });
        var a = byId[en.target.id];
        if (a) a.classList.add('active');
      });
    }, { rootMargin: '-35% 0px -60% 0px', threshold: 0 });
    $$('main section[id]').forEach(function (s) { io.observe(s); });
  }

  /* ---------------------------------------------------------------------
     Consulta SQL
     ------------------------------------------------------------------ */
  var typingTimer = 0;
  var queryIO = null;

  function highlight(sql) {
    return esc(sql)
      .replace(/('[^']*')/g, '<i>$1</i>')
      .replace(/\b(SELECT|FROM|WHERE|ORDER BY|DESC|ASC|AS|COUNT)\b/g, '<b>$1</b>');
  }

  function runPreset(i) {
    var p = L.query.presets[i];
    if (!p) return;
    var pre = $('#sqlPre'), code = $('#sqlText'), res = $('#sqlResult'), meta = $('#sqlMeta');
    if (!pre) return;
    $$('[data-preset]').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.getAttribute('data-preset') === i)); });
    clearTimeout(typingTimer);
    res.innerHTML = '';
    meta.textContent = L.query.running;
    code.textContent = '';
    pre.classList.add('typing');

    var sql = p.sql;
    var total = sql.length;
    var perChar = motionOn() ? Math.min(16, 650 / total) : 0;
    var k = 0;

    function showResult() {
      res.innerHTML = '<table><thead><tr>' +
        p.columns.map(function (c) { return '<th scope="col">' + esc(c) + '</th>'; }).join('') +
        '</tr></thead><tbody>' +
        p.rows.map(function (r, ri) {
          return '<tr style="--d:' + ri + '">' + r.map(function (v) { return '<td>' + esc(v) + '</td>'; }).join('') + '</tr>';
        }).join('') +
        '</tbody></table>';
      meta.textContent = L.query.rows(p.rows.length);
    }
    function step() {
      k = perChar ? k + 1 : total;
      code.textContent = sql.slice(0, k);
      if (k < total) { typingTimer = setTimeout(step, perChar); return; }
      code.innerHTML = highlight(sql);
      pre.classList.remove('typing');
      typingTimer = setTimeout(showResult, motionOn() ? 220 : 0);
    }
    step();
  }

  function armQuery() {
    clearTimeout(typingTimer);
    if (queryIO) queryIO.disconnect();
    var sec = $('#query');
    if (!sec || !('IntersectionObserver' in window)) return;
    queryIO = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) {
        queryIO.disconnect();
        runPreset(0);
      }
    }, { threshold: 0.3 });
    queryIO.observe(sec);
  }

  /* ---------------------------------------------------------------------
     Idioma e tema
     ------------------------------------------------------------------ */
  function setLang(code, animate) {
    if (!D.i18n[code] || code === S.lang) return;
    S.lang = code;
    L = D.i18n[code];
    save();
    var main = $('#main');
    function finish() {
      renderAll();
      observeReveals(true);
      armQuery();
      main.classList.remove('swap');
      if (field) field.pulse();
    }
    if (animate && motionOn()) {
      main.classList.add('swap');
      setTimeout(finish, 190);
    } else {
      finish();
    }
  }

  function setTheme(next, origin) {
    function run() { S.theme = next; save(); apply(); }
    if (effTheme() === (next === 'system' ? (mqDark.matches ? 'dark' : 'light') : next) || !document.startViewTransition || !motionOn()) {
      run();
      return;
    }
    var x = window.innerWidth - 40, y = 32;
    if (origin && origin.getBoundingClientRect) {
      var r = origin.getBoundingClientRect();
      x = r.left + r.width / 2;
      y = r.top + r.height / 2;
    }
    var radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    var vt = document.startViewTransition(run);
    vt.ready.then(function () {
      html.animate(
        { clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + radius + 'px at ' + x + 'px ' + y + 'px)'] },
        { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)', pseudoElement: '::view-transition-new(root)' }
      );
    }).catch(function () { /* sem transição */ });
  }

  /* ---------------------------------------------------------------------
     Painel de configurações
     ------------------------------------------------------------------ */
  var sheet = $('#settings');
  var lastFocus = null;
  var closeTimer = 0;

  function openSheet() {
    clearTimeout(closeTimer);
    lastFocus = document.activeElement;
    sheet.hidden = false;
    body.classList.add('no-scroll');
    requestAnimationFrame(function () {
      sheet.classList.add('open');
      var f = $('.sheet__panel [data-close]');
      if (f) f.focus();
    });
  }
  function closeSheet() {
    if (sheet.hidden) return;
    sheet.classList.remove('open');
    body.classList.remove('no-scroll');
    closeTimer = setTimeout(function () {
      sheet.hidden = true;
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }, motionOn() ? 400 : 0);
  }
  function resetSettings() {
    S = defaults();
    L = D.i18n[S.lang];
    save();
    apply();
    renderAll();
    observeReveals(true);
    armQuery();
  }

  /* ---------------------------------------------------------------------
     Aviso curto e cópia de e-mail
     ------------------------------------------------------------------ */
  var toastTimer = 0;
  function toast(msg, action, onAction, ms) {
    var el = $('#toast');
    el.textContent = '';
    el.appendChild(document.createTextNode(msg));
    if (action) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'toast__btn';
      b.textContent = action;
      b.addEventListener('click', function () { el.classList.remove('show'); onAction(); });
      el.appendChild(b);
    }
    el.classList.toggle('has-action', !!action);
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, ms || 1800);
  }
  function offerEffects() {
    toast(L.settings.calmNotice, L.settings.calmAction, function () {
      S.fx.field = true; S.fx.lens = true; S.fx.motion = true;
      save();
      apply();
    }, 9000);
  }
  function copyEmail() {
    var em = D.meta.email;
    function done() { toast(L.contact.copied); }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = em;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { /* sem suporte */ }
      ta.remove();
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(em).then(done, fallback);
    else fallback();
  }

  /* ---------------------------------------------------------------------
     Campo de pontos do hero (canvas)
     ------------------------------------------------------------------ */
  function createField(canvas) {
    if (!canvas || !canvas.getContext) return null;
    var ctx = canvas.getContext('2d');
    var host = canvas.parentElement;
    var SP = 26, R = 200, LIFE = 1400;
    var w = 0, h = 0, dots = [], px = -1e4, py = -1e4, raf = 0;
    var enabled = true, visible = true, ripples = [];
    var cDot = [11, 14, 23], cAcc = [255, 106, 43], base = 0.17;

    function resize() {
      var r = host.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width));
      h = Math.max(1, Math.round(r.height));
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      var cols = Math.ceil(w / SP) + 1, rows = Math.ceil(h / SP) + 1;
      var ox = (w - (cols - 1) * SP) / 2, oy = (h - (rows - 1) * SP) / 2;
      for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
          var x = ox + i * SP, y = oy + j * SP;
          dots.push({ hx: x, hy: y, x: x, y: y, vx: 0, vy: 0 });
        }
      }
      kick();
    }
    function refreshColors() {
      var cs = getComputedStyle(html);
      cDot = hexRgb(cs.getPropertyValue('--field-dot'), cDot);
      cAcc = hexRgb(cs.getPropertyValue('--accent'), cAcc);
      base = html.getAttribute('data-theme-effective') === 'dark' ? 0.22 : 0.17;
      kick();
    }
    function kick() { if (enabled && visible && !raf) raf = requestAnimationFrame(frame); }
    function frame(now) {
      raf = 0;
      ctx.clearRect(0, 0, w, h);
      ripples = ripples.filter(function (rp) { return now - rp.t < LIFE; });
      var energy = 0, hot = [];
      ctx.fillStyle = 'rgba(' + cDot[0] + ',' + cDot[1] + ',' + cDot[2] + ',' + base + ')';
      ctx.beginPath();
      for (var n = 0; n < dots.length; n++) {
        var d = dots[n];
        var dx = d.hx - px, dy = d.hy - py;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var inf = dist < R ? 1 - dist / R : 0;
        if (inf > 0) inf = inf * inf * (3 - 2 * inf);
        var tx = d.hx, ty = d.hy;
        if (inf > 0) { var k = 24 * inf / (dist || 1); tx += dx * k; ty += dy * k; }
        var glow = 0;
        for (var q = 0; q < ripples.length; q++) {
          var rp = ripples[q];
          var age = (now - rp.t) / LIFE;
          var ex = d.hx - rp.x, ey = d.hy - rp.y;
          var ed = Math.sqrt(ex * ex + ey * ey);
          var dd = Math.abs(ed - age * 640);
          if (dd < 56) {
            var g = (1 - dd / 56) * (1 - age);
            if (g > glow) glow = g;
            var k2 = 12 * g / (ed || 1);
            tx += ex * k2; ty += ey * k2;
          }
        }
        d.vx += (tx - d.x) * 0.16; d.vy += (ty - d.y) * 0.16;
        d.vx *= 0.70; d.vy *= 0.70;
        d.x += d.vx; d.y += d.vy;
        var av = Math.abs(d.vx) + Math.abs(d.vy);
        if (av > energy) energy = av;
        var e = inf > glow ? inf : glow;
        if (e < 0.015) {
          ctx.moveTo(d.x + 1.1, d.y);
          ctx.arc(d.x, d.y, 1.1, 0, 6.2832);
        } else {
          hot.push(d.x, d.y, e);
        }
      }
      ctx.fill();
      for (var i = 0; i < hot.length; i += 3) {
        var ee = hot[i + 2];
        var m = ee > 0.75 ? 1 : ee / 0.75;
        var cr = Math.round(cDot[0] + (cAcc[0] - cDot[0]) * m);
        var cg = Math.round(cDot[1] + (cAcc[1] - cDot[1]) * m);
        var cb = Math.round(cDot[2] + (cAcc[2] - cDot[2]) * m);
        ctx.fillStyle = 'rgba(' + cr + ',' + cg + ',' + cb + ',' + (base + ee * (1 - base)).toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(hot[i], hot[i + 1], 1.1 + ee * 2.6, 0, 6.2832);
        ctx.fill();
      }
      if (enabled && visible && (ripples.length || energy > 0.02)) raf = requestAnimationFrame(frame);
    }
    function local(e) {
      var r = canvas.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    }
    host.addEventListener('pointermove', function (e) {
      var p = local(e); px = p[0]; py = p[1]; kick();
    }, { passive: true });
    host.addEventListener('pointerleave', function () { px = py = -1e4; kick(); });
    host.addEventListener('pointerdown', function (e) {
      var p = local(e);
      ripples.push({ x: p[0], y: p[1], t: performance.now() });
      kick();
    }, { passive: true });

    if ('ResizeObserver' in window) {
      var rt = 0;
      new ResizeObserver(function () { clearTimeout(rt); rt = setTimeout(resize, 80); }).observe(host);
    } else {
      window.addEventListener('resize', resize);
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible) kick(); else if (raf) { cancelAnimationFrame(raf); raf = 0; }
      }).observe(host);
    }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { if (raf) cancelAnimationFrame(raf); raf = 0; } else kick();
    });

    resize();
    return {
      refreshColors: refreshColors,
      setEnabled: function (on) {
        enabled = on;
        if (!on) { if (raf) cancelAnimationFrame(raf); raf = 0; ctx.clearRect(0, 0, w, h); }
        else kick();
      },
      pulse: function () {
        ripples.push({ x: w / 2, y: h / 2, t: performance.now() });
        for (var i = 0; i < dots.length; i++) {
          dots[i].vx += (Math.random() - 0.5) * 6;
          dots[i].vy += (Math.random() - 0.5) * 6;
        }
        kick();
      }
    };
  }

  /* ---------------------------------------------------------------------
     Lente (cursor)
     ------------------------------------------------------------------ */
  function createLens(root) {
    if (!root) return null;
    var dot = root.querySelector('.lens__dot');
    var ring = root.querySelector('.lens__ring');
    var SEL = 'a[href], button:not([disabled]), [role="button"], [role="switch"], [role="radio"]';
    var enabled = false, shown = false, down = false, target = null, raf = 0;
    var x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y;

    function loop() {
      raf = 0;
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      if (target) {
        var r = target.getBoundingClientRect();
        var pad = 5;
        var br = parseFloat(getComputedStyle(target).borderTopLeftRadius) || 8;
        ring.style.width = (r.width + pad * 2) + 'px';
        ring.style.height = (r.height + pad * 2) + 'px';
        ring.style.borderRadius = Math.min(999, br + pad) + 'px';
        ring.style.transform = 'translate(' + (r.left - pad) + 'px,' + (r.top - pad) + 'px)' + (down ? ' scale(.97)' : '');
      } else {
        var sz = 34;
        ring.style.width = sz + 'px';
        ring.style.height = sz + 'px';
        ring.style.borderRadius = '999px';
        ring.style.transform = 'translate(' + (x - sz / 2) + 'px,' + (y - sz / 2) + 'px) scale(' + (down ? 0.7 : 1) + ')';
      }
      if (enabled && (target || Math.abs(tx - x) > 0.2 || Math.abs(ty - y) > 0.2)) raf = requestAnimationFrame(loop);
    }
    function kick() { if (enabled && !raf) raf = requestAnimationFrame(loop); }

    document.addEventListener('pointermove', function (e) {
      if (!enabled || e.pointerType !== 'mouse') return;
      tx = e.clientX; ty = e.clientY;
      dot.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
      if (!shown) { shown = true; x = tx; y = ty; root.classList.remove('hidden'); }
      kick();
    }, { passive: true });
    document.addEventListener('pointerover', function (e) {
      if (!enabled) return;
      var el = e.target && e.target.closest ? e.target.closest(SEL) : null;
      target = el || null;
      ring.classList.toggle('lock', !!target);
      kick();
    });
    document.addEventListener('pointerdown', function (e) { if (e.pointerType === 'mouse') { down = true; kick(); } });
    document.addEventListener('pointerup', function () { down = false; kick(); });
    html.addEventListener('mouseleave', function () { shown = false; root.classList.add('hidden'); });
    window.addEventListener('scroll', function () { if (target) kick(); }, { passive: true });

    return {
      setEnabled: function (on) {
        enabled = on;
        if (!on) {
          target = null; ring.classList.remove('lock');
          if (raf) cancelAnimationFrame(raf); raf = 0;
          root.classList.add('hidden');
        } else if (shown) {
          root.classList.remove('hidden');
          kick();
        }
      }
    };
  }

  /* ---------------------------------------------------------------------
     Paralaxe suave do hero
     ------------------------------------------------------------------ */
  function initParallax() {
    var hero = $('.hero');
    hero.addEventListener('pointermove', function (e) {
      if (!motionOn() || e.pointerType !== 'mouse') return;
      var r = hero.getBoundingClientRect();
      var nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      var ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
      hero.style.setProperty('--px', nx.toFixed(3));
      hero.style.setProperty('--py', ny.toFixed(3));
    }, { passive: true });
    hero.addEventListener('pointerleave', function () {
      hero.style.setProperty('--px', '0');
      hero.style.setProperty('--py', '0');
    });
  }

  /* ---------------------------------------------------------------------
     Eventos globais
     ------------------------------------------------------------------ */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-set], [data-close], [data-reset], [data-preset], .langswitch button, #themeToggle, #settingsOpen, #copyEmail');
    if (!el) return;
    if (el.id === 'settingsOpen') { openSheet(); return; }
    if (el.hasAttribute('data-close')) { closeSheet(); return; }
    if (el.hasAttribute('data-reset')) { resetSettings(); return; }
    if (el.hasAttribute('data-preset')) { runPreset(+el.getAttribute('data-preset')); return; }
    if (el.id === 'copyEmail') { copyEmail(); return; }
    if (el.id === 'themeToggle') { setTheme(effTheme() === 'dark' ? 'light' : 'dark', el); return; }
    if (el.classList.contains('langswitch') || (el.parentElement && el.parentElement.classList.contains('langswitch'))) {
      setLang(el.getAttribute('data-lang'), true);
      return;
    }
    if (el.hasAttribute('data-set')) {
      var key = el.getAttribute('data-set');
      if (key === 'lang') { setLang(el.getAttribute('data-value'), true); return; }
      if (key === 'theme') { setTheme(el.getAttribute('data-value'), el); return; }
      if (key.indexOf('fx.') === 0) {
        var k = key.slice(3);
        S.fx[k] = !S.fx[k];
      } else {
        S[key] = el.getAttribute('data-value');
      }
      save();
      apply();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (sheet.hidden) return;
    if (e.key === 'Escape') { closeSheet(); return; }
    if (e.key === 'Tab') {
      var f = $$('.sheet__panel button:not([disabled]), .sheet__panel a[href]');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------------------------------------------------------------------
     Início
     ------------------------------------------------------------------ */
  function init() {
    if ('IntersectionObserver' in window) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); revealIO.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    }
    field = createField($('#field'));
    lens = createLens($('#lens'));
    apply();
    renderAll();
    observeReveals(false);
    armQuery();
    initNavSpy();
    initParallax();

    var topbar = $('.topbar');
    function onScroll() { topbar.classList.toggle('scrolled', window.scrollY > 8); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var onMq = function () { apply(); };
    if (mqDark.addEventListener) { mqDark.addEventListener('change', onMq); mqFine.addEventListener('change', onMq); }
    else { mqDark.addListener(onMq); mqFine.addListener(onMq); }

    setTimeout(function () { $('#main').classList.add('settled'); }, 2600);
    if (!hadSaved && mqMotion.matches) setTimeout(offerEffects, 900);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
