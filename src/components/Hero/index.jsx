import React from "react";
import css from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={css.hero}>
      <video autoPlay muted loop className={css.video}>
        <source src="/car-detailing/detailing_hero1280.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={css.content}>
        <h1>Welcome to Our Website</h1>
        <p>Explore the best services we offer.</p>
      </div>
    </div>
  );
};
