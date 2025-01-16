import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={css.header}>
        <div className={css.wrapper}>
          <nav className={css.navigation}>
            <ul className={`${css.list} ${css["navigation-list"]}`}>
              <Link to="/about">
                <li className={`${css.item} ${css["navigation-item"]}`}>
                  O nas
                </li>
              </Link>
              <Link to="/offer">
                <li className={`${css.item} ${css["navigation-item"]}`}>
                  Cennik
                </li>
              </Link>
            </ul>
          </nav>
          <div className={css.logo}>
            <Link to="/">
              <h2>CarDetailing</h2>
            </Link>
          </div>
          <div className={css.contact}>
            <ul className={`${css.list} ${css["contact-list"]}`}>
              <li className={`${css.item} ${css["contact-item"]}`}>
                +48 987 654 321
              </li>
              <li className={`${css.item} ${css["contact-item"]}`}>
                detailing@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${css["small-header"]} ${isScrolled ? css["show"] : ""}`}
      >
        <div className={css["small-wrapper"]}>
          <nav className={css["small-navigation"]}>
            <ul className={`${css["small-list"]} ${css["small-list"]}`}>
              <Link to="/about">
                <li
                  className={`${css["small-item"]} ${css["navigation-item"]}`}
                >
                  O nas
                </li>
              </Link>
              <Link to="/offer">
                <li
                  className={`${css["small-item"]} ${css["navigation-item"]}`}
                >
                  Cennik
                </li>
              </Link>
            </ul>
          </nav>
          <div className={css["small-logo"]}>
            <Link to="/">
              <h2>CarDetailing</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
