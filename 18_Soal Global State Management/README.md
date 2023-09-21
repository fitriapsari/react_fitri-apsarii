# Resume Global State Management and Data Fetching

### Global State Management

Redux

- Redux adalah library untuk manajemen state global
- Redux menggunakan struktur "one-way data flow"
- Redux menggunakan beberapa tipe code

### Saat yang tepat untuk menggunakan Redux:

1. Banyak state yang perlu ditaruh di banyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

### Redux Libraries dan Tools

1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension

### Komponen Penting di Redux

1. Action
   <br> Digunakan untuk memberikan informasi dari aplikasi ke store.

2. Reducer
   <br> Pure Javascript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru.

3. createSLice()

4. Store
   <br> Objek sentral yang menyimpan state pada aplikasi.

### Memasang Redux Store pada React

```jsx
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import store from "./app/store"
import { Provider } from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
```

### Memakai dan mengubah state

1. Hooks
2. Connect

<br>

## Redux Thunk

### Apa Itu Redux Thunk?

Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.

### Kenapa perlu Redux Thunk?

Untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data.

- Asynchronous Dispatch
- Conditional Dispatch

<br>

## Persisted State

### Menyimpan State ke Storage

```jsx
import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist" // imports from redux-persist
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

import rootReducer from "./reducers" // Root reducer

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer
const store = createStore(
  persistReducer, // pass the persisted reducer instead of rootReducer to createStore
  applyMiddleware() // add any middlewares here
)

const persistor = persistStore(store) // used to create the persisted store, persistor will be used in the next step
export { store, persistor }
```

```jsx
import {store, persistor} from './redux/store
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> // null passed to loading, persistor is being used here
        <RootComponent />
      </PersistGate>
    </Provider
  );
};
```

<br>

## Data Fetching

Aplikasi React akan membutuhkan server yang bisa digunakan untuk mengambil data atau autentikasi seperti login. Proses ini yang disebut dengan data fetching karena akan dilakukan pengambilan data. Nantinya server akan memberikan response berupa data yang mungkin nanti akan ditampilkan pada web atau aplikasi React.

### Cara Fetching Data di React

1. Fetch API
2. Axios
3. React Query Library

### Field Dalam Option Fetch API

- method:
  - GET
  - POST
  - PUT
  - DELETE
  - HEAD
- url: URL dari request
- body: body dari requst
- headers: objek headers
- referrer: referrer dari request
- mode:
  - cors
  - no-cors
  - same-origin
- credentials:
  - omit
  - same-origin
- redirect:
  - follow
  - error
  - manual
- integrity: subresource integrity value
- cache: cache mode (default, reload)

### Response

- type:
  - basic
  - cors
- url
- useFinalURL
- status: status code (ex: 200, 404, etc.)
- ok: boolean untuk response sukses (status 200-299)
- statusText: status code (ex: OK)
- headers: headers objek dari response

### Method Response

- clone()
- error()
- redirect()
- arrayBuffer()
- blob()
- formData()
- json()
- text()

### Hasura

Hasura GraphQL Engine adalah server GraphQL yang sangat cepat yang memberi Anda GraphQL API instan dan realtime melalui Postgres, dengan pemicu webhook pada peristiwa database, dan skema jarak jauh untuk logika bisnis.

### Postman

Postman adalah platform API bagi pengembang untuk merancang, membangun, menguji, dan mengulangi API mereka.

<br> Kenapa Menggunakan Postman?

- Mudah untuk berkolaborasi dengan sinkronisasi otomatis dengan anggota lain
- Antarmuka yang sederhana
- POSTMAN gratis hingga 3 anggota dan koleksi tak terbatas
