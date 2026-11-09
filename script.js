var $ = function (s) { return document.querySelector(s); };
var get = function (n) {
  return typeof window[n] === 'undefined' ? '' : window[n];
};

function fixLink(v) {
  v = String(v || '').trim();
  if (!v) return '';
  return /^https?:\/\//i.test(v) ? v : 'https://' + v;
}

function isImage(v) {
  return /^(https?:|data:|\/|\.)|\.(png|jpe?g|webp|gif|svg)$/i.test(v);
}

function isVideo(v) {
  return /^data:video\/|\.(mp4|webm|ogv|mov|m4v)(\?.*)?$/i.test(v);
}

function list(name) {
  var v = get(name);
  if (Array.isArray(v)) return v;
  return v ? [v] : [];
}

function el(tag, cls, text) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function external(a, href) {
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  return a;
}

function picture(src, cls) {
  var img = el('img', cls);
  img.src = src;
  img.alt = '';
  img.loading = 'lazy';
  img.onerror = function () { img.remove(); };
  return img;
}

// TEKS DASAR
var owner = String(get('Nameowner') || 'Malix');
document.title = owner;
$('#drName').textContent = owner;
$('#drFoot').textContent = '\u00A9 ' + owner;
$('#foot').textContent = '\u00A9 ' + owner;

var title = String(get('Judul') || '').trim();
$('#homeName').textContent = title;
$('#homeName').hidden = !title;

var desc = String(get('Deskripsi') || '').trim();
$('#desc').textContent = desc;
$('#desc').hidden = !desc;

// LOGO
var logo = String(get('Logo') || '').trim();

if (logo) {
  $('#logo').src = logo;
  $('#drawerLogo').src = logo;
} else {
  $('#logo').hidden = true;
  $('#logoBtn').hidden = true;
}

// BACKGROUND MUSIC
var bg = String(get('Background') || '').trim();
var bgBox = $('#bg');

