import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../lib/reducer';
import Image from 'next/image';

function Product({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="group">
      <Image
        src={product.imageSrc}
        alt={product.imageAlt}
        width={250}
        height={250}
        className="hover:opacity-75 object-contain text-center mx-auto"
      />
      <h3 className="mt-4 text-sm text-gray-700 text-center">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>

      <button onClick={handleAddToCart} className="bg-slate-500 text-white p-4">
        Aggiungi al carrello
      </button>
    </div>
  );
}

export default Product;
