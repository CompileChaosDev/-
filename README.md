Malix Portfolio

Personal portfolio website dengan sistem konfigurasi terpusat.
Semua informasi website dapat diatur hanya melalui "config.js".

Struktur

.
├── malix/
│   └── Background.png
├── index.html
├── config.js
├── style.css
├── script.js
└── README.md

Configuration

Semua pengaturan berada di:

config.js

Yang dapat diubah:

- Profile
- Foto dan background
- Intro video
- Social links
- Skills
- Projects
- Products
- Harga dan link produk

Tidak perlu mengubah "index.html" atau "script.js" untuk memperbarui isi website.

Project

Project ditambahkan melalui:

Projek = [
  {
    Potprojek: 'IMAGE_URL',
    Namaprojek: 'Nama Project',
    Deskripsiprojek: 'Deskripsi project.',
    Teknologi: ['HTML', 'CSS', 'JavaScript'],
    Linkprojek: 'https://example.com'
  }
];

Product

Produk ditambahkan melalui:

Produk = [
  {
    Potproduk: 'IMAGE_URL',
    Namaproduk: 'Nama Produk',
    Deskripsiproduk: 'Deskripsi produk.',
    Harga: 15000,
    Label: 'BARU',
    Linkproduk: 'https://wa.me/628xxxxxxxxxx'
  }
];

Links

Social media dan link lainnya cukup ditambahkan ke array:

Links = [
  'https://instagram.com/username',
  'https://tiktok.com/@username',
  'https://github.com/username'
];

Website akan menyusunnya secara otomatis.

Skills

Myskill = [
  'HTML:90',
  'CSS:85',
  'JavaScript:80',
  'Node.js:75'
];

Setup

1. Download atau clone repository.
2. Buka "config.js".
3. Ubah data sesuai kebutuhan.
4. Buka "index.html".

Developer

Malix

«Simple configuration. Automatic rendering.»