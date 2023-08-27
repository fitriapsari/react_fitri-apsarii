# Resume CSS

- Cascading Style Sheets (CSS) berfungsi untuk membuat tampilan website lebih menarik melalui colour, size, font, background, width, height dll. CSS juga dapat mengatur posisi pada halaman web dengan perintah float, align, display, position dll.

- Terdapat tiga cara menambahkan file CSS yaitu, External CSS dengan membuat file CSS tersendiri, Internal CSS dengan menmabhakan pada bagian style atau body dan Inline CSS dengan nemanbahkan CSS pada komponen yang akan diberi CSS. Dengan adanya CSS kita tak perlu mendeskripsikan tampilan masing-masing elemen berulang-ulang, code jadi lebih singkat, dan meminimalisir error. Struktur syntax CSS berupa `selector {declaration block : value}`. Selector di sini merupakan elemen HTML yang nantinya akan diatur dengan property yang ada di CSS itu sendiri.

### Selector CSS

1. ID (#)

- elemen 1 tag id
- halaman tidak dapat memiliki 2 id yang berbeda

2. Class (.)

- class dapat digunakan berulang-ulang pada 1 halaman
- 1 elemen dapat memiliki lebih dari 1 class

### CSS Font properties

- font
- font-family
- font-size
- font-weight
- font-style

### Padding and Margin

membuat ruang disekitar elemen .content { margin: t r b l; padding: t r b l; }

- margin membuat ruang diluar konten
- padding membuat ruang didalam konten

### CSS Background

- background-color
- background-image
- background-repeat
- background-size
- background-position

### CSS Link Event

- hover (ketika mouse diatas elemen)
- active (ketika elemen ditekan)
- visited (ketika elemen telah dikunjungi) css transisi a { transition: all 0.5s ease; }

### CSS Display

- block (selalu dimulai pada baris baru kiri ke kanan)
- inline-block (hanya memakai lebar sesuai yang dibutuhkan)
- none (menyembunyikan elemen)

### CSS Table

- border (menambahkan border)
- border-collapse (membuat single border)
- :nth-child(even) (membuat background stripe)

### Flexbox

Flexbox adalah model tata letak dalam CSS yang dirancang untuk mengatur tata letak elemen-elemen HTML dalam kontainer dengan cara yang lebih mudah dan responsif.

### Properti Flexbox

Properti Flex: Ada beberapa properti CSS yang digunakan dalam Flexbox, antara lain:

- flex-direction: Mengatur arah utama tata letak flex (misalnya, row atau column).
- justify-content: Mengatur cara elemen-elemen disusun sepanjang main axis.
- align-items: Mengatur cara elemen-elemen disusun sepanjang cross axis.
- flex-grow: Mengatur seberapa besar elemen dapat tumbuh sepanjang main axis.
- flex-shrink: Mengatur seberapa besar elemen dapat menyusut sepanjang main axis.
- flex-basis: Mengatur ukuran awal elemen sebelum tata letak flex.
- align-self: Mengatur tata letak elemen secara individu dalam kontainer flex.
