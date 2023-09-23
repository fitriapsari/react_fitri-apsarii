import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom"
import Newsletter from "./componen/Newwsletter/Newsletter"
import Welcome from "./componen/Welcome/Welcome"
import Footer from "./componen/Footer/Footer"
import CreateProduct from "./componen/createProduct"

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/create" component={CreateProduct} />
        </Switch>
      </Router>
    </BrowserRouter>
  )
}

export default App
