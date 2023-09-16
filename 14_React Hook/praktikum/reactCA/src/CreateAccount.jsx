import Navbar from "./componen/Navbar"
import Logo from "./componen/Logo"
import Article from "./componen/textCenter"
import FirstName from "./componen/FirstName"
import Username from "./componen/Username"
import Email from "./componen/Email"
import Gender from "./componen/Gender"
import Address from "./componen/Address"
import Nasionally from "./componen/Nasionally"
import Language from "./componen/Language"
import Button from "./componen/Button"
import ListProduct from "./componen/ListProduct"
import React, { useEffect } from "react"

function CreateAccount() {
  useEffect(() => {
    alert("Welcome to Create Account!")
  }, [])

  return (
    <>
      <Navbar />
      <Logo />
      <Article />
      <FirstName />
      <Username />
      <Email />
      <Gender />
      <Address />
      <Nasionally />
      <Language />
      <Button />
      <ListProduct />
    </>
  )
}
export default CreateAccount
