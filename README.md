<div align="center">

# ⚡ MALIX

### Personal Portfolio · Simple Configuration · Automatic Rendering

</div>

<table align="right">
<tr>
<td><img src="https://files.catbox.moe/mid0hv.jpg" width="150"></td>
<td><img src="https://files.catbox.moe/nlvumf.jpg" width="150"></td>
<td><img src="https://files.catbox.moe/4tvb44.jpg" width="150"></td>
</tr>
</table>

<br clear="all">

**Malix** adalah template portfolio yang super simpel. Edit satu file config, semuanya langsung tampil. Deploy ke Vercel atau GitHub Pages gratis.

---

## ✨ Fitur

| Fitur | Keterangan |
|---|---|
| 🎛️ | **Satu file config** | Edit `config.js`, gak perlu nyentuh kode lain |
| 🔗 | **Link otomatis** | WhatsApp, Instagram, TikTok, Telegram, dll auto-detect dan auto-style |
| 🎨 | **Ikon custom** | Pakai foto sendiri atau emoji untuk setiap platform |
| 🧩 | **Projects & Produk** | Showcase karya dan jual produk (harga auto format Rupiah) |
| 🎬 | **Intro video** | Video pembuka yang bisa di-skip |
| 📱 | **Mobile-first** | Responsive di semua device, super ringan |

---

## 🚀 Quick Start

1. **Download**: Clone repo atau download ZIP
2. **Edit**: Buka `config.js` dan sesuaikan datamu
3. **Buka**: Klik `index.html` di browser
4. **Deploy**: Push ke GitHub → Vercel auto-deploy

---

## ⚙️ Konfigurasi

### 👤 Profil

```js
Nameowner = 'Nama Kamu';
Deskripsi = 'Halo, saya adalah...';
Poto = 'Malix/fotoku.jpg';
Potowelcome = 'Malix/banner.png';
Background = 'Malix/Background.png'; // atau '#ffe9a8'
Intro = 'Malix/intro.mp4'; // kosongkan untuk matikan
```

### 🔗 Social Links

Cukup tambahin link, platform auto-dideteksi:

```js
Links = [
  'https://whatsapp.com/channel/XXXXX',
  'https://chat.whatsapp.com/XXXXX',
  'https://t.me/username',
  'discord.gg/XXXXX',
  'instagram.com/username',
  'tiktok.com/@username',
  'github.com/username'
];
```

**Platform yang dikenali:** WhatsApp, Instagram, TikTok, Telegram, Discord, YouTube, GitHub, Facebook, X, dan lainnya.

**Custom nama & icon:**
```js
Links = [
  { 
    link: 'https://t.me/+XXXXX', 
    nama: 'Grup Telegram', 
    icon: 'Malix/foto2.png' 
  }
];
```

### 🎨 Custom Icons (Opsional)

```js
Ikon = {
  wa: 'Malix/fotoku.jpg',   // WhatsApp
  ig: 'Malix/fotoku.jpg',   // Instagram
  tt: 'Malix/fotoku.jpg',   // TikTok
  tg: 'Malix/fotoku.jpg',   // Telegram
  dc: 'Malix/fotoku.jpg',   // Discord
  yt: 'Malix/fotoku.jpg',   // YouTube
  gh: 'Malix/fotoku.jpg',   // GitHub
};
```

Cukup edit yang mau diubah, sisanya pakai default.

### 🧩 Projects

```js
Projek = [
  {
    Potprojek: 'Malix/project1.jpg',
    Namaprojek: 'Nama Project',
    Deskripsiprojek: 'Penjelasan singkat.',
    Teknologi: ['HTML', 'CSS', 'JavaScript'],
    Linkprojek: 'https://example.com'
  }
];
```

Semua field opsional. Buat tambah project, copy-paste blok di atas dan ubah isi.

### 🛍️ Produk

```js
Produk = [
  {
    Potproduk: 'Malix/produk1.jpg',
    Namaproduk: 'Nama Produk',
    Deskripsiproduk: 'Deskripsi.',
    Harga: 15000,        // Auto jadi "Rp 15.000"
    Label: 'BARU',       // Stiker pojok foto
    Linkproduk: 'https://wa.me/628xxxxxxxxxx'
  }
];
```

**Harga bisa:**
- Angka: `15000` → `Rp 15.000`
- Text: `'Gratis'`, `'Nego'`, `'Hub Admin'`

---

## 📁 Struktur File

```
.
├── index.html       # Halaman utama (jangan edit)
├── config.js        # ✅ EDIT INI untuk customize
├── style.css        # Styling (tidak perlu diedit)
├── vercel.json      # Deploy config
├── README.md        # Dokumentasi
└── Malix/           # Asset folder
    ├── Background.png
    ├── intro.mp4
    ├── fotoku.jpg
    ├── banner.png
    ├── project1.jpg
    └── produk1.jpg
```

---

## 💡 Tips

- **Huruf besar-kecil harus sama**: `Malix/Foto.jpg` ≠ `malix/foto.jpg`
- **Hindari spasi di nama file**: pakai `foto-profil.jpg`, bukan `foto profil.jpg`
- **Foto icon sebaiknya kotak (1:1)**: supaya tidak terpotong di lingkaran
- **Ukuran file < 1 MB per gambar**: supaya website cepat
- **Jangan taruh API key** atau data sensitif di `config.js`

---

## 🌐 Deploy

### Vercel (Recommended)

1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Klik **Add New → Project**
4. Pilih repository, atur **Framework Preset** ke `Other`
5. Klik **Deploy**
6. Selesai! Website live

Setiap push ke GitHub, otomatis redeploy.

### GitHub Pages

1. Buka **Settings → Pages**
2. **Source**: pilih branch `main`, folder `/ (root)`
3. Save → tunggu beberapa menit
4. Website live di `https://username.github.io/repo-name`

---

## 🆘 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Gambar tidak muncul | Cek path file dan nama file (case-sensitive) |
| Link tidak detect platform | Pastikan format URL benar (contoh: `instagram.com/username`) |
| Icon tidak berubah | Clear browser cache (Ctrl+Shift+R) |
| Video intro tidak play | Gunakan format MP4, ukuran < 5 MB |

---

<div align="center">

**Simple configuration. Automatic rendering.** ⚡

[Vercel](https://vercel.com) · [GitHub Pages](https://pages.github.com)

</div>
