import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const pricrforstripe = price * 100;
  const publishableKey =
    "pk_test_51Hk8tMBNGfBN5CYbfp4pFIbeewwvShZWcnRnNxmmSuZuHRHt6LNjIaybxyqNYIIYh36ypXDVcaMTaROaG5RF6q2m007GXce7r1";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN clothing ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={pricrforstripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
