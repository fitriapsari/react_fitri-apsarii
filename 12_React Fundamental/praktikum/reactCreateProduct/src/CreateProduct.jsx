import Additional from "./componen/Additional"
import Delete from "./componen/Delete"
import DetailProduct from "./componen/DetailProduct"
import Header from "./componen/Header"
import ListProduct from "./componen/ListProduct"
// import ProductCategory from "./componen/ProductCategory"
// import ProductFreshness from "./componen/ProductFreshness"
// import ProductImage from "./componen/ProductImage"
// import ProductName from "./componen/ProductName"
// import ProductPrice from "./componen/ProductPrice"
import Logo from "./componen/logo"
import Submit from "./componen/submit"
import TextCenter from "./componen/textCenter"
import "./index.css"
import ListProduct5 from "./componen/ListProduct5"

function createProduct() {
  return (
    <>
      <Header />
      <Logo />
      <TextCenter />
      <ListProduct5 />
      <ListProduct />
      <Delete />
    </>
  )
}

export default createProduct
