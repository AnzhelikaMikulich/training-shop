import React from "react";
import { PAY_SYSTEM } from "../../constants/pay";

const PaySystem = () => {
  return (
    <div className="contacts-footer-block-icons pay-icons">
      {PAY_SYSTEM.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="pay" />
          </div>
        );
      })}
    </div>
  );
};

export default PaySystem;
