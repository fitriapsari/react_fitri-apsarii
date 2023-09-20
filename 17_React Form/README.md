# Resume React Form

## Basic Form

### Penggunaan Form

Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user. Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya. Dalam react akan ada banyak hal kita pelajari dari Form. Seperti bagaimana menghandle inputan? Bagaimana memvalidasi inputan dsb. Untuk saat ini kita akan belajar Basic Form.

### Macam Form

- Element `<input>`
  <br> Biasanya digunakan inputan yang tidak terlalu panjang.

- Element `<textarea>`
  <br> Element <textarea> biasanya digunakan inputan yang cukup panjang. Semisal deskripsi.
- Element `<select>`
  <br> Element <select> biasanya digunakan untuk inputan yang pilihannya sudah ditentukan.

- Radio Button
  <br> Radio button merupakan salah satu type di elemen <input>. Kita hanya bisa memilih 1 pilihan menggunakan radio button.

- Checkbox
  <br> Checkbox merupakan salah satu type di elemen <input>. Kita bisa memilih lebih dari 1 pilihan menggunakan checkbox.

- Type elemen input lainnya
  <br> Selain yang sudah disebutkan, masih banyak lagi type elemen input lainnya :
  - text (default)
  - image
  - submit
  - button
  - month
  - tel
  - color
  - number
  - time
  - checkbox
  - password
  - url date
  - radio
  - week
  - datetime-local
  - range
  - email
  - reset
  - file
  - search
  - hidden

<br>

## Controlled Component

### Apa itu Controlled Component?

Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian Komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya. Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai "controlled component".

### Tag Textarea

Pada HTML, elemen `<textarea>` mendefinisikan teks di dalamnya sebagai elemen anaknya. Di React, `<textarea>` menggunakan atribut value. Dengan cara ini, sebuah form yang menggunakan `<textarea>` dapat ditulis dengan cara yang sangat mirip dengan sebuah form yang menggunakan input satu baris.

### Tag Select

Pada HTML, `<select>` membuat sebuah daftar drop-down. Perhatikan bahwa opsi mula-mula dipilih, karena adanya atribut selected. Di React, alih-alih menggunakan atribut selected, kita menggunakan atribut value di tag select. Hal ini lebih mudah karena hanya perlu diubah di satu tempat saja.

### Handle Banyak Input

Ketika kita membutuhkan penanganan banyak elemen pada controlled component, kita dapat menambahkan atribut name pada setiap elemen dan membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari `event.target.name`.

<br>

## Uncontrolled Component

### Apa Itu Uncontrolled Component?

Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM. Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan uncontrolled component. Ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walau tak rapi. Selain itu pada umumnya kita harus menggunakan controlled component.

### Nilai Default

Pada lifecycle rendering React, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan uncontrolled component, sering kali kita ingin React dapat menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled. Untuk menangani kasus ini, kita bisa menggunakan atribut `defaultValue` alih-alih menggunakan value.

### Tag File Input

Pada HTML, sebuah `<input type="file">` memungkinkan pengguna untuk memilih satu atau beberapa flle dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan JavaScript lewat File API. Dalam React, sebuah `<input type="file"/>` merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.

<br>

## Uncontrolled vs Controlled Component

### Uncontrolled Component

Input yang tidak terkontrol seperti input formulir HTML tradisional. Kita kemudian bisa mendapatkan nilainya menggunakan `ref`. Misalnya, di tombol ditambahkan `onClickhandler`. Dengan kata lain, kita harus 'menarik' nilai dari field saat kita membutuhkannya. Ini bisa terjadi ketika formulir di submit. Itu adalah cara paling sederhana untuk mengimplementasikan input formulir. Tentu saja ada kasus yang valid untuk menggunakannya dalam form sederhana dan saat belajar React. Namun, uncontrolled input tidak powerful. Jadi selanjutnya kita akan mempelajari controlled input.

### Controlled Component

Sebuah controlled input menerima nilai saat ini sebagai prop, serta callback untuk mengubah nilai tersebut. Kita bisa mengatakan ini adalah cara yang lebih "React way" untuk pendekatan ini yang tidak berarti harus selalu menggunakannya). Tetapi nilai input ini harus ada di state yang disimpan di suatu tempat. Biasanya, komponen yang merender input (alias form component) menyimpannya di state-nya. Tentu saja, itu bisa dalam state komponen lain, atau bahkan di penyimpanan state terpisah (separate state store), seperti Redux. Ini juga berarti bahwa komponen form dapat merespon perubahan input dengan segera, misalnya oleh :

