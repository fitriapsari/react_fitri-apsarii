import React from "react"
import { useParams } from "react-router-dom"

const ProductDetail = ({ products }) => {
  const { productId } = useParams()

  const product = products.find((product) => product.id === productId)
  console.log("Found Product:", product)

  // Menampilkan detail produk
  return (
    <div>
      <h2>Product Detail</h2>
      {product ? (
        <div>
          <p>ID: {product.id}</p>
          <p>Product Number: {product.productNumber}</p>
          <p>Product Name: {product.productName}</p>
          <p>Product Category: {product.productCategory}</p>
          <p>Product Freshness: {product.productFreshness}</p>
          <p>Product Price: ${product.productPrice}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  )
}

export default ProductDetail
