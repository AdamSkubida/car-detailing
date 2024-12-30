import css from "./Gallery.module.css";

export const Gallery = () => {
  return (
    <>
      <div className={css.gallery}>
        <div className={css.wrapper}>
          <img className={css.image} src="/car-detailing/engine.jpg" alt="" />
          <img className={css.image} src="/car-detailing/civic.jpg" alt="" />
          <img
            className={css.image}
            src="/car-detailing/porshe-interior.jpg"
            alt=""
          />
          <img
            className={css.image}
            src="/car-detailing/side-detailing.jpg"
            alt=""
          />
          <img className={css.image} src="/car-detailing/foam.jpg" alt="" />
          <img
            className={css.image}
            src="/car-detailing/wheel-cleaning.jpg"
            alt=""
          />
          <img
            className={css.image}
            src="/car-detailing/bmw-interior.jpg"
            alt=""
          />
          <img
            className={css.image}
            src="/car-detailing/lamp-cleaning.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
