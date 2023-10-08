import axios from "axios";

const API_URL = "https://6520a233906e276284c4964d.mockapi.io/products";

export const fetchProducts = () => {
  return axios
    .get(API_URL, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Gagal mengambil data produk: ", error);
      throw error;
    });
};

export const deleteProduct = (productId) => {
  const url = `${API_URL}/${productId}`;

  return axios
    .delete(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      console.log("Product deleted successfully");
    })
    .catch((error) => {
      console.error("Gagal menghapus produk: ", error);
      throw error;
    });
};

export const createProduct = (productData) => {
  return axios
    .post(API_URL, productData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Gagal membuat produk baru: ", error);
      throw error;
    });
};

export const updateProduct = (productId, updatedProductData) => {
  const url = `${API_URL}/${productId}`;

  return axios
    .put(url, updatedProductData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Gagal mengupdate produk: ", error);
      throw error;
    });
};
