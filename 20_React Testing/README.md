# Resume Materi Testing

### Apa Itu Testing?

Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

<br> **Manfaat Testing**
<br> Manfaat Testing Walaupun menambahkan waktu dan code dalam membuat testing, testing memiliki manfaat sebagai berikut:

- Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

<br> **Kategori Testing**
<br> Secara umum, cara mengetes di React terbagi menjadi dua kategori:

1. Rendering component trees di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus pada bagian ini.
2. Menjalankan aplikasi lengkap di dalam environment peramban (browser) asli. Ini dikenal sebagai tes "end-to-end".

### Pertimbangan Memilih Tools

**Kecepatan Iterasi vs Environment Yang Realistis**
<br> Beberapa kakas menawarkan feedback loop yang sangat cepat antara membuat sebuah perubahan dan melihat hasilnya, tetapi tidak memodelkan sifat dari peramban dengan tepat. Tools lain mungkin menggunakan environment peramban yang asli, tetapi mengurangi kecepatan iterasi dan lebih flakier pada server integrasi berkelanjutan.

<br> **Seberapa Banyak Mock**
<br> Dengan komponen, perbedaan antara tes "unit" dan tes "integrasi" bisa tidak sesuai. Jika kita mengetes sebuah form, haruskah tes yang dilakukan juga menguji tombol yang ada di dalamnya? Atau haruskah komponen memiliki rangkaian tes sendiri? Haruskah refactoring pada tombol merusak tes pada form? Pertimbangan pemilihan perkakas untuk testing tentu saja dikembalikan kepada kebutuhan masing-masing.

### Rekomendasi Tools

**Jest**
<br> Test runner pada JavaScript yang memungkinkan Anda mengakses DOM melalui jsdom. Sementara jsdom hanyalah perkiraan cara kerja browser, seringkali cukup baik mengetes komponen pada React. Jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerful seperti mocking modules dan timers sehingga Anda dapat memiliki kontrol lebih pada kode yang dijalankan.

<br> **React Testing Library**
<br> Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya. Pendekatan ini membuat refactoring menjadi mudah dan juga mendorong kita untuk menerapkan best practices untuk aksesibilitas. Mungkin tidak memberikan cara untuk me-render secara "dangkal" pada sebuah komponen tanpa anak, test runner seperti Jest yang memungkinkan kita melakukan mocking.

<br> **Install**
<br> Jika kita menginstall React menggunakan create-react-app, Jest (dan React Testing Library) akan secara default sudah terinstall. Tetapi jika kita, menggunakan custom React setup, kita perlu menginstall dan men set up Jest (dan React Testing Library).

<br>

## Create Basic Testing with RTL

### Rendering Komponen

**Render dan Debug**
<br> Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL. React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.

### Memilih Elemen

**Memilih Elemen**
<br> React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL. Salah satu contohnya ialah getBy Text untuk memilih teks dari elemen yang sudah dipilih.

<br> **Kategori Testing**
<br> Contoh lain yang bisa digunakan.

- LabelText: `getByLabelText: <label for="search" />`
- PlaceholderText: `getByPlaceholderText: <input placeholder="Search" />`
- AltText: `getByAltText: <img alt="profile" />`
- DisplayValue: `getByDisplayValue: <input value="JavaScript" />`

### Handle Event

```jsx
function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  )
}
```

```jsx
described 'Search', () => {
  test('calls the onChange callback handler', () => {
    const onChange = jest. fn();

    render (
      <Search value="" onChange={on Change}>
        Search:
      </Search>
    );

    fireEvent.change( screen.getByRole('textbox')
      target: { value: 'JavaScript' },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
```

### Handle Asynchronous

**Untuk Kasus Apa?**
<br> Ini digunakan ketika hendak mengetes fetch sebuah API. Pada kasus ini kita perlu membuat mock untuk axios (atau yang lain). Selanjutnya kita perlu membuat mock promise hasilnya ketika resolve atau reject. Ini dikembalikan lagi kepada skenario kita.

```jsx
import React from "react"
import axios from "axios"
const URL = "http://hn.algolia.com/api/v1/search"

function App() {
  const [stories, setStories] = React.useState([])
  const [error, setError] = React.useState(null)

  async function handleFetch(event) {
    let result

    try {
      result = await axios.get(`${URL}?query=React`)

      setStories(result.data.hits)
    } catch (error) {
      setError(error)
    }
  }
}
export default App

// Kode Fetch sebuah API
```

```jsx
return (
  <div>
    <button type="button" onclick={handleFetch}>
      Fetch Stories
    </button>

    {error && <span>Something went wrong ...</span>}

    <ul>
      {stories.map((story) => (
        <li key={story.objectID}>
          <a href={story.url}>{story.title}</a>
        </li>
      ))}
    </ul>
  </div>
)

// HTML
```

Di sini perlu dibuat mock axios menggunakan Jest dengan

```jsx
jest.mock("axios")
```

<br>

## Testing Custom Hook

### Library Yang Digunakan

Untuk mengetes custom hook, kita menggunakan React Hooks Testing Library. Dia akan memberikan kita alat alat untuk mengetes hooks tanpa merender satu komponen.

```
npm install -D @testing-library/react-hooks
```

### Implementasi

- Custom Hook
- Testing Value
- Testing Callback
- Testing Re-render

<br><br>
