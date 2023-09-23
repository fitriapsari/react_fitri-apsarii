import DetailProduct from "../../../../17_React Form/praktikum/createCP/src/componen/DetailProduct"
import Header from "./componen/Header"
import Logo from "../../../../17_React Form/praktikum/createCP/src/componen/logo"
import TextCenter from "../../../../17_React Form/praktikum/createCP/src/componen/textCenter"
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
