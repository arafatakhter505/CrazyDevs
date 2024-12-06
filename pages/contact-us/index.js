import React from "react";
import Image from "next/image";
import SeoHead from "../../components/SeoHead";
import Layout from "../../components/Layout/Layout";

const ContactUs = () => {
  return (
    <>
      <SeoHead title="CrazyDevs" />
      <Layout>
        <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto py-6 sm:py-16">
          <Image
            src="/assets/contact-us.svg"
            alt=""
            quality={100}
            width={612}
            height={383}
            layout="responsive"
          />
        </div>
      </Layout>
    </>
  );
};

export default ContactUs;
