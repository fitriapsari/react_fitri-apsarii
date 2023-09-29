import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/slices/productSlice"
import Input from "../../components/Input"

const AddProduct = () => {
  const dispatch = useDispatch()

  const [productForm, setProductForm] = useState({
    productName: "",
    productCategory: "",
    productFreshness: "Brand New",
    productPrice: "",
    productDescription: "",
  })

  const handleChangeForm = (e) => {
    const { name, value } = e.target
    setProductForm({
      ...productForm,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProduct(productForm))

    setProductForm({
      productName: "",
      productCategory: "",
      productFreshness: "Brand New",
      productPrice: "",
      productDescription: "",
    })
  }

  return (
    <form className="form-add-product" onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <label htmlFor="productName">Product Name</label>
      <Input
        name="productName"
        id="productName"
        value={productForm.productName}
        onChange={(e) => handleChangeForm(e)}
        placeholder="Product Name"
        className="input-add-product"
      />
      <label htmlFor="productCategory">Product Category</label>
      <Input
        name="productCategory"
        id="productCategory"
        value={productForm.productCategory}
        onChange={(e) => handleChangeForm(e)}
        placeholder="Product Category"
        className="input-add-product"
      />
      <label htmlFor="productFreshness">Product Freshness</label>
      <select
        name="productFreshness"
        id="productFreshness"
        value={productForm.productFreshness}
        onChange={(e) => handleChangeForm(e)}
        className="input-add-product"
      >
        <option value="Brand New">Brand New</option>
        <option value="Second Hand">Second Hand</option>
        <option value="Refurbished">Refurbished</option>
      </select>
      <label htmlFor="productPrice">Product Price</label>
      <Input
        name="productPrice"
        id="productPrice"
        value={productForm.productPrice}
        onChange={(e) => handleChangeForm(e)}
        placeholder="Product Price"
        className="input-add-product"
      />
      <label htmlFor="productDescription">Product Description</label>
      <TextArea
        name="productDescription"
        id="productDescription"
        value={productForm.productDescription}
        onChange={(e) => handleChangeForm(e)}
        placeholder="Product Description"
        className="input-add-product"
      />
      <Button type="submit" className="btn-submit" text="Submit" />
    </form>
  )
}

export default AddProduct
