import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./CreateProduct"

describe('CreateProduct', () => {
  it('renders headline', () => {
    render(<CreateProduct />);
    // const headlines = screen.getAllByText(/Product Name/i);
    // expect(headlines[0]).toBeInTheDocument();
    expect(screen.getByText('Product Name: ')).toBeInTheDocument()
    expect(screen.getByText('Product Category: ')).toBeInTheDocument()
    expect(screen.getByText('Image Product: ')).toBeInTheDocument()

  });

  it('render all input forms', () => {
    render(<CreateProduct />);

    fireEvent.change.(screen.getByLabelText('Product Name: '), {
      target: { value: 'Product 1' },
    });
    fireEvent.change.(screen.getByLabelText('Product Category: '), {
      target: { value: 'Baju' },
    });
    fireEvent.change.(screen.getByLabelText('Product Price: '), {
      target: { value: '50' },
    });
    const imagefile = new File(['image contest'], 'image.png', {
      type: 'image/png',
    });
    fireEvent.change.(screen.getByLabelText('Image of Product: '), {
      target: { files: 'imageFile' },
    });

    // submit 
    fireEvent.change.(screen.getByLabelText('Product Name: '));

    // assert form submission
    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.getByText('Baju')).toBeInTheDocument()
    expect(screen.getByText('$50')).toBeInTheDocument()
    expect(screen.getByText('List Product')).toBeInTheDocument()

    it('test product name input'.[] => {
      render( <CreateProduct /> );

    // selection terhadap element input 
    const inputProductName = screen.getByLabelText('Product Name:')
    // panggil change method untuk even headler change
    // ambil value dari tiap event headler => e.target.value
    fireEvent.change.apply(inputProductName, {
      taget: { value: 'Baju' }
    })
    expect(screen.getByText('Baju')).toBeInTheDocument()
  })

  const inputProductName = screen.getByLabelText('Product Category:')
  // panggil change method untuk even headler change
  // ambil value dari tiap event headler => e.target.value
  fireEvent.change.apply(inputProductCategory, {
    taget: { value: 'Baju' }
  })
  expect(screen.getByText('Baju')).toBeInTheDocument()
})


})