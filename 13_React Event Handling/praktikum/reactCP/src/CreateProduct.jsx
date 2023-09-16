import Additional from "./componen/Additional"
import Delete from "./componen/Delete"
import DetailProduct from "./componen/DetailProduct"
import Header from "./componen/Header"
import ListProduct from "./componen/ListProduct"
import ProductCategory from "./componen/ProductCategory"
import ProductFreshness from "./componen/ProductFreshness"
import ProductImage from "./componen/ProductImage"
import ProductName from "./componen/ProductName"
import ProductPrice from "./componen/ProductPrice"
import Logo from "./componen/logo"
import Submit from "./componen/submit"
import TextCenter from "./componen/textCenter"
import "./index.css"
// import textCenter from "./componen/textCenter"

function CreateProduct() {
  return (
    <>
      <Header />
      <Logo />
      <TextCenter />
      <DetailProduct />
      <ProductName />
      <ProductCategory />
      <ProductImage />
      <ProductFreshness />
      <Additional />
      <ProductPrice />
      <Submit />
      <ListProduct />
      <Delete />
    </>
  )
}

export default CreateProduct
