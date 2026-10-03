# Malix Portfolio

Personal portfolio website dengan sistem konfigurasi terpusat.
Seluruh informasi website dapat dikelola melalui satu file, yaitu `config.js`.

## Struktur

.
├── malix/
│   └── Background.png
├── index.html
├── config.js
├── style.css
├── script.js
└── README.md

## Configuration

Seluruh pengaturan website berada di:

`config.js`

Data yang dapat dikonfigurasi:

- Profile
- Foto & background
- Intro video
- Social links
- Skills
- Projects
- Products
- Harga & link produk

Tidak perlu mengubah `index.html` atau `script.js` untuk memperbarui konten website.

## Projects
Tambahkan project melalui:
```js
Projek = [
  {
    Potprojek: 'IMAGE_URL',
    Namaprojek: 'Nama Project',
    Deskripsiprojek: 'Deskripsi project.',
    Teknologi: ['HTML', 'CSS', 'JavaScript'],
    Linkprojek: 'https://example.com'
  }
];

Products
Tambahkan produk melalui:
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
Social media dan link lainnya cukup ditambahkan ke:

Links = [
  'https://instagram.com/username',
  'https://tiktok.com/@username',
  'https://github.com/username'
];

Website akan menyusun dan menampilkan link secara otomatis.

Skills
Atur skill dan persentasenya melalui:

Myskill = [
  'HTML:90',
  'CSS:85',
  'JavaScript:80',
  'Node.js:75'
];

Setup
1. Download atau clone repository.
2. Buka config.js.
3. Sesuaikan data dengan kebutuhan.
4. Buka index.html.



Developer
Malix
> Simple configuration. Automatic rendering.
