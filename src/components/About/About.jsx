import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Front End</h3>
              <p>
              I specialize in designing intuitive user interfaces using <span id="imp">Jetpack Compose</span> alongside <span>XML</span>.
              I create dynamic and visually appealing layouts, 
              ensuring seamless integration and an enhanced user experience in Android applications.
              </p>
            </div>
          </li>

          { <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Back End</h3>
              <p>
               Specializing in <span>Kotlin</span>, I engineer robust backend solutions. I focus on building scalable server-side applications that power seamless interactions for Android apps.
                My expertise ensures secure, optimized, and reliable backend functionalities
              </p>
            </div>
          </li>
/*
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
