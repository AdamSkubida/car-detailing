import css from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={css.home}>
        <nav className={css.navigation}>
          <ul className={css.list}>
            <li className={css.item}>O nas</li>
            <li className={css.item}>Cennik</li>
          </ul>
        </nav>
      </div>
    </>
  );
};
