import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeButton = ({price, removeElements}) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51Nt1PXSJ0S4pTZDUgQv44tiGjdEYZg6WuSy6OU6IlReGFAUH1pp4sBxUDMzCkfhnFLpMkTS45uEKPdj1km9GezlK00ImWV5ELi"

    const onToken = (token) =>{
        removeElements()
        alert("successful")
        
        axios.post("http://localhost:8080/payment", {data:{
            token: token,
            amount: priceForStripe
        }}).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <StripeCheckout 
        label='Pay Now'
        name='Footware Store'
        billingAddress
        shippingAddress
        description={`Your Total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}/>
    );
};

export default StripeButton;