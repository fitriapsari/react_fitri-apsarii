# Resume React Event Handling

### State

State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.

- Data yang bisa dimodifikasi menggunakan setState
- Setiap terjadi modifikasi akan terjadi render ulang
- Bersifat Asynchronous
- Dipakai dalam class

<br>

### Perbedaan Props dan State

- Props hanya dapat dibaca, sedangkan state changes bisa asynchronous
- Props tidak bisa dimodifikasi, sedangkan state dapat dimodifikasi menggunakan `this.setState`

<br><br>

## Stateful & Stateless Component

### Stateful Component

Stateful component atau yang disebut juga Smart Component dan Container Component adalah komponen React yang memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle.

<br>

### Stateless Component

Stateless Component atau yang disebut juga Dump Component dan Presentational Component adalah komponen React yang tidak memiliki state, hanya prop. Umumnya component ini dibuat dengan function karena codenya lebih ringkas.

<br>

### Perbedaan Dari Komponen Stateful dan Komponen Stateless

|           Stateful Component            |              Stateless Component              |
| :-------------------------------------: | :-------------------------------------------: |
|        Mengerti tentang aplikasi        |          Tidak tahu tentang aplikasi          |
|         Melakukan data fetching         |         Tidak melakukan data fetching         |
|      Berinteraksi dengan aplikasi       |      Tujuan utamanya adalah visualisasi       |
|      Tidak dapat digunakan kembali      |            Dapat digunakan kembali            |
| Meneruskan status dan data ke child-nya | Hanya berkomunikasi dengan parent langsungnya |

<br><br>

## Handling Events

### Apa Itu Handling Event

Handling Event adalah suatu metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen. Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan.

<br> Contoh penulisan event sebagai berikut :

<br> Pada HTML :

```html
<button onclick="activateLasers()">Activate Lasers</button>
```

<br> Pada React :

```jsx
<button onClick={this.activeLasers}>Active Lasers</button>
```

<br>

### Beberapa Contoh List Event

- Clipboard Events (Promise terpenuhi)
- Form Events (onChange, onSubmit)
- Mouse Events (onClick, onDoubleClick, onMouseOver)
- Generic Events (onError, onLoad)
