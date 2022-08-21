import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

//components import
import Hero from "../components/Hero";
// import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Collabnix Devops`}
      description="Description will go into a meta tag in <head />"
    >
      <Hero />
      <HomepageFeatures />
    </Layout>
  );
}
