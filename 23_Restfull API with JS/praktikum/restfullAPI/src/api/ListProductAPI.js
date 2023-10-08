import axios from "axios";

const API_URL = "https://6520a233906e276284c4964d.mockapi.io/products"

export const fetchProducts = () => {
  return axios
    .get(API_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Gagal mengambil data produk: ", error);
      throw error;
    });
};

export const updateProduct = (id, updatedProduct) => {
  const url = `${API_URL}/${id}`;

  return axios
    .put(url, updatedProduct)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Gagal mengupdate produk: ", error);
      throw error;
    });
};

export const deleteProduct = (productId) => {
  const url = `${API_URL}/${productId}`;

  return axios
    .delete(url)
    .then(() => {
      console.log("Product Berhasil Dihapus");
    })
    .catch((error) => {
      alert("Gagal menghapus produk: ", error);
      throw error;
    });
};



