import { Link } from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={css.header}>
        <nav className={css.navigation}>
          <ul className={`${css.list} ${css["navigation-list"]}`}>
            <li className={`${css.item} ${css["navigation-item"]}`}>O nas</li>
            <li className={`${css.item} ${css["navigation-item"]}`}>Cennik</li>
          </ul>
        </nav>
        <div className={css.logo}>
          <Link to="/">
            <h2>DeresDetailing</h2>
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
    </>
  );
};
