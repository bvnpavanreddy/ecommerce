import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {CartItem} from '../cart-item/cart-item.component';
import {createStructuredSelector} from 'reselect'
import {selectCartItems}  from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom'
import {toggelCartHidden} from '../../redux/cart/cart.actions'



 const Cartdropdown =({cartItems ,history,dispatch})=>{
     return(
        <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.map(cartItem=><CartItem cartItem={cartItem} />)}
        </div>
       
        <CustomButton  onClick={()=>{
                                        history.push('/checkout')
                                        dispatch(toggelCartHidden())
                                    }}>Go To CheckOut</CustomButton>
    </div>
     )
 }

// const mapStateToProps = ({cart:{cartItems}}) => ({
//     cartItems
    
// })
    
const mapStateToProps = createStructuredSelector(
                                                 {
                                                     cartItems:selectCartItems,
                                                     
                                                 }
                                                 )




export default withRouter(connect(mapStateToProps) (Cartdropdown))