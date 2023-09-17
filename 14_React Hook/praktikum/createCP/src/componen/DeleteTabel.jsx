function handleDelete(productId) {
  const confirmDelete = window.confirm(
    "Apakah Anda yakin ingin menghapus produk ini?"
  )

  if (confirmDelete) {
    setProducts(products.filter((product) => product.id !== productId))
  }
}
export default handleDelete
