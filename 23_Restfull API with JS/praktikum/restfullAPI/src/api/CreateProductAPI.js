import axios from "axios";

const API_URL = "https://6520a233906e276284c4964d.mockapi.io/products";

export const createProductAPI = (product) => {
  console.log(product)
  return axios
    .post(API_URL, product)
    .then((response) => {
      console.log(response.data)
      return response.data;
    })
    .catch((error) => {
      alert("Gagal menyimpan produk: ", error);
      throw error;
    });
};
