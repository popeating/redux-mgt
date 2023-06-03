import Header from './components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../lib/reducer';
export default function Home() {
  const totalValue = useSelector((state) => state.totalValue);
  const totalItems = useSelector((state) => state.totalItems);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = ({ productId, price, quantity }) => {
    console.log(productId, price);
    dispatch(
      removeFromCart({ id: productId, price: price, quantity: quantity })
    );
  };

  return (
    <>
      <Header />
      <div className="container mx-auto pt-4">MY CART</div>
      {totalItems > 0 ? (
        <div className="flex flex-col w-1/2 mx-auto gap-y-1">
          <div className="flex flex-row justify-between ">
            <span className="basis-1/4 uppercase font-bold">Product</span>
            <span className="basis-1/4 text-right uppercase font-bold">
              Price
            </span>
            <span className="basis-1/4 text-right uppercase font-bold">
              Qty
            </span>
            <span className="basis-1/4 text-right uppercase font-bold"></span>
          </div>
          {cart.map((item, key) => (
            <div key={key} className="flex flex-row justify-between ">
              <span className="basis-1/4">{item.name}</span>
              <span className="basis-1/4 text-right">
                $ {item.price * item.quantity}
              </span>
              <span className="basis-1/4 text-right">{item.quantity}</span>

              <span className="basis-1/4 text-right">
                <button
                  className="p-2 bg-slate-200"
                  onClick={() =>
                    handleRemoveFromCart({
                      productId: item.id,
                      price: item.price,
                      quantity: item.quantity,
                    })
                  }
                >
                  X
                </button>
              </span>
            </div>
          ))}
          <div className="flex flex-row justify-between mt-4 border-t-2">
            <span className="basis-full text-right uppercase font-bold">
              Total: ${totalValue}
            </span>
          </div>
        </div>
      ) : (
        <div className="container mx-auto pt-4">Your cart empty</div>
      )}
    </>
  );
}
