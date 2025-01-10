import css from "./Content.module.css";
import { Link } from "react-router-dom";

export const Content = () => {
  return (
    <>
      <div className={css.content}>
        <div className={css.wrapper}>
          <ul className={css.list}>
            <li className={css.item}>
              <figure className={css.box}>
                <figcaption className={css.dsc}>
                  <p>Pasja. Precyzja.</p>
                  <p>Doświadczenie.</p>
                </figcaption>
                <img
                  className={css.image}
                  alt="Mercedes-Benz front photo"
                  src="/car-detailing/mercedes640.jpg"
                />
              </figure>
            </li>
            <li className={css.item}>
              <figure className={css.box}>
                <figcaption className={css.dsc}></figcaption>
                <img />
              </figure>
            </li>
            <li className={css.item}>
              <figure className={css.box}>
                <figcaption className={css.dsc}></figcaption>
                <img />
              </figure>
            </li>
          </ul>
          <div className={css["btn-box"]}>
            <Link to="/offer">
              <div className={css.btn}>SPRAWDŹ NASZĄ OFERTĘ</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
