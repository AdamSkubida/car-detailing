import css from "./Us.module.css";
import { employers } from "./employers";

export const Us = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.dsc}>
            Lubisz<span>,</span> gdy Twój samochód lśni<span>?</span> My też
            <span>!</span> Zajmujemy się profesjonalnym detailingiem
            <span>,</span> oferując pielęgnację
            <span>,</span> ochronę i renowację lakieru<span>.</span> Zaufaj nam
            <span>,</span> a Twój samochód odwdzięczy się pięknym wyglądem
            <span>!</span>
          </div>
          <div className={css["mobile-dsc"]}>
            Lubisz<span>,</span> gdy Twój samochód lśni<span>?</span> My też
            <span>!</span> Profesjonalny detailing<span>,</span> ochrona i
            renowacja lakieru<span>.</span> Zaufaj nam<span>!</span>
          </div>
          <h2 className={css["team-title"]}>Nasz zepsół</h2>
          <div className={css.team}>
            {employers.map((employee) => (
              <figure className={css.teammate}>
                <img className={css.photo} src={employee.photo} alt="" />
                <figcaption>
                  <p className={css.name}>{employee.name}</p>
                  <ul className={css["social-list"]}>
                    <a
                      href={employee.fb}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className={css["social-item"]}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          width="30px"
                          fill="#fff"
                          className={css.icon}
                        >
                          <path d="M19 6h5V0h-5a7 7 0 0 0-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.54.46-1 1-1z" />
                        </svg>
                      </li>
                    </a>
                    <a
                      href={employee.ig}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className={css["social-item"]}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          width="30px"
                          fill="#fff"
                          className={css.icon}
                        >
                          <path d="M16 2.88c4.28 0 4.78.02 6.46.1 1.56.06 2.4.33 2.97.54.75.3 1.28.64 1.84 1.2.56.56.9 1.1 1.2 1.84.22.56.48 1.4.55 2.97.07 1.68.1 2.19.1 6.46s-.03 4.78-.1 6.46a8.77 8.77 0 0 1-.55 2.97 4.94 4.94 0 0 1-1.2 1.84c-.56.56-1.09.9-1.83 1.2-.57.22-1.42.48-2.97.55-1.69.07-2.2.1-6.46.1s-4.79-.03-6.47-.1a8.77 8.77 0 0 1-2.97-.55 4.95 4.95 0 0 1-1.84-1.2c-.56-.56-.9-1.09-1.2-1.83a8.81 8.81 0 0 1-.55-2.97c-.07-1.69-.09-2.2-.09-6.46s.02-4.79.1-6.47c.06-1.56.33-2.4.54-2.97.3-.74.64-1.28 1.2-1.83.56-.57 1.1-.91 1.84-1.2a8.8 8.8 0 0 1 2.97-.55c1.68-.08 2.18-.1 6.46-.1zM16 0c-4.34 0-4.89.02-6.6.1-1.7.07-2.86.34-3.88.74A7.8 7.8 0 0 0 2.7 2.69 7.83 7.83 0 0 0 .84 5.52C.44 6.54.17 7.7.09 9.4.02 11.11 0 11.66 0 16s.02 4.89.1 6.6c.07 1.7.34 2.86.74 3.87a7.8 7.8 0 0 0 1.85 2.84 7.82 7.82 0 0 0 2.83 1.85c1.02.39 2.18.67 3.88.74 1.7.08 2.25.1 6.6.1s4.88-.02 6.59-.1c1.7-.07 2.87-.35 3.88-.74 1.05-.41 1.94-.96 2.83-1.85s1.44-1.78 1.84-2.83c.4-1.02.67-2.18.75-3.88.07-1.7.1-2.25.1-6.6s-.03-4.88-.1-6.59c-.08-1.7-.35-2.87-.75-3.88a7.5 7.5 0 0 0-1.83-2.84A7.82 7.82 0 0 0 26.48.84C25.46.44 24.3.17 22.6.1 20.9.02 20.35 0 16 0z" />
                          <path d="M16 7.78a8.22 8.22 0 1 0 0 16.44 8.22 8.22 0 0 0 0-16.44zm0 13.55a5.33 5.33 0 1 1 0-10.66 5.33 5.33 0 0 1 0 10.66zM26.46 7.46a1.92 1.92 0 1 1-3.84 0 1.92 1.92 0 0 1 3.84 0z" />
                        </svg>
                      </li>
                    </a>
                    <a href={employee.mail}>
                      <li className={css["social-item"]}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                          width="38px"
                          fill="#fff"
                          className={css.icon}
                        >
                          <path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm312-240L168-611v347h624v-347L480-432Zm0-85 312-179H168l312 179Zm-312-94v-85 432-347Z" />
                        </svg>
                      </li>
                    </a>
                  </ul>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
