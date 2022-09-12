import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    link: "/docs/category/cicd",
    title: "CI/CD",
    description: <>Explore the CI/CD opportunities that you can learn</>,
  },
  {
    link: "/docs/category/observability",
    title: "Observability",
    description: (
      <>Monitor the usage and other metrics of your remote cluster</>
    ),
  },
  {
    link: "/docs/category/provisioning",
    title: "Provisioning ",
    description: <>Automate the boring tasks and focus on development</>,
  },
  {
    link: "/docs/category/orchestration",
    title: "Orchestration ",
    description: (
      <>Orchestrate the behaviour of the containers using kubernetes.</>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.card}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          {FeatureList.map((props, idx) => (
            <a href={props.link}>
              <Feature key={idx} {...props} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
