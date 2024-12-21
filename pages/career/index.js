import React from "react";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import PageHero from "../../components/PageHero";
import AvailableJob from "../../components/career/AvailableJob";

const Career = () => {
  return (
    <>
      <SeoHead title="CrazyDevs" />
      <Layout>
        <PageHero
          heading={"Join Our"}
          strongHeading={"Team"}
          img={"/assets/career-hero.svg"}
          content={
            "Be part of a dynamic team where innovation, creativity, and collaboration come together to create impactful software solutions."
          }
        />
        <AvailableJob />
      </Layout>
    </>
  );
};

export default Career;
