import React from 'react';


const CheckOutStep = (props) => {
    return (
        <div  className="checkout-steps">
            <div className={props.step1 ? 'active' : '' } > Connexion </div>
            <div className={props.step2 ? 'active' : '' } > Livraison </div>
            <div className={props.step3 ? 'active' : '' } > Payement </div>
            <div className={props.step4 ? 'active' : '' } > Passer la commande </div>
        </div>
    );
};



export default CheckOutStep;
