import React, { useContext } from 'react';
import CartRow from './CartRow';
import { useSelector, useDispatch } from 'react-redux';
import { sortAscending, sortDescending, clearCart } from '../utility/Store/cartSlice';
import { ThemeStore } from '../context/ThemeContext';

const Cart = () => {
  let cartItems = useSelector((store) => store.cart.items);
  let dispatch = useDispatch();
  let { theme } = useContext(ThemeStore);

  const containerClass = theme === 'dark'
    ? 'overflow-x-auto p-6 bg-slate-800 r shadow-md text-white'
    : 'overflow-x-auto p-6 bg-gray-100  shadow-md text-gray-900';

  const tableClass = theme === 'dark'
    ? 'min-w-full bg-gray-900 border border-gray-700  shadow-md'
    : 'min-w-full bg-white border border-gray-200  shadow-md';

  const theadClass = theme === 'dark'
    ? 'bg-gray-700 text-gray-300 text-lg'
    : 'bg-gray-200 text-gray-700 text-lg';

  const buttonClass = theme === 'dark'
    ? 'btn btn-block btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4  shadow-md transition-all'
    : 'btn btn-block btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4  shadow-md transition-all';

  return (
    <div className={containerClass}>
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl text-orange-600">Your cart is empty. Please add items to your cart.</p>
        </div>
      ) : (
        <>
          <table className={tableClass}>
            <thead className={theadClass}>
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Rating</th>
                <th className="py-3 px-6 text-left">
                  <div className="flex items-center gap-2">
                    <span
                      className="cursor-pointer hover:text-blue-300 transition-colors"
                      onClick={() => dispatch(sortAscending())}
                    >
                      🔼
                    </span>
                    <span className="font-semibold">Price</span>
                    <span
                      className="cursor-pointer hover:text-blue-300 transition-colors"
                      onClick={() => dispatch(sortDescending())}
                    >
                      🔽
                    </span>
                  </div>
                </th>
                <th className="py-3 px-6 text-left">Quantity</th>
                <th className="py-3 px-6 text-left"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {cartItems.map((cartObj) => (
                <CartRow key={cartObj.dataObj.id} cartObj={cartObj} />
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-center">
            <button
              className={buttonClass}
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
