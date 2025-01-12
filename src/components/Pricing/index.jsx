import { useState } from "react";
import css from "./Pricing.module.css";
import { offersData } from "./offersData";

export const Pricing = () => {
  const options = [
    "POWOŁOKA CERAMICZNA",
    "KOREKTA LAKIERU",
    "CZYSZCZENIE WNĘTRZA",
    "MYCIE SAMOCHODU",
  ];

  const [activeOption, setActiveOption] = useState(options[0]);

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
          <div className={css.offers}>
            <div className={css.box}>
              {offersData[activeOption].map((offer) => (
                <div key={offer.title} className={css["offer-card"]}>
                  <h3 className={css["offer-title"]}>{offer.title}</h3>
                  <p className={css["offer.desc"]}>{offer.desc}</p>
                  <p className={css["offer-price"]}>{offer.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
