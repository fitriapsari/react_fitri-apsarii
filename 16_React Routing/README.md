# Resume React Routing

### Penjelasan Router

Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application)

### Multi Page Application & Single Page Application

- Multi Page Application (MPA) juga disebut dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru.
- Single Page Application (SPA) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

<br>

### Keunggulan SPA & MPA

|              Single Page Application               |                                       Multi Page Application                                        |
| :------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
|       Waktu loading website jauh lebih cepat       |                               SEO website akan lebih mudah dioptimasi                               |
|         Tidak ada query tambahan ke server         |           Memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda            |
|         Front-end yang cepat dan responsif         | Menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website |
| Meningkatkan pengalaman pengguna (User Experience) |                                                                                                     |

<br>

### Kekurangan SPA & MPA

|          Single Page Application           |                                   Multi Page Application                                    |
| :----------------------------------------: | :-----------------------------------------------------------------------------------------: |
|         Tidak bagus dalam hal SEO          | Kecepatan download website jauh lebih lama jika dibandingkan dengan single page application |
|    Berat saat di-load/buka pertama kali    |                    Perlu mengintegrasikan antara front-end dan back-end                     |
| Kurang aman dibanding dengan website biasa |                       Lebih sering membutuhkan maintenance dan update                       |
|       Masalah kompatibilitas browser       |              Mungkin akan lebih sering menemukan masalah performa pada website              |

<br>

### React Router

```
npm install react-router-dom --save
```

- BrowserRouter
  <br> `<BrowserRouter>` digunakan sebagai router yang menggunakan API history HTML5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang.

- Route
  <br> `<Route>` digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi web. Attribute path merupakan url pada browser pada proses routing. Attribute component merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang didefinisikan.

- Switch
  <br> `<Switch>` digunakan untuk membungkus kumpulan bebrapa component Route. Exact bertugas untuk memastikan route hanya me-render component yang memiliki path yang cocok, Jika tidak ada yang cocok, maka route yang akan di-render yaitu route terakhir dengan component Notfound.

- Link
  <br> digunakan untuk berpindah antar halaman property `to` tersebut merujuk pada path di route yang akan dituju. Elemen kosong `<></>` tersebut adalah shorthand dari `<React.Fragment></ReactFragment>` yang mana bisa untuk membungkus child element tanpa menambahkan node ke dalam DOM.

<br>

## Use URL Params

### Apa Itu URL Parameter?

Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman.

### Perbedaan Link dan Redirect?

|                 Link                 |                Redirect                 |
| :----------------------------------: | :-------------------------------------: |
| Dapat digunakan pada kondisi apapun  | Lebih sering digunakan pada halaman 404 |
| Memberikan history baru pada browser |      Menimpa history pada browser       |
| Bereaksi dengan click seperti a href |      Bereaksi dengan suatu kondisi      |

<br>

## Hook Routing React

### useHistory

`useHistory` memberi kita akses ke instance riwayat yang dapat Anda gunakan untuk bernavigasi. Beberapa contohnya ialah :

| Property  |                           Kegunaan                            |
| :-------: | :-----------------------------------------------------------: |
|  length   |          (angka) Jumlah entri dalam tumpukan riwayat          |
|    go     |    (fungsi) penunjuk di tumpukan riwayat sebanyak n entri     |
|  goBack   |                 (fungsi) Setara dengan go(-1)                 |
| goForward |                 (fungsi) Setara dengan go(1)                  |
|   push    |           (fungsi) Mendorong entri baru ke tumpukan           |
|  replace  | (fungsi) Mengganti entri saat ini di tumpukan riwayat history |

### useParams

`useParams` mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari `<Route>` saat ini.

### useRouteMatch

`useRouteMatch` mencoba mencocokkan URL saat ini dengan cara yang sama seperti `<Route>`. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender `<Route>`.

<br><br>
