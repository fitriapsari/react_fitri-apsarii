# Resume React Fundamental

## JSX

### Apa Itu JSX?

- Singkatan dari Javascript XML
  Ekstensi pada Javascript

Contoh syntax :

const element = '''<h1>Hello, world!</h1>'''

### Kenapa Menggunakan JSX?

JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
Separation of Technology -> Separation of Concerns
JSX memudahkan dalam menulis aplikasi React

### React Component & Props

Apa Itu Props?
Singkatan dari properties, membuat kita dapat memberikan argumen/data pada component
Props membantu untuk membuat komponen menjadi lebih dinamis
Props dioper ke component sama seperti memberikan atribut pada tag HTML
Props pada component adalah read-only dan tidak dapat diubah

### Component Composite

Apa Itu Komponen?
Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI.

### One Way Data Flow

One way data flow adalah suatu teknik yang hanya memiliki satu cara untuk mentransfer data ke seluruh aplikasi. Dengan teknik ini, kontrol terhadap data jadi lebih baik.

### Komposisi Komponen

1. Kontainmen
2. Spesialisasi

### React Lifecycle

Lifecycle Method Yang Umum

- render()
- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()

### Lifecycle Method Yang Lainnya

- shouldComponentUpdate()
- static getDerivedStateFromProps()
- getSnapshotBeforeUpdate()

### Condition and List

- Render Bersyarat
  Pada React, kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi kita.

- Menggunakan if
  Inline if dengan operator &&
  Inline if-else dengan ternary conditional operator
  Mencegah komponen untuk rendering

- Render List
  Kita dapat membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal {}.

- Key
  Key membantu React untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.

### Directory Structure

Struktur Direktori
React tidak memiliki pendapat tentang bagaimana cara memasukkan file ke folder. Namun, ada beberapa hal yang patut dicatat, yaitu :

- Pengelompokan berdasarkan fitur atau rute
- Pengelompokan berdasarkan jenis file
- Hindari terlalu banyak nesting

### Styling Inline

Terdapat beberapa bentuk styling inline pada React yang meliputi :

- Classes dan CSS
- Atribut style
- Module CSS
