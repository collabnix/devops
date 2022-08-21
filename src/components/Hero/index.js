import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import docusaurus from "../../../static/img/Dockerlabs.png";

//styles import
import styles from "./styles.module.css";

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero-primary", styles.heroBanner)}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--lg" to="/docs/intro">
              Read the docs Beginners | Intermediate | Advanced
            </Link>
          </div>
        </div>
      </div>
      <img src={docusaurus} />
    </header>
  );
}

export default Hero;
