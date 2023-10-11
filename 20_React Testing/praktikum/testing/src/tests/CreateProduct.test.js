import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./CreateProduct";

describe("CreateProduct", () => {
  it("renders headline", () => {
    render(<CreateProduct />);
    expect(screen.getByText("Product Name: ")).toBeInTheDocument();
    expect(screen.getByText("Product Category: ")).toBeInTheDocument();
    expect(screen.getByText("Image Product: ")).toBeInTheDocument();
  });

  it("render all input forms", () => {
    render(<CreateProduct />);

    const inputProductName = screen.getByLabelText("Product Name:");
    fireEvent.change(inputProductName, {
      target: { value: "Product 1" },
    });

    const inputProductCategory = screen.getByLabelText("Product Category:");
    fireEvent.change(inputProductCategory, {
      target: { value: "Baju" },
    });

    const inputProductPrice = screen.getByLabelText("Product Price:");
    fireEvent.change(inputProductPrice, {
      target: { value: "50" },
    });

    const imageFile = new File(['image content'], 'image.png', {
      type: 'image/png',
    });

    const inputProductImage = screen.getByLabelText("Image of Product:");
    fireEvent.change(inputProductImage, {
      target: { files: [imageFile] },
    });

    // submit
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    // assert form submission
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Baju")).toBeInTheDocument();
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getByText("List Products")).toBeInTheDocument();
  });

  it('test product name input', () => {
    render(<CreateProduct />);
    const inputProductName = screen.getByLabelText('Product Name:');
    fireEvent.change(inputProductName, {
      target: { value: 'Baju' },
    });
    expect(screen.getByText('Baju')).toBeInTheDocument();
  });

  it('test product category input', () => {
    render(<CreateProduct />);
    const inputProductCategory = screen.getByLabelText('Product Category:');
    fireEvent.change(inputProductCategory, {
      target: { value: 'Celana' },
    });
    expect(screen.getByText('Celana')).toBeInTheDocument();
  });

  it('test product price input', () => {
    render(<CreateProduct />);
    const inputProductPrice = screen.getByLabelText('Product Price:');
    fireEvent.change(inputProductPrice, {
      target: { value: '75' },
    });
    expect(screen.getByText('$75')).toBeInTheDocument();
  });
});
