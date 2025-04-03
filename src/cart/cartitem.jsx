import CartItemQuantity from "/cartitemquanity";

export default function CartItem({ item, removeFromCart, addToCart }) {
  return (
    <li className="cart-item">
      <div>
        {item.img}
        {item.name}
      </div>
      <CartItemQuantity
        item={item}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </li>
  );
}
