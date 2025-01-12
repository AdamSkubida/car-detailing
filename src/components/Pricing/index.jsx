import { useState } from "react";
import css from "./Pricing.module.css";

export const Pricing = () => {
  const options = [
    "POWOŁOKA CERAMICZNA",
    "KOREKTA LAKIERU",
    "CZYSZCZENIE WNĘTRZA",
    "MYCIE SAMOCHODU",
  ];

  const [activeOption, setActiveOption] = useState("POWOŁOKA CERAMICZNA");

  const handleClick = (option) => {
    setActiveOption(option);
    console.log(`option: ${option}`);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.options}>
            <ul className={css["option-list"]}>
              {options.map((option) => (
                <li
                  key={option}
                  className={`${css["option-item"]} ${
                    activeOption === option ? css.active : ""
                  }`}
                  onClick={() => handleClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className={css.offers}></div>
        </div>
      </div>
    </>
  );
};
