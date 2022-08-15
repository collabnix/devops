import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Continuous Integration and Deployment",
    description: <>Explore the CI/CD oppurtunities that you can learn</>,
  },
  {
    title: "Observability",
    description: (
      <>Monitor the usage and other metrics of your remote cluster</>
    ),
  },
  {
    title: "Provisioning ",
    description: <>Automate the boring tasks and focus on development</>,
  },
  {
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
