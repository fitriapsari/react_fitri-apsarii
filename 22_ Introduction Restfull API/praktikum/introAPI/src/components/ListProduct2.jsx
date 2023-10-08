import React, { useEffect, useState } from "react"
import { fetchProducts, deleteProduct } from "../api/index"
import data from "../api/data"

function ListProduct() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Mengambil data produk
    fetchProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error("Gagal mengambil data produk: ", error)
      })
  }, [])
  console.log(data)

  const handleEdit = (productId) => {
    console.log("Edit product with ID:", productId)
  }

  const handleDelete = (productId) => {
    deleteProduct(productId)
      .then(() => {
        const updatedProducts = products.filter(
          (product) => product.id !== productId
        )
        setProducts(updatedProducts)
        console.log("Product deleted successfully")
      })
      .catch((error) => {
        console.error("Gagal menghapus produk: ", error)
      })
  }

  return (
    <div>
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
              <td>{index + 1}</td>
              <td>{product.ProductName}</td>
              <td>{product.ProductCategory}</td>
              <td>{product.ProductFreshness}</td>
              <td>{product.ProductPrice}</td>
              <td>
                <button onClick={() => handleEdit(product.id)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListProduct
