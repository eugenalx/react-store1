import {CartItemContainer, ItemDetails, Name} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { id, imageUrl, price, name, quantity } = cartItem;
  
    return (
      <CartItemContainer key={id}>
        <img src={imageUrl} alt={`${name}`} />
        <ItemDetails>
          <Name>{name}</Name>
          <span className='price'>
            {quantity} x ${price}
          </span>
        </ItemDetails>
      </CartItemContainer>
    );
  };
  
  export default CartItem;