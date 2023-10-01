import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./CreateProduct"

describe('CreateProduct', () => {
  it('renders headline', () => {
    render(<CreateProduct />);
    const headlines = screen.getAllByText(/Product Name/i);
    expect(headlines[0]).toBeInTheDocument();
  });
})

//   it('Product Name Tidak Boleh Kosong', () => {
//     render(<CreateProduct />);

//     const productNameInput = screen.getByLabelText(/Product Name/i);

//     // Memasukkan input kosong
//     fireEvent.change(productNameInput, { target: { value: '' } });

//     // Menemukan elemen pesan validasi dan memeriksa keberadaannya
//     const validationMessage = screen.getByText("Product Name harus diisi.");
//     expect(validationMessage).toBeInTheDocument();
//   });


//   it('Product Name Tidak Boleh Menggunakan Spesial Karakter', () => {
//     render(<CreateProduct />);

//     const productNameInput = screen.getByLabelText(/Product Name/i);
//     const invalidName = '@Test#Product';

//     fireEvent.change(productNameInput, { target: { value: invalidName } });

//     const validationMessage = screen.getByText(/Product Name tidak boleh mengandung karakter khusus/i);
//     expect(validationMessage).toBeInTheDocument();
//   });

//   it('Product Name Tidak Boleh Lebih Dari 25 characters', () => {
//     render(<CreateProduct />);

//     const productNameInput = screen.getByLabelText(/Product Name/i);
//     const longName = 'IniAdalahNamaProdukYangSangatPanjangYangMelebihi25Karakter';

//     fireEvent.change(productNameInput, { target: { value: longName } });

//     const validationMessage = screen.getByText(/Nama Produk tidak boleh lebih dari 25 karakter/i);
//     expect(validationMessage).toBeInTheDocument();
//   });
// })