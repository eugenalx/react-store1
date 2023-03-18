import { useContext } from 'react';
import { ReactComponent as ShpoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.style.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShpoppingIcon className='shopping-icon'></ShpoppingIcon>
            <span className='item-count'>10</span>
        </div>

    );
}
export default CartIcon;