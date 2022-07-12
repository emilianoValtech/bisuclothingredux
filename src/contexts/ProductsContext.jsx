import React, { useState, createContext, useEffect } from 'react'
import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
  products: PRODUCTS,
  price:0,
  totalPrice: 0,
  setProduct: () => null,
})

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(PRODUCTS)
  const value = {products, setProducts}

  return <ProductsContext.Provider value={value}>
    {children}
  </ProductsContext.Provider>
}