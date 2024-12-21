import React from "react";
import css from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={css.hero}>
      <video autoPlay muted loop className={css.video}>
        <source src="/car-detailing/detailing_hero1280.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={css.offer}>
        <div className={css.product}>
          <h2 className={css.title}>Renowacja wnętrza</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
            height="150px"
            width="150px"
            viewBox="0 -960 960 960"
            className={css.icon}
          >
            <path d="m336-672 48-96v-24h-48v-72h252q15 0 25.5 10.5T624-828v36l-48 72H456v-48l-72 96h-48ZM312-96v-290q0-5 .5-9t2.5-8l139-269h122q22 10 35 29.5t13 43.5v503H312Zm72-72h168v-432h-54L384-379v211Zm0 0h168-168Z" />
          </svg>
        </div>
        <div className={css.product}>
          <h2 className={css.title}>Folie Ochronne</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
            height="150px"
            width="150px"
            viewBox="0 -960 960 960"
            className={css.icon}
          >
            <path d="m438-339 220-221-51-51-169 170-85-85-51 51 136 136Zm42 243q-135-33-223.5-152.84Q168-368.69 168-515v-229l312-120 312 120v229q0 146.31-88.5 266.16Q615-129 480-96Zm0-75q104-32.25 172-129t68-215v-180l-240-92-240 92v180q0 118.25 68 215t172 129Zm0-308Z" />
          </svg>
        </div>
        <div className={css.product}>
          <h2 className={css.title}>Ceramika</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
            height="150px"
            width="150px"
            viewBox="0 -960 960 960"
            className={css.icon}
          >
            <path d="M480-144 96-576l96-240h576l96 240-384 432Zm-86-468h172l-66-132h-40l-66 132Zm50 319v-247H224l220 247Zm72 0 220-247H516v247Zm130-319h126l-52-132H580l66 132Zm-458 0h126l66-132H241l-53 132Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
