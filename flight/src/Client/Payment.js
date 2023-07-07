import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Payment.js"
import { useLocation } from "react-router-dom";
// import axios from "axios";
 const Payment=()=> {
    const location=useLocation();
    var amount=location.state.value
    
    return (
        <div className="container">
            <center>
        <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: {amount},
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                    
                }}
                
            />
        </PayPalScriptProvider>
        </center>
        </div>
    );

}
export default Payment