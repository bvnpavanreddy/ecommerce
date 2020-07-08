import React from  'react'
import StripeCheckout from 'react-stripe-checkout';

export const StripeButton = ({price})=>{
    const priceForStripe= price*100;
    const publishableKey='pk_test_diY6g34aoqE4XRk5vsDckbqH';

    const onToken= (token)=>{
        console.log(token);
        alert('payment successfull');
    }
    return(
        <StripeCheckout 
        label='Pay Now'
        name= 'crowns Pvt Ltd'
        billingAddress
        shippingAddress 
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your Total is $${price}`}
        amount ={priceForStripe}
        panelLabel = 'Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        
        />
    )
}



