import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function CreateProduct() {
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [productFreshness, setProductFreshness] = useState("")
  const [productPrice, setProductPrice] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Membuat produk dengan ID unik
    const product = {
      id: uuidv4(),
      productName,
      productCategory,
      productFreshness,
      productPrice,
    }

    // Memperbarui daftar produk dengan produk baru
    setProducts([...products, product])

    // Mengosongkan formulir setelah submit
    setProductName("")
    setProductCategory("")
    setProductFreshness("")
    setProductPrice("")
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        {/* ...Formulir tetap sama seperti sebelumnya... */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <h2 className="mt-5">List of Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CreateProduct
