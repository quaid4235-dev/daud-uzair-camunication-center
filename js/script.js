(() => {
  'use strict';

  /* Urdu strings. English is read from the HTML itself on first run. */
  const UR = {
    skip: 'مواد پر جائیں', theme: 'روشن یا تاریک تھیم', h_inc: 'ہماری خدمات میں شامل:', st1: 'خدمات', st2: 'مقامات', st3: 'فون نمبر',
    brand: 'عزیر اینڈ داود کمیونیکیشن سینٹرز',
    n_home: 'ہوم', n_services: 'خدمات', n_about: 'ہمارے بارے میں', n_locations: 'مقامات', n_contact: 'رابطہ',
    lang_label: 'زبان', menu: 'مینو', cta_contact: 'رابطہ کریں',
    h_tag: 'آپ کی ہر آن لائن اور سرکاری کام کا آسان حل!',
    h_btn1: 'ہماری خدمات دیکھیں',
    p_head: 'ایک ہی جگہ پر', p_online: 'آن لائن خدمات', p_gov: 'سرکاری دستاویزات',
    p_nadra: 'نادرا سے متعلق خدمات', p_travel: 'سفر اور ٹکٹنگ',
    sv_title: 'ہماری خدمات',
    s1t: 'ہر قسم کی آن لائن اپلائی', s1d: 'آن لائن فارم اور درخواستیں بھرنے اور جمع کرانے میں مدد۔',
    s2t: 'پاسپورٹ کے لیے درخواست', s2d: 'پاسپورٹ کی درخواست کے فارم میں معاونت۔',
    s3t: 'گلف ائیر لائنز کے ٹکٹ', s3d: 'گلف ائیر لائنز کے ٹکٹ کی سہولت۔',
    s4t: 'ایزی پیسہ & جاز کیش سروسز', s4d: 'موبائل والٹ اور ادائیگی کی خدمات۔',
    s5t: 'خوبصورت فوٹو ایڈیٹنگ اور فریم', s5d: 'تصاویر کی ایڈیٹنگ اور فریمنگ۔',
    s6t: 'فارم B', s6d: 'فارم B کے لیے معاونت۔',
    s7t: 'برتھ اور ڈیتھ سرٹیفکیٹ', s7d: 'پیدائش اور وفات کے سرٹیفکیٹ کے لیے درخواست۔',
    s8t: 'FRC — فیملی رجسٹریشن سرٹیفکیٹ', s8d: 'فیملی رجسٹریشن سرٹیفکیٹ کے لیے معاونت۔',
    s9t: 'شناختی کارڈ کی تجدید', s9d: 'شناختی کارڈ کی تجدید میں معاونت۔',
    s10t: 'ڈومیسائل بنوانا', s10d: 'ڈومیسائل کی درخواست میں معاونت۔',
    s11t: 'ہر قسم کی پروفیشنل ڈیزائننگ', s11d: 'پرنٹ اور ڈیجیٹل ضروریات کے لیے ڈیزائننگ۔',
    a_stmt: 'آن لائن، سرکاری، نادرا اور سفری خدمات ایک ہی جگہ پر۔',
    a_note: 'عزیر اینڈ داود کمیونیکیشن سینٹرز میرعلی اور رزمک میں خدمات فراہم کرتا ہے۔',
    pr_title: 'مالکان', role: 'مالک', n_dawood: 'داود وزیر', n_uzair: 'عزیر',
    alt_d: 'داود وزیر کی تصویر', alt_u: 'عزیر کی تصویر',
    ceo_l: 'چیف ایگزیکٹو آفیسر', ceo_n: 'انجینئر عبد الودود خان وزیر',
    w_title: 'ہمیں کیوں منتخب کریں',
    w1: 'متعدد خدمات ایک ہی جگہ', w2: 'میرعلی اور رزمک میں موجودگی',
    w3: 'آن لائن اور سرکاری خدمات', w4: 'ٹریول اور ٹکٹنگ سہولت',
    l_title: 'ہماری موجودگی', l1: 'میرعلی', l2: 'رزمک',
    c_title: 'آج ہی رابطہ کریں',
    c_phone: 'فون', c_call: 'کال کریں', c_wa: 'واٹس ایپ', c_copy: 'کاپی', c_copied: 'نمبر کاپی ہو گیا',
    cta_t: 'اپنے ضروری آن لائن اور سرکاری کام کے لیے آج ہی رابطہ کریں۔', cta_call: 'ابھی کال کریں',
    f_loc: 'مقامات', f_phone: 'فون', f_nav: 'نیویگیشن', f_rights: 'جملہ حقوق محفوظ ہیں۔'
  };
  const EN_EXTRA = { c_phone: 'Phone', c_call: 'Call', c_wa: 'WhatsApp', c_copy: 'Copy', c_copied: 'Number copied' };
  const META = {
    en: {
      title: 'Uzair & Daud Communication Centers | Mir Ali & Razmak',
      desc: 'Online applications, government documentation, NADRA-related, passport and travel services in Mir Ali and Razmak.'
    },
    ur: {
      title: 'عزیر اینڈ داود کمیونیکیشن سینٹرز | میرعلی اور رزمک',
      desc: 'آن لائن اپلائی، سرکاری دستاویزات، نادرا، پاسپورٹ اور سفری خدمات — میرعلی اور رزمک میں۔'
    }
  };

  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  let lang = 'ur';
  try { lang = localStorage.getItem('lang') || 'ur'; } catch (e) {}
  if (lang !== 'ur' && lang !== 'en') lang = 'ur';

  /* ---------- phone rows (built here so labels follow the language) ---------- */
  const fmt = n => `${n.slice(0, 4)} ${n.slice(4)}`;
  $$('.phones li').forEach(li => {
    const n = li.dataset.num, intl = li.dataset.intl;
    li.innerHTML =
      `<span class="num"><small data-i18n="c_phone">Phone</small>${fmt(n)}</span>
       <span class="row-actions">
         <a class="chip-b main" href="tel:+${intl}"><svg class="ico"><use href="#i-phone"/></svg><span data-i18n="c_call">Call</span></a>
         <a class="chip-b" href="https://wa.me/${intl}" target="_blank" rel="noopener"><svg class="ico"><use href="#i-chat"/></svg><span data-i18n="c_wa">WhatsApp</span></a>
         <button class="chip-b" type="button" data-copy="${n}"><svg class="ico"><use href="#i-copy"/></svg><span data-i18n="c_copy">Copy</span></button>
       </span>`;
  });

  /* ---------- i18n ---------- */
  const items = $$('[data-i18n]');
  const attrItems = $$('[data-i18n-attr]');
  items.forEach(el => { el._en = el.textContent.trim(); });
  attrItems.forEach(el => {
    el._attrs = el.dataset.i18nAttr.split(',').map(p => {
      const [attr, key] = p.split(':');
      return { attr, key, en: el.getAttribute(attr) };
    });
  });
  const T = (key, l, en) => (l === 'ur' ? UR[key] : (EN_EXTRA[key] || en));

  function setLang(l, persist) {
    lang = l;
    root.lang = l;
    root.dir = l === 'ur' ? 'rtl' : 'ltr';
    items.forEach(el => { el.textContent = l === 'ur' ? (UR[el.dataset.i18n] ?? el._en) : (EN_EXTRA[el.dataset.i18n] ?? el._en); });
    attrItems.forEach(el => el._attrs.forEach(a => el.setAttribute(a.attr, l === 'ur' ? UR[a.key] : a.en)));
    document.title = META[l].title;
    const d = $('meta[name="description"]'); if (d) d.content = META[l].desc;
    const ogT = $('meta[property="og:title"]'); if (ogT) ogT.content = l === 'ur' ? UR.brand : 'Uzair & Daud Communication Centers';
    const ogD = $('meta[property="og:description"]'); if (ogD) ogD.content = l === 'ur' ? UR.a_stmt : 'Online, government, communication and travel-related services in one place. Mir Ali & Razmak.';
    $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    $('.brand')?.setAttribute('aria-label', l === 'ur' ? 'ہوم' : 'Home');
    if (persist) { try { localStorage.setItem('lang', l); } catch (e) {} }
    root.classList.add('ready');
    document.dispatchEvent(new Event('langchange'));
  }
  $$('[data-lang]').forEach(b => b.addEventListener('click', () => { setLang(b.dataset.lang, true); closeMenu(); }));
  setLang(lang, false);
  const yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- mobile menu ---------- */
  const menuBtn = $('#menuBtn'), nav = $('#nav');
  function closeMenu() { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(); menuBtn.focus(); } });
  document.addEventListener('click', e => { if (!e.target.closest('#hdr')) closeMenu(); });
  matchMedia('(min-width:961px)').addEventListener('change', closeMenu);

  /* ---------- header state + active link ---------- */
  const header = $('#hdr');
  const onScroll = () => header.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const links = $$('.links a[href^="#"]');
  const sections = links.map(a => $(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        links.forEach(a => a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + en.target.id)));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));

    const reveal = new IntersectionObserver((entries, o) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); o.unobserve(en.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    $$('.rv').forEach(el => reveal.observe(el));
  } else {
    $$('.rv').forEach(el => el.classList.add('in'));
  }

  /* ---------- copy number ---------- */
  const toast = $('#toast'); let tt;
  function say(msg) {
    toast.textContent = msg; toast.classList.add('show');
    clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('show'), 1800);
  }
  document.addEventListener('click', async e => {
    const b = e.target.closest('[data-copy]'); if (!b) return;
    const n = b.dataset.copy;
    try { await navigator.clipboard.writeText(n); }
    catch (err) {
      const t = document.createElement('textarea'); t.value = n; t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (e2) {} t.remove();
    }
    say(T('c_copied', lang, 'Number copied'));
  });

  /* ---------- theme ---------- */
  $('#theme').addEventListener('click', () => {
    const t = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = t;
    try { localStorage.setItem('theme', t); } catch (e) {}
    const m = $('meta[name="theme-color"]'); if (m) m.content = t === 'dark' ? '#070b14' : '#f6f7fb';
  });

  /* ---------- rotating service line ---------- */
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rot = $('#rot'), keys = ['s1t', 's2t', 's3t', 's7t', 's9t', 's10t'];
  const enOf = {}; items.forEach(el => { if (/^s\d+t$/.test(el.dataset.i18n)) enOf[el.dataset.i18n] = el._en; });
  let ri = 0;
  const word = () => (lang === 'ur' ? UR : enOf)[keys[ri % keys.length]];
  const showWord = () => { rot.textContent = word(); };
  document.addEventListener('langchange', showWord);
  if (!reduce) setInterval(() => {
    rot.classList.add('out');
    setTimeout(() => { ri++; showWord(); rot.classList.remove('out'); }, 350);
  }, 2600);

  /* ---------- counters + card spotlight ---------- */
  const count = el => {
    const n = +el.dataset.n; if (reduce) { el.textContent = n; return; }
    let i = 0; const t = setInterval(() => { el.textContent = ++i; if (i >= n) clearInterval(t); }, 1100 / n);
  };
  const stats = $('.stats');
  if ('IntersectionObserver' in window) new IntersectionObserver((es, o) => es.forEach(e => {
    if (e.isIntersecting) { $$('[data-n]', e.target).forEach(count); o.disconnect(); }
  }), { threshold: .3 }).observe(stats); else $$('[data-n]').forEach(count);
  $$('.spot').forEach(c => c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--x', e.clientX - r.left + 'px'); c.style.setProperty('--y', e.clientY - r.top + 'px');
  }));
})();
