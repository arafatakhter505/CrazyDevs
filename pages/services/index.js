import React from "react";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import servicesList from "../../utils/servicesList";
import ServiceCard from "../../components/ServiceCard";
import PageHero from "../../components/PageHero";

const Services = () => {
  return (
    <>
      <SeoHead title="CrazyDevs" />
      <Layout>
        <PageHero
          heading={"Our Technological"}
          strongHeading={"Solutions"}
          img={"/assets/services-hero.svg"}
          content={
            "Transforming ideas into powerful software solutions. Our team specializes in custom development, mobile apps, and enterprise integrations to help your business stay ahead in a digital-first world."
          }
        />
        <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12">
          {servicesList.map((item) => (
            <ServiceCard key={item.id} service={item} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Services;
