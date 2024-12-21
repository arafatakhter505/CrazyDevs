import React, { useMemo } from "react";
import Image from "next/image";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";

const ServiceCard = ({ service }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper>
      <motion.div
        variants={scrollAnimation}
        className="bg-white hover:border-orange-500 border-2 border-white-300 p-10 shadow rounded-lg text-left transition-all "
      >
        <Image src={service.icon} width={80} height={91} alt={service.name} />
        <h3 className="font-medium">{service.name}</h3>
        <p>{service.description}</p>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default ServiceCard;
