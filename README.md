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

<div align="center">

[**🌐 Live Demo**](https://domainkamu.vercel.app) · [**⚙️ Konfigurasi**](#️-konfigurasi) · [**🚀 Deploy**](#-deploy)

</div>

---

## ✨ Fitur

| | Fitur | Keterangan |
|---|---|---|
| 🎛️ | **Satu file konfigurasi** | Semua konten diatur lewat `config.js`, tanpa menyentuh kode lain |
| 🔗 | **Link otomatis** | WhatsApp, Instagram, TikTok, Telegram, Discord, YouTube, GitHub, dan lainnya dikenali sendiri |
| 🖼️ | **Ikon bisa diganti** | Pakai foto sendiri (`.png`, `.jpg`, `.webp`, `.svg`) atau emoji |
| 🧩 | **Projects & Produk** | Kartu tersusun otomatis, harga diformat jadi Rupiah |
| 🎬 | **Intro video** | Video pembuka yang bisa di-skip, bisa dimatikan |
| 📱 | **Mobile first** | Tampilan rapi di HP, ringan dibuka |

---

## 📁 Struktur

```text
.
├── Malix/
│   └── Background.png
├── index.html
├── config.js
├── style.css
├── script.js
└── README.md

> Kamu hanya perlu mengubah **`config.js`**.
> `index.html`, `style.css`, dan `script.js` tidak perlu disentuh untuk memperbarui isi website.

---

## 🚀 Mulai Cepat

1. **Download** atau clone repository ini.
2. Buka **`config.js`** lalu sesuaikan dengan datamu.
3. Buka **`index.html`** di browser.

```bash
git clone https://github.com/USERNAME/NAMA-REPO.git
cd NAMA-REPO
```

---

## ⚙️ Konfigurasi

### 👤 Profil & Tampilan

```js
Nameowner = 'malix';
Deskripsi = 'Halo, aku Malix. Selamat datang di website aku!';

Poto = 'Malix/fotoku.jpg';
Potowelcome = 'Malix/banner.png';
Background = 'Malix/Background.png';
Intro = 'Malix/intro.mp4';
```

| Variabel | Fungsi |
|---|---|
| `Nameowner` | Nama yang tampil di badge atas, judul tab, dan footer |
| `Deskripsi` | Teks perkenalan di halaman Home |
| `Poto` | Foto profil bulat |
| `Potowelcome` | Gambar banner di Home |
| `Background` | Gambar latar website (boleh juga kode warna, contoh `'#ffe9a8'`) |
| `Intro` | Video pembuka. Kosongkan (`''`) untuk mematikan |

---

### 🔗 Links

Tinggal tambah link, website menyusun tombol, nama, ikon, dan warnanya **secara otomatis**.

```js
Links = [
  'https://whatsapp.com/channel/XXXX',
  'https://chat.whatsapp.com/XXXX',
  'https://t.me/+XXXX',
  'discord.gg/XXXX',
  'instagram.com/username',
  'tiktok.com/@username',
  'github.com/username'
];
```

<details>
<summary><b>📋 Platform yang dikenali otomatis</b></summary>

<br>

| Link | Tampil sebagai |
|---|---|
| `whatsapp.com/channel/...` | WhatsApp Channel |
| `chat.whatsapp.com/...` | WhatsApp Group |
| `wa.me/...` | WhatsApp |
| `instagram.com/...` | Instagram |
| `tiktok.com/...` | TikTok |
| `t.me/+...` | Telegram Group |
| `t.me/...` | Telegram |
| `discord.gg/...` | Discord Server |
| `youtube.com/...` | YouTube |
| `github.com/...` | GitHub |
| `facebook.com/...` | Facebook |
| `x.com/...` | X |
| lainnya | Nama diambil dari domain |

</details>

**Nama atau ikon khusus untuk satu link:**

```js
Links = [
  { link: 'https://t.me/+XXXX', nama: 'Grup Telegram Malix', icon: 'Malix/foto2.png' },
  { link: 'youtube.com/@malix', icon: '▶️' }
];
```

---

### 🎨 Ikon

Ubah ikon **semua link dari satu platform sekaligus**:

```js
Ikon = {
  wa: 'Malix/fotoku.jpg',
  ig: 'Malix/fotoku.jpg',
  tt: 'Malix/fotoku.jpg',
  tg: 'Malix/fotoku.jpg',
  dc: 'Malix/fotoku.jpg',
  yt: 'Malix/fotoku.jpg',
  gh: 'Malix/fotoku.jpg',
  fb: 'Malix/fotoku.jpg',
  x: 'Malix/fotoku.jpg',
  link: 'Malix/fotoku.jpg'
};
```

- Cukup tulis platform yang ingin diubah, sisanya memakai ikon bawaan.
- `link` berlaku untuk link lain yang tidak dikenali.
- Kalau gambar gagal dimuat, ikon otomatis kembali ke bawaan.

---

### 🧩 Projects

```js
Projek = [
  {
    Potprojek: 'Malix/project1.jpg',
    Namaprojek: 'Nama Project',
    Deskripsiprojek: 'Deskripsi singkat project.',
    Teknologi: ['HTML', 'CSS', 'JavaScript'],
    Linkprojek: 'https://example.com'
  }
];
```

Mau tambah project? Salin satu blok `{ ... }`, tempel di bawahnya, lalu isi.
Semua kolom boleh dikosongkan, bagian yang kosong tidak ditampilkan.

---

### 🛍️ Produk

```js
Produk = [
  {
    Potproduk: 'Malix/produk1.jpg',
    Namaproduk: 'Nama Produk',
    Deskripsiproduk: 'Deskripsi singkat produk.',
    Harga: 15000,
    Label: 'BARU',
    Linkproduk: 'https://wa.me/628xxxxxxxxxx'
  }
];
```

| Kolom | Keterangan |
|---|---|
| `Harga` | Angka otomatis jadi `Rp 15.000`. Boleh teks, misalnya `'Gratis'` atau `'Nego'` |
| `Label` | Stiker kecil di pojok foto, misalnya `'BARU'` atau `'HOT'` |
| `Linkproduk` | Tujuan tombol BELI, misalnya link WhatsApp |

---

## 💡 Tips

- **Huruf besar-kecil harus sama persis.** `Malix/Foto.jpg` dan `malix/foto.jpg` dianggap berbeda di GitHub dan Vercel.
- **Hindari spasi di nama file.** Pakai `foto-profil.jpg`, bukan `foto profil.jpg`.
- **Foto ikon sebaiknya kotak (1:1)** supaya tidak terpotong di lingkaran.
- **Ukuran gambar di bawah 1 MB** supaya website cepat dibuka.
- **Jangan menaruh API key atau data rahasia di `config.js`.** Semua isinya bisa dilihat siapa pun yang membuka website.

---

## 🌐 Deploy

Website ini statis, jadi bisa dipasang gratis di hosting statis mana pun.

**Vercel**

1. Upload project ke GitHub.
2. Buka [vercel.com](https://vercel.com) lalu **Add New → Project**.
3. Pilih repository ini, atur *Framework Preset* ke **Other**.
4. Klik **Deploy**.

**GitHub Pages**

1. Buka **Settings → Pages**.
2. Pada *Source*, pilih branch `main` dan folder `/ (root)`.
3. Simpan, lalu tunggu beberapa menit.

---

<div align="center">

### 👨‍💻 Developer

**Malix**

*Simple configuration. Automatic rendering.*

</div>
