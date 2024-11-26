import React from "react";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import ServiceHero from "../../components/ServiceHero";
import servicesList from "../../utils/servicesList";
import ServiceCard from "../../components/ServiceCard";

const Services = () => {
  return (
    <>
      <SeoHead title="CrazyDevs" />
      <Layout>
        <ServiceHero />
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
