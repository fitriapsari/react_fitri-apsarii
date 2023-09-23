import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

// Melakukan Pemanggilan langsung dengan import
// import ProductCategory from "./ProductCategory"
// import ProductFreshness from "./ProductFreshness"
// import ProductPrice from "./ProductPrice"
// import ProductName from "./ProductName"

function CreateProduct() {
  const [products, setProducts] = useState([])
  const [productNumber, setProductNumber] = useState(uuidv4())
  const [productName, setProductName] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [productFreshness, setProductFreshness] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [editingProduct, setEditingProduct] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Membuat produk dengan ID unik
    const product = {
      id: uuidv4(),
      productNumber: uuidv4(),
      productName,
      productCategory,
      productFreshness,
      productPrice,
    }

    // Memperbarui daftar produk dengan produk baru
    setProducts([...products, product])

    // Mengosongkan formulir setelah submit
    setProductNumber("")
    setProductName("")
    setProductCategory("")
    setProductFreshness("")
    setProductPrice("")
  }

  function handleDelete(productId) {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus produk ini?"
    )

    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== productId))
    }
  }

  const handleEdit = (productId) => {
    const productToEdit = products.find((product) => product.id === productId)
    setEditingProduct(productToEdit)
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productNumber" className="form-label">
                Product Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="productNumber"
                value={productNumber}
                readOnly
              />
            </div>
            <div>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Product Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productCategory" className="form-label">
                  Product Category:
                </label>
                <select
                  className="form-select"
                  id="productCategory"
                  name="productCategory"
                  style={{ width: "30%" }}
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  required
                >
                  <option value="">Choose...</option>
                  <option value="Baju">Baju</option>
                  <option value="Celana">Celana</option>
                </select>
              </div>
              <div
                className="mb-3"
                onChange={(e) => setProductFreshness(e.target.value)}
              >
                <label className="form-label">Product Freshness :</label>
                <br />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="brand"
                    name="productFreshness"
                    value="brand"
                    checked={productFreshness === "brand"}
                  />
                  <label className="form-check-label" htmlFor="brand">
                    Brand New
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="secondHand"
                    name="productFreshness"
                    value="second"
                    checked={productFreshness === "second"}
                  />
                  <label className="form-check-label" htmlFor="secondHand">
                    Second Hand
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="refurbished"
                    name="productFreshness"
                    value="refurbished"
                    checked={productFreshness === "refurbished"}
                  />
                  <label className="form-check-label" htmlFor="refurbished">
                    Refurbished
                  </label>
                </div>
              </div>
              <div
                className="mb-3"
                onChange={(e) => setProductPrice(e.target.value)}
              >
                <label htmlFor="productPrice" className="form-label">
                  Product Price :
                </label>
                <div className="input-group">
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    name="productPrice"
                    value={productPrice}
                    placeholder={100}
                    // oninput="validateProductPrice()"
                  />
                </div>
              </div>
            </div>

            {/* // Melakukan pemanggilan langsung  */}
            {/* <ProductName />
            <ProductCategory />
            <ProductFreshness />
            <ProductPrice /> */}
          </form>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Memasukkan data yang telah diinput ke dalam tabel  */}
      <h2 className="mt-5">List Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{product.productNumber}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productPrice}</td>
              <td>
                <button
                  onClick={() => handleDelete(product.id)}
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleEdit(product.id)}
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CreateProduct
