import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { ReactDOM } from "react"
import "./App.css"
import { Provider } from "react-redux"
import store from "./redux/store/index"
import ListProduct from "./components/ListProduct"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <ListProduct />
    </Provider>
  )
}

export default App