- Umpan balik di tempat, seperti validasi
- Menonaktifkan tombol kecuali semua field memiliki data yang valid
- Mengimplementasi format input tertentu, seperti nomor kartu kredit

Tetapi jika tidak memerlukan semua itu dan menganggap uncontrolled lebih sederhana, lakukanlah.

### Apa yang Membuat Elemen "Controlled"?

Selain input, ada elemen bentuk lain, seperti checkboxes, radios, selects and textareas. Elemen formulir menjadi "controlled" jika kita menetapkan nilainya melalui prop. Namun, masing-masing elemen formulir memiliki prop yang berbeda untuk menetapkan nilai itu.

|           Element           |    Value Property    | Change Callback | New value in callback |
| :-------------------------: | :------------------: | :-------------: | :-------------------: |
|   `<input type="text" />`   |    value="string"    |    onChange     |  event.target.value   |
| `<input type="checkbox" />` |  checked={boolean}   |    onChange     | event.target.checked  |
|  `<input type="radio" />`   |  checked={boolean}   |    on Change    | event.target.checked  |
|       `<textarea />`        |    value="string"    |    onChange     |  event.target.value   |
|        `<select />`         | value="option value" |    onChange     |  event.target.value   |

### Kesimpulan

Form controlled dan uncontrolled memiliki kelebihannya sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita.
Jika formulir sangat sederhana dalam hal umpan balik UI, uncontrolled dengan refs sepenuhnya baik-baik saja. Kita tidak perlu mendengarkan apa yang dikatakan berbagai artikel bahwa uncontrolled itu "buruk". Lagipula kita selalu dapat bermigrasi ke controlled input.

|                 Fitur                 | uncontrolled | controlled |
| :-----------------------------------: | :----------: | :--------: |
|       one-time value retrieval        |      v       |     v      |
|         validating on submit          |      v       |     v      |
|       instant field validation        |      x       |     v      |
| conditionally disabling submit button |      x       |     v      |
|        enforcing input format         |      x       |     v      |
| several inputs for one piece of data  |      x       |     v      |
|            dynamic inputs             |      x       |     v      |

<br>

## Basic Validation

### Kenapa Perlu Divalidasi?

Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan:

- Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi
- Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman
- Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi

### Tipe Validasi Data Formulir

- Client-side validation
  <br> Validasi yang dilakukan pada sisi klien (browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server. Kelebihan validasi sisi klien ialah user-friendly, karena jika terjadi kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus menunggu respon dari server untuk mengetahui hasil validasi. Validasi sisi klien, terbagi atas dua bagian :

  - Built-in form validation, yaitu menggunakan fitur validasi langsung dari HTML5. Biasanya, validasi ini tidak membutuhkan Javascript dan memiliki performa yang lebih baik. Tapi tidak dapat dikostumisasi. Kadang pesan errornya cukup 'kaku'. Contohnya: required, minlength, maxlength, min, max, type, dan pattern.
  - Menggunakan Javascript. Ini membuat validasi form dapat dikostumisasi. Tetapi kita perlu membuatnya sendiri.

- Server-side validation
  <br> Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna. Berbeda dengan validasi sisi klien, validasi ini tidak user-friendly Karena, koreksi kesalahan akan dikirimkan, setelah form disubmit.

### Built-in Form Validation

- required
  <br> required digunakan untuk menentukan field form perlu diisi sebelum formulir dapat dikirimkan.

- minlength dan maxlength
  <br> minlength dan maxlength digunakan untuk menentukan jumlah karakter minimal dan maksimal yang bisa dimasukkan. Jika kurang dari minlength akan muncul pemberitahuan, dan tidak bisa melebihi maxlength.

- min dan max
  <br> min dan max digunakan untuk menentukan nilai minimum dan maksimum angka yang bisa dimasukkan.

- type
  <br> type digunakan untuk menentukan apakah data berupa angka, email, atau type yang lainnya.

- pattern
  <br> pattern digunakan untuk menentukan regular expression (regex) yang mendefinisikan pola data yang boleh dimasukkan.

### Menggunakan Javascript

Validasi dengan Javascript dapat dilakukan ketika :

- Ketika ada perubahan di form. Ketika ada perubahan, akan mentrigger event onChange. Real-time berdasarkan perubahan data, namun fungsi validasi akan terus dipanggil selama ada perubahan. Bisa dikombinasikan dengan disable button.
- Ketika menekan tombol submit. Ketika menekan tombol submit, akan mentrigger event on Submit. Kelebihannya validasi cukup sekali, namun tidak akan real-time memvalidasi form.

<br><br>