if (bg && isVideo(bg)) {
  var music = el('audio');

  music.id = 'backgroundMusic';
  music.src = bg;
  music.loop = true;
  music.volume = 0.5;
  music.preload = 'auto';
  music.controls = false;
  music.setAttribute('aria-hidden', 'true');
  music.style.display = 'none';

  document.body.appendChild(music);

  var musicStarted = false;

  function startBackgroundMusic() {
    if (musicStarted && !music.paused) return;

    var attempt = music.play();

    if (attempt && typeof attempt.then === 'function') {
      attempt.then(function () {
        musicStarted = true;
      }).catch(function () {
        // Autoplay diblokir browser.
        // Akan dicoba kembali saat pengunjung berinteraksi.
      });
    }
  }

  // Coba autoplay ketika website dibuka.
  startBackgroundMusic();

  // Fallback jika autoplay diblokir browser.
  ['pointerdown', 'touchstart', 'keydown'].forEach(function (eventName) {
    document.addEventListener(eventName, startBackgroundMusic, {
      once: true,
      passive: true
    });
  });

  // Memastikan musik tetap dicoba setelah halaman dipulihkan.
  window.addEventListener('pageshow', function () {
    if (music.paused) startBackgroundMusic();
  });

} else if (bg && isImage(bg)) {

  var probe = new Image();

  probe.onload = function () {
    bgBox.style.backgroundImage =
      'url("' + bg.replace(/["\\]/g, '') + '")';

    bgBox.classList.add('on');
  };

  probe.src = bg;

} else if (bg) {

  bgBox.style.background = bg;
  bgBox.classList.add('on');

}

// ICON LINKS
var ICONS = {
  wa: '<path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 19z"/><path d="M9 9c0 3 3 6 6 6l1.2-1.4-2-1-1 .7c-.8-.4-1.6-1.2-2-2l.7-1-1-2z"/>',

  ig: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r=".6"/>',

  tt: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.4 2 4 4.5 4.2"/>',

  tg: '<path d="M21 3L3 10.5l6.5 2.2L12 20l3-4.5 5 3.5z"/><path d="M9.5 12.7L21 3"/>',

  dc: '<path d="M8 8c-2 .5-3.5 1.2-4.5 2-1 3-1.5 6-1 8 1.5 1.2 3 1.7 4.5 2l1-1.5M16 8c2 .5 3.5 1.2 4.5 2 1 3 1.5 6 1 8-1.5 1.2-3 1.7-4.5 2l-1-1.5M8 8c2.7-.8 5.3-.8 8 0M8.5 18.2c2.2.6 4.8.6 7 0"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/>',

  yt: '<rect x="3" y="6" width="18" height="12" rx="4"/><path d="M10 9.5v5l4.5-2.5z"/>',

  gh: '<path d="M9 19c-4 1.2-4-2-6-2.5M15 21v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.9 5.5 3.2 5.5 3.2a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.1 9.6c0 4.6 2.8 5.7 5.5 6a2.8 2.8 0 0 0-.8 2.2V21"/>',

  fb: '<path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3.5H9V21h3.5v-8.5H15L15.5 9h-3V6.8c0-.5.3-.8.8-.8H15z"/>',

  x: '<path d="M4 4l16 16M20 4L4 20"/>',

  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'
};

var SITES = [
  [/chat\.whatsapp\.com/i, 'WhatsApp Group', 'wa'],
  [/whatsapp\.com\/channel/i, 'WhatsApp Channel', 'wa'],
  [/whatsapp\.com|wa\.me/i, 'WhatsApp', 'wa'],
  [/instagram\.com/i, 'Instagram', 'ig'],
  [/tiktok\.com/i, 'TikTok', 'tt'],
  [/t\.me\/(\+|joinchat)/i, 'Telegram Group', 'tg'],
  [/t\.me|telegram\./i, 'Telegram', 'tg'],
  [/discord\./i, 'Discord', 'dc'],
  [/youtube\.com|youtu\.be/i, 'YouTube', 'yt'],
  [/github\.com/i, 'GitHub', 'gh'],
  [/facebook\.com|fb\.com/i, 'Facebook', 'fb'],
  [/(^|\/\/|\.)(x|twitter)\.com/i, 'X', 'x']
];

var customIcons = get('Ikon');

if (!customIcons || typeof customIcons !== 'object') {
  customIcons = {};
}

var seen = {};

list('Links').forEach(function (item) {
  var isObject = item && typeof item === 'object';

  var href = fixLink(
    isObject ? (item.link || item.url) : item
  );

  if (!href || seen[href]) return;

  seen[href] = true;

  var label = isObject ? (item.nama || item.name || '') : '';
  var key = 'link';

  SITES.some(function (site) {
    if (!site[0].test(href)) return false;

    key = site[2];
    label = label || site[1];

    return true;
  });

  if (!label) {
    label = href.replace(/^https?:\/\/(www\.)?/i, '').split(/[\/?#]/)[0];
    label = label.charAt(0).toUpperCase() + label.slice(1);
  }

  var custom = String(
    (isObject && (item.icon || item.ikon)) ||
    customIcons[key] || ''
  ).trim();

  var icon = el('span', 'ic');

  var svg =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
    ICONS[key] +
    '</svg>';

  icon.innerHTML = svg;

  if (custom && isImage(custom)) {
    var img = el('img');

    img.src = custom;
    img.alt = '';

    img.onerror = function () {
      icon.innerHTML = svg;
    };

    icon.innerHTML = '';
    icon.appendChild(img);

  } else if (custom) {
    icon.textContent = custom;
    icon.classList.add('emo');
  }

  var a = external(el('a', 'pill'), href);

  a.appendChild(icon);
  a.appendChild(el('span', '', label));

  $('#links').appendChild(a);
});

// PROJECTS
var projects = list('Projek');

if (!projects.length) {
  $('#projectList').innerHTML =
    '<p class="empty">Belum ada project.</p>';
}

projects.forEach(function (p) {
  var card = el('article', 'proj');

  if (p.Potprojek) {
    card.appendChild(picture(p.Potprojek, 'thumb'));
  }

  var body = el('div', 'body');

  if (p.Namaprojek) {
    body.appendChild(el('h3', '', p.Namaprojek));
  }

  if (p.Deskripsiprojek) {
    body.appendChild(el('p', '', p.Deskripsiprojek));
  }

  if (Array.isArray(p.Teknologi) && p.Teknologi.length) {
    var techs = el('div', 'techs');

    p.Teknologi.forEach(function (t) {
      techs.appendChild(el('span', '', t));
    });

    body.appendChild(techs);
  }

  var href = fixLink(p.Linkprojek);

  if (href) {
    body.appendChild(external(el('a', 'open', 'BUKA'), href));
  }

  card.appendChild(body);
  $('#projectList').appendChild(card);
});

// PRODUK
var products = list('Produk');

if (!products.length) {
  $('#productList').innerHTML =
    '<p class="empty">Belum ada produk.</p>';
}

products.forEach(function (p) {
  var card = el('article', 'prod');

  var pic = el('div', 'pic');

  if (p.Potproduk) {
    pic.appendChild(picture(p.Potproduk));
  }

  if (p.Label) {
    pic.appendChild(el('span', 'label', p.Label));
  }

  card.appendChild(pic);

  var body = el('div', 'pbody');

  if (p.Namaproduk) {
    body.appendChild(el('h3', '', p.Namaproduk));
  }

  if (p.Deskripsiproduk) {
    body.appendChild(el('p', '', p.Deskripsiproduk));
  }

  if (p.Harga !== undefined && p.Harga !== '') {
    var price = typeof p.Harga === 'number'
      ? 'Rp ' + p.Harga.toLocaleString('id-ID')
      : String(p.Harga);

    body.appendChild(el('div', 'price', price));
  }

  var buy = fixLink(p.Linkproduk);

  if (buy) {
    body.appendChild(external(el('a', 'buy', 'BELI'), buy));
  }

  card.appendChild(body);
  $('#productList').appendChild(card);
});

// MENU DAN HALAMAN
var rooms = ['home', 'projects', 'produk'];

var menuBtn = $('#menuBtn');
var drawer = $('#drawer');
var scrim = $('#scrim');

function setMenu(open) {
  drawer.classList.toggle('is-open', open);
  scrim.classList.toggle('is-open', open);

  drawer.setAttribute('aria-hidden', String(!open));
  menuBtn.setAttribute('aria-expanded', String(open));

  document.documentElement.classList.toggle('menu-open', open);
}

function show() {
  var page = location.hash.replace('#', '');

  if (rooms.indexOf(page) < 0) {
    page = 'home';
  }

  rooms.forEach(function (id) {
    $('#' + id).hidden = id !== page;
  });

  document.querySelectorAll('[data-nav]').forEach(function (a) {
    a.classList.toggle(
      'on',
      a.getAttribute('data-nav') === page
    );
  });

  setMenu(false);
  window.scrollTo(0, 0);
}

menuBtn.addEventListener('click', function () {
  setMenu(true);
});

$('#closeBtn').addEventListener('click', function () {
  setMenu(false);
});

scrim.addEventListener('click', function () {
  setMenu(false);
});

drawer.addEventListener('click', function (e) {
  if (e.target.closest('a')) {
    setMenu(false);
  }
});

$('#logoBtn').addEventListener('click', function () {
  location.hash = '#home';
  setMenu(false);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    setMenu(false);
  }
});

window.addEventListener('hashchange', show);

show();