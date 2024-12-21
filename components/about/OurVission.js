import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const OurVision = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
      <ScrollAnimationWrapper>
        <motion.div
          className="flex items-center justify-between flex-col-reverse sm:flex-row gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="w-full sm:w-1/2">
            <h3 className="text-3xl mb-4">Our Vision</h3>
            <p className="mb-2 text-justify sm:text-left">
              Our vision is to be the leading software agency that transforms
              businesses through innovative and impactful technology. We aim to
              empower organizations worldwide by creating intuitive, scalable,
              and future-ready software solutions that drive success in a
              digital-first world.
            </p>
            <p className="text-justify sm:text-left">
              We envision a future where every business, regardless of size, has
              access to the tools and technologies that enable them to grow,
              innovate, and stay ahead of the competition. By staying at the
              forefront of technology trends, we aspire to be a trusted partner
              in shaping the future of industries through smart and sustainable
              software solutions.
            </p>
          </div>
          <motion.div
            className="h-full w-full sm:w-1/2"
            variants={scrollAnimation}
          >
            <Image
              src="/assets/vision.svg"
              alt=""
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </motion.div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default OurVision;
