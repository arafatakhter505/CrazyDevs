import React, { useRef } from "react";
import Image from "next/image";
import SeoHead from "../../components/SeoHead";
import Layout from "../../components/Layout/Layout";
import { InlineWidget, PopupWidget } from "react-calendly";
import PageHero from "../../components/PageHero";

const ContactUs = () => {

  const consultationRef = useRef(null); 
// handle scroll
  const handleScroll = () => {
    consultationRef.current?.scrollIntoView({ behavior: "smooth" }); 
  };


  return (
    <>
      <SeoHead title="CrazyDevs" />
      <Layout>
        <div className=" mx-auto  sm:pt- min-h-screen  ">
          <PageHero
            heading={"Contact Us"}
            strongHeading={""}
            img={"/assets/contact-us.svg"}
            buttonText="Consultation Us"
            content={
              "Have a question or need assistance? Our team is here to provide tailored solutions, seamless support, and expert guidance to help you achieve your goals."
            }
            onButtonClick={handleScroll}
          />
          {/* consulatation calendar */}
          <div
            className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto h-auto mt-10"
            id="consultation"
            ref={consultationRef}
          >
            <InlineWidget
              styles={{
                height: "900px",
                width: "100%",
              }}
              url="https://calendly.com/tazahmedsoft/30min"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactUs;
