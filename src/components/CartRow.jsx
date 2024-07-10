import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { removeCart, incrementQuantity, decrementQuantity } from '../utility/Store/cartSlice';
import { ThemeStore } from '../context/ThemeContext';

const CartRow = ({ cartObj }) => {
  let { dataObj, quantity } = cartObj;
  let dispatch = useDispatch();
  let { theme } = useContext(ThemeStore);
  let { thumbnail, price, rating, title, id } = dataObj;

  // Conditional classes based on the theme
  const rowClass = theme === 'dark'
    ? 'bg-gray-900 text-gray-300 hover:bg-gray-800 transition-colors'
    : 'bg-white text-gray-800 hover:bg-gray-50 transition-colors';

  const btnClass = theme === 'dark'
    ? 'btn btn-outline btn-error text-red-400 border-red-500 hover:bg-red-600 hover:text-white transition-colors'
    : 'btn btn-outline btn-error text-red-500 border-red-500 hover:bg-red-100 transition-colors';

  return (
    <tr className={rowClass}>
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12 bg-gray-200">
              <img src={thumbnail} alt="productPhoto" />
            </div>
          </div>
          <div>
            <div className="font-semibold">{title}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">{rating}</td>
      <td className="py-4 px-6">${(price * quantity).toFixed(2)}</td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-2">
          <span
            className="cursor-pointer text-blue-400 hover:text-blue-500 transition-colors"
            onClick={() => dispatch(incrementQuantity(id))}
          >
            🔼
          </span>
          <span className="text-lg font-medium">{quantity}</span>
          <span
            className="cursor-pointer text-blue-400 hover:text-blue-500 transition-colors"
            onClick={() => dispatch(decrementQuantity(id))}
          >
            🔽
          </span>
        </div>
      </td>
      <td className="py-4 px-6">
        <button
          className={btnClass}
          onClick={() => dispatch(removeCart(id))}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

export default CartRow;
