import css from "./Content.module.css";

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
        </div>
      </div>
    </>
  );
};
