import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ShoppingCard.css";
import {
  removeItemFromCart,
  changeIncreaseQuantity,
  changeDecreaseQuantity,
} from "../../redux/actions/actions";

const ShoppingCard = ({ active, setActive }) => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const sumPrice = order.reduce((acc, current) => {
    return current.discount === null
      ? acc + current.price * current.quantity
      : (current.price -
          (current.price / 100) * parseInt(current.discount.match(/\d+/), 10)) *
          current.quantity;
  }, 0);

  function toggleCard() {
    setActive(false);
    if (setActive(false)) {
      document.body.style.overflow = "hidden";
      document.body.style.margin = "0 16px 0 0";
    } else {
      document.body.style.overflow = "";
      document.body.style.margin = "0 0px 0 0";
    }
  }

  return (
    <div
      className={
        active
          ? "popup-shopping-card popup-shopping-card-active"
          : "popup-shopping-card"
      }
    >
      <div className="popap-shopping-card-body">
        <div className="popap-shopping-card-content" data-test-id="cart">
          <div className="shoping-card-header">
            <h2 className="shoping-card-title">Shopping Cart</h2>
            <div
              onClick={() => toggleCard()}
              className="popap-shopping-card-close shopping-card-close-popap"
            ></div>
          </div>
          {console.log(order)}
          {order.length > 0 ? (
            <div className="shoping-card-notempty">
              <nav className="shoping-card-nav">
                <p className="nav-shopping-active">Item in Cart</p>
                <span>/</span>
                <p>Delivery Info</p>
                <span>/</span>
                <p>Payment</p>
              </nav>
              <div className="shoping-card-item-container">
                {order.map((item, index) => {
                  return (
                    <div
                      className="shoping-card-item"
                      key={`${item.id}_${index}`}
                      data-test-id="cart-card"
                    >
                      <div className="shoping-card-item-img">
                        {item.images.map((img) => {
                          if (img.color === item.color) {
                            return (
                              <img
                                key={img.url}
                                src={`https://training.cleverland.by/shop${img.url}`}
                                alt="img"
                              />
                            );
                          }
                        })}
                      </div>

                      <div className="shoping-card-item-description">
                        <p className="shoping-card-item-name">{item.name}</p>
                        <p className="shoping-card-item-color">
                          <span>{item.color}</span>,<span>{item.size}</span>
                        </p>
                        <div className="shoping-card-item-count">
                          <div className="shoping-card-item-counter">
                            <button
                              className="item-counter-decrease item-counter-card"
                              data-test-id="minus-product"
                              onClick={() =>
                                dispatch(
                                  changeDecreaseQuantity(
                                    item.id,
                                    item.color,
                                    item.size
                                  )
                                )
                              }
                            ></button>
                            <span>{item.quantity}</span>
                            <button
                              className="item-counter-increase item-counter-card"
                              data-test-id="plus-product"
                              onClick={() =>
                                dispatch(
                                  changeIncreaseQuantity(
                                    item.id,
                                    item.color,
                                    item.size
                                  )
                                )
                              }
                            ></button>
                          </div>
                          <p className="shoping-card-item-price">
                            {`$ ${
                              item.discount === null
                                ? (item.price * item.quantity).toFixed(2)
                                : (
                                    (item.price -
                                      (item.price / 100) *
                                        parseInt(
                                          item.discount.match(/\d+/),
                                          10
                                        )) *
                                    item.quantity
                                  ).toFixed(2)
                            }`}
                          </p>
                        </div>
                      </div>
                      <div
                        className="shoping-card-item-delete"
                        data-test-id="remove-product"
                        onClick={() =>
                          dispatch(
                            removeItemFromCart(item.id, item.color, item.size)
                          )
                        }
                      ></div>
                    </div>
                  );
                })}
              </div>
              <div className="shoping-card-total-price">
                <p className="shoping-card-total-price-title">Total</p>
                <p className="shoping-card-total">${sumPrice.toFixed(2)}</p>
              </div>
              <button className="shoping-card-btn further-btn">Further</button>
              <button className="shoping-card-btn viewcart-btn">
                View Cart
              </button>
            </div>
          ) : (
            <div className="shoping-card-empty">
              <span>Sorry,</span>
              <span>your cart</span>
              <span>is empty</span>
              <button
                onClick={() => toggleCard()}
                className="shoping-card-btn further-btn"
              >
                back to shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
