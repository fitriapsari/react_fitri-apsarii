import DetailProduct from "./componen/DetailProduct"
import Header from "./componen/Header"
import Logo from "./componen/logo"
import TextCenter from "./componen/textCenter"
import Input from "./componen/Input"
import "./index.css"

function CreateProduct() {
  return (
    <>
      <Header />
      <Logo />
      <TextCenter />
      <DetailProduct />
      <Input />
    </>
  )
}

export default CreateProduct
