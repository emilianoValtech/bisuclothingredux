import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import ProductCard from '../product-card/ProductCard';
import './styles.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => {
        return (
         <ProductCard key={product.id} product={product}/>
        );
      })}
    </div>
  );
};

export default Shop;
