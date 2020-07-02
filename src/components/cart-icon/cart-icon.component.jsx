import React  from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux';
import {toggelCartHidden} from './../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

const CartIcon =({toggelCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggelCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>
            {itemCount}
        </span>
    </div>
)


// const mapStateToProps = ({cart:{cartItems}}) => ({
//     itemCount: cartItems.reduce(
//         (accumulatedQuantity,cartItem) => accumulatedQuantity + cartItem.quantity
//         ,0)
// })


const  mapStateToProps = createStructuredSelector(
                                                {
                                                    itemCount:selectCartItemsCount
                                                }
                                                )

const mapDispatchToProps=(dispatch)=>(
    {
        toggelCartHidden:()=>dispatch(toggelCartHidden())
    }
)

export default connect (mapStateToProps,mapDispatchToProps) (CartIcon) ;