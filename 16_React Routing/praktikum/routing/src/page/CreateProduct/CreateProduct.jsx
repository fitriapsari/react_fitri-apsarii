import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Route, Routes, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import ProductDetail from "../ProductDetail/ProductDetail"

function CreateProduct() {
  const navigate = useNavigate()
  // State untuk menyimpan daftar produk
  const [products, setProducts] = useState([])
  const [productNumber, setProductNumber] = useState(uuidv4())
  const [productName, setProductName] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [productFreshness, setProductFreshness] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [editingProduct, setEditingProduct] = useState(null)

  // Handle submit form
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

  // Handle delete product
  const handleDelete = (productId) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus produk ini?"
    )

    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== productId))
    }
  }

  // Handle edit product
  const handleEdit = (productId) => {
    if (products.length === 0) {
      console.error("Data produk kosong")
      return
    }

    const productToEdit = products.find((product) => product.id === productId)
    setEditingProduct(productToEdit)
  }
  const handleRowClick = (productId) => {
    navigate(`/product/${productId}`)
  }
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="col-6">
          {/* Form input */}
          <div className="mb-3">
            <label htmlFor="productNumber" className="form-label">
              Product Number:
            </label>
            <input
              type="text"
              className="form-control"
              id="productNumber"
              defaultValue={productNumber}
              readOnly
            />
          </div>
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
                onChange={(e) => setProductFreshness(e.target.value)}
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
                onChange={(e) => setProductFreshness(e.target.value)}
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
                onChange={(e) => setProductFreshness(e.target.value)}
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
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h2 className="mt-5">List Products</h2>
      <Routes>
        <Route
          path="/"
          element={
            <Table
              products={products}
              onRowClick={handleRowClick}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          }
        />
        <Route
          path="/product/:productId"
          element={<ProductDetail products={products} />}
        />
      </Routes>
    </div>
  )
}
const Table = ({ products, onRowClick, onDelete, onEdit }) => (
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
        <tr key={product.id} onClick={() => onRowClick(product.id)}>
          <td>{product.productNumber}</td>
          <td>{product.productName}</td>
          <td>{product.productCategory}</td>
          <td>{product.productFreshness}</td>
          <td>{product.productPrice}</td>
          <td>
            <button
              onClick={() => onDelete(product.id)}
              style={{ backgroundColor: "blue", color: "white" }}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={() => onEdit(product.id)}
              style={{ backgroundColor: "blue", color: "white" }}
            >
              Edit
            </button>
          </td>
          <td>
            <Link to={`/product/${product.id}`}>Detail</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default CreateProduct
