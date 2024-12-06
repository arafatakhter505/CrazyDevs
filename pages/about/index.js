import React from "react";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import PageHero from "../../components/PageHero";
import OurMission from "../../components/about/OurMission";
import OurVision from "../../components/about/OurVission";
import LeadershipValues from "../../components/about/LeadershipValues";

const About = () => {
  return (
    <>
      <SeoHead title="CrazyDevs" />
      <Layout>
        <PageHero
          heading={"Our"}
          strongHeading={"Company"}
          img={"/assets/about-hero.svg"}
          content={
            "We create intelligent, scalable, and user-centric software solutions that empower businesses to thrive. From concept to deployment, our team delivers innovative, high-performance products tailored to your goals."
          }
        />
        <OurMission />
        <OurVision />
        <LeadershipValues />
      </Layout>
    </>
  );
};

export default About;
