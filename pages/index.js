import Header from './components/Header';
import { products } from '../lib/products';
import Product from './components/Product';

export default function Home() {
  console.log(products);
  return (
    <>
      <Header />
      <div className="container mx-auto pt-4">
        <div className="pb-4">PRODUCTS</div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, i) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
