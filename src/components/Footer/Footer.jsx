import React from "react";
import { footerNavItems } from "./FooterItem";
import { Link } from "react-router-dom";
import { footerPaySystem } from "./FooterItem";

const Footer = () => {
  return (
    <footer className="footer" data-test-id="footer">
      <div className="container">
        {footerNavItems.map((item, index) => {
          return (
            <div className="womens-block-header" key={index}>
              <h2
                className="footer__nav-title womens-block-title"
                key={item.id}
              >
                {item.title}
              </h2>
              <ul className="footer-nav-items womens-block-nav">
                {item.items.map((el) => {
                  return (
                    <Link
                      to={`/${el.path}`}
                      data-test-id={`footer-nav-link-${el.path}`}
                      key={el.id}
                      className="footer-link womens-block-nav"
                    >
                      {el.picture ? (
                        <img
                          src={el.picture}
                          alt="icon"
                          className="footer-icon"
                        />
                      ) : (
                        ""
                      )}
                      <li className="footer-nav-item">{el.nameItem}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="contacts-footer">
        <div className="container contacts-footer-block">
          <p className="contacts-footer-block-item">
            Copyright © 2032 all rights reserved
          </p>
          <div className="contacts-footer-block-icons">
            {footerPaySystem.map((item) => {
              return <img src={item.image} alt="pay" key={item.id} />;
            })}
          </div>
          <p className="contacts-footer-block-item">Clevertec.ru/training</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
