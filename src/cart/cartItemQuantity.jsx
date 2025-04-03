export default function CartItemQuantity({ item, removeFromCart, addToCart }) {
  return (
    <div className="cart-Quantity">
      <button onClick={() => addToCart(item)}>+</button>
      <span>{item.quantity}</span>
      <button onClick={() => removeFromCart(item)}>-</button>
    </div>
  );
}
