import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function Input() {
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    productFreshness: "Brand New",
    productPrice: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setProductImage(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nameRegex = /^[A-Za-z\s]+$/
    const categoryRegex = /^(Baju|Celana)$/
    const freshnessRegex = /^(Brand New|Second Hand|Refurbished)$/
    const priceRegex = /^\d+(\.\d{1,2})?$/

    if (!formData.productName.match(nameRegex)) {
      alert("Product Name is not valid. Only letters and spaces are allowed.")
      return
    }
    if (!productImage) {
      alert("Please select an image for the product.")
      return
    }

    // if (!productFreshness.match(freshnessRegex)) {
    //   alert(
    //     "Product Freshness is not valid. Please choose from the provided options."
    //   )
    //   return
    // }

    // if (!productCategory.match(categoryRegex)) {
    //   alert(
    //     "Product Category is not valid. Please choose from the provided options."
    //   )
    //   return
    // }

    if (!formData.productPrice.match(priceRegex)) {
      alert("Product price is not valid. Please enter a valid number.")
      return
    }

    const imageInput = document.getElementById("productImage")
    if (imageInput.files.length === 0) {
      alert("Please upload an image of the product.")
      return
    }

    // Mendapatkan file gambar
    const imageFile = imageInput.files[0]

    // Menyaring tipe file
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"]
    if (!allowedTypes.includes(imageFile.type)) {
      alert(
        "Invalid image format. Please upload a valid image (jpeg, png, or gif)."
      )
      return
    }

    // Memeriksa ukuran file gambar
    const maxSize = 5 * 1024 * 1024
    if (imageFile.size > maxSize) {
      alert(
        "Image size exceeds the allowed limit (5MB). Please upload a smaller image."
      )
      return
    }
    // Membuat produk dengan ID unik
    const product = {
      id: uuidv4(),
      productNumber: uuidv4(),
      ...formData,
      productImage: URL.createObjectURL(imageFile),
    }

    // Memperbarui daftar produk dengan produk baru
    setProducts([...products, product])

    // Mengosongkan formulir setelah submit
    setFormData({
      productName: "",
      productCategory: "",
      productFreshness: "Brand New",
      productPrice: "",
      productImage: "",
    })
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
    setFormData(productToEdit)
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="productNumber" className="form-label">
              Product Number:
            </label>
            <input
              type="text"
              className="form-control"
              id="productNumber"
              value={formData.productNumber || uuidv4()}
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
              name="productName"
              value={formData.productName}
              onChange={handleChange}
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
              value={formData.productCategory}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              <option value="Baju">Baju</option>
              <option value="Celana">Celana</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              Image of Product:
            </label>
            <input
              type="file"
              className="form-control"
              id="productImage"
              name="productImage"
              style={{ width: "40%" }}
              accept="image/*"
              onChange={handleImageChange} // Ganti dari `oninput` ke `onChange`
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Product Freshness :</label>
            <br />
            {["Brand New", "Second", "Refurbished"].map((option) => (
              <div className="form-check" key={option}>
                <input
                  className="form-check-input"
                  type="radio"
                  id={option}
                  name="productFreshness"
                  value={option}
                  checked={formData.productFreshness === option}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={option}>
                  {option}
                </label>
              </div>
            ))}
          </div>

          <div className="mb-3">
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
                value={formData.productPrice}
                placeholder={100}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      <h2 className="mt-5">List Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Product Image</th>
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
                <img
                  src={product.productImage} // Menyertakan URL gambar dari data produk
                  style={{ maxWidth: "100px", maxHeight: "100px" }} // Menetapkan ukuran gambar
                />
              </td>
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

export default Input
