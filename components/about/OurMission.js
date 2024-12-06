import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const OurMission = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
      <ScrollAnimationWrapper>
        <motion.div
          className="flex items-center justify-between flex-col sm:flex-row gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <motion.div className="h-full w-full" variants={scrollAnimation}>
            <Image
              src="/assets/mission.svg"
              alt=""
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </motion.div>
          <div>
            <h3 className="text-3xl mb-4">Our Mission</h3>
            <p className="mb-2 text-justify sm:text-left">
              At CrazyDevs, our mission is to empower businesses through
              innovative, high-quality software solutions. We strive to create
              technology that simplifies complex challenges, drives growth, and
              delivers exceptional value.
            </p>
            <p className="mb-2 text-justify sm:text-left">
              With a commitment to collaboration and excellence, we aim to
              bridge the gap between vision and reality, enabling our clients to
              achieve their goals in an ever-evolving digital world.
            </p>
            <p className="text-justify sm:text-left">
              Our focus is on crafting scalable, reliable, and user-friendly
              software that not only meets today’s needs but anticipates
              tomorrow’s opportunities. Together, we build the tools that shape
              the future.
            </p>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default OurMission;
