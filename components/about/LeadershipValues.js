import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../../utils/getScrollAnimation";

const LeadershipValues = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const values = [
    {
      id: 1,
      title: "Ownership - Take responsibility and own the challenges",
      value: [
        "Client partnership – We consistently exceed client expectations and suggest better solutions.",
        "Grow people – We hire, develop and care for people, being the best employer for them.",
        "Organizational ownership – we love our organization and are frugal, innovative, and simplified for better results. Organizational success brings success for all.  ",
      ],
    },
    {
      id: 2,
      title:
        "Agility & Excellence - Deliver the best solutions, and stay agile beyond boundaries",
      value: [
        "We strive for excellence; we lead by example.",
        "We plan agile, deliver results in a short cycle, and make continuous improvements.",
        "We strive relentlessly, and we take action for continuous improvement.",
      ],
    },
    {
      id: 3,
      title: "Honesty - Say what you think and do what you say",
      value: [
        "In all our actions, we are always ethical and sincere.",
        "We share our views and concerns, even in disagreements – we strive to be the trusted advisor to our clients and colleagues.",
        "We are admired and respected for our integrity and fairness.",
      ],
    },
    {
      id: 4,
      title: "Passion & Commitment - Be reliable, dedicated, and smart working",
      value: [
        "We love what we do, and we do what we love.",
        "Passion enables us to learn and be curious.",
        "We strive to deliver what we commit, thus earning trust and respect.",
      ],
    },
    {
      id: 5,
      title: "Team Spirit - Be humble and value relationships.",
      value: [
        "We stay humble and work as a team. Humility and empathy are at our core.",
        "Our success brings broader responsibilities and challenges. We live that expectation.",
        "We value relationships with our clients, employees, shareholders, and society; we continuously build on them.",
      ],
    },
  ];

  return (
    <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto py-6 sm:py-16">
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <h3 className="text-3xl text-center mb-12">Leadership Values</h3>
          <div className="flex justify-between flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="space-y-6 w-full sm:w-1/2">
              {values.slice(0, 3).map((item, index) => (
                <div key={index} className="border-b border-b-gray-500 pb-4">
                  <button
                    className="w-full text-left text-lg"
                    onClick={() => toggleAnswer(item.id)}
                  >
                    {item.title}
                  </button>
                  {activeIndex === item.id && (
                    <ul className="mt-4 list-disc space-y-1 px-6">
                      {item.value.map((valueItem, i) => (
                        <li key={i}>{valueItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-6 w-full sm:w-1/2">
              {values.slice(3).map((item, index) => (
                <div key={index} className="border-b border-b-gray-500 pb-4">
                  <button
                    className="w-full text-left text-lg"
                    onClick={() => toggleAnswer(item.id)}
                  >
                    {item.title}
                  </button>
                  {activeIndex === item.id && (
                    <ul className="mt-4 list-disc space-y-1 px-6">
                      {item.value.map((valueItem, i) => (
                        <li key={i}>{valueItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default LeadershipValues;
