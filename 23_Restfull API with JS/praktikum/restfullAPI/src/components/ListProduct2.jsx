import React, { useEffect, useState } from "react"
import {
  fetchProducts,
  updateProduct,
  deleteProduct,
} from "../api/ListProductAPI"

function ListProduct() {
  const [products, setProducts] = useState([])
  const [editedProduct, setEditedProduct] = useState(null)

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

  const handleEdit = (product) => {
    // Menyimpan data yg diedit ke state editedProduct
    setEditedProduct(product)
  }

  const handleUpdate = () => {
    if (editedProduct) {
      // Mengirim permintaan PUT untuk memperbarui produk
      updateProduct(editedProduct.id, editedProduct)
        .then(() => {
          // Menyegarkan daftar produk setelah berhasil mengupdate
          fetchProducts()
            .then((data) => {
              setProducts(data)
            })
            .catch((error) => {
              alert("Gagal mengambil data produk: ", error)
            })
          setEditedProduct(null)
          console.log("Product updated successfully")
        })
        .catch((error) => {
          alert("Gagal mengupdate produk: ", error)
        })
    }
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
                {editedProduct === product ? (
                  <>
                    <button
                      style={{ backgroundColor: "green", color: "white" }}
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button
                      style={{ backgroundColor: "gray", color: "white" }}
                      onClick={() => setEditedProduct(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    style={{ backgroundColor: "green", color: "white" }}
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                )}
                <button
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => deleteProduct(product.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListProduct
