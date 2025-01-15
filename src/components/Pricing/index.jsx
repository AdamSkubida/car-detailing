import { useState, useEffect, useCallback } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleClick = (option) => {
    setActiveOption(option);
    console.log(`option: ${option}`);
  };

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.options}>
            <div className={css["select-label"]}>Wybierz Opcję</div>
            {isMobile ? (
              <select
                className={css["mobile-option-list"]}
                value={activeOption}
                onChange={(e) => handleClick(e.target.value)}
              >
                {options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : (
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
            )}
          </div>
          <div className={css.offers}>
            <div className={css.box}>
              {offersData[activeOption].map((offer) => (
                <div className={css["card-wrap"]}>
                  <div key={offer.title} className={css["offer-card"]}>
                    <div className={css.separator}>
                      <h3 className={css["offer-title"]}>{offer.title}</h3>
                      <p className={css["offer-dsc"]}>{offer.desc}</p>
                    </div>
                    <p className={css["offer-price"]}>{offer.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
