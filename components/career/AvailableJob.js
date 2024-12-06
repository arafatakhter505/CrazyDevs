import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import jobs from "../../utils/jobs";

const AvailableJob = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto py-6 sm:py-16">
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <h3 className="text-3xl text-center mb-12">
            {jobs?.length === 0 && "No "}
            Available Job Right Now
          </h3>
          {jobs?.length > 0 && (
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="shadow rounded-md border border-gray-500"
                >
                  <button
                    className="w-full text-left text-lg bg-white py-4 px-6 border-b border-b-gray-500 flex items-center justify-between gap-8"
                    onClick={() => toggleAnswer(index)}
                  >
                    <span className="font-medium">{job.title}</span>
                    <span className="hidden sm:block">
                      Salary: {job.salary}
                    </span>
                    <span className="hidden sm:block">
                      Vacancy: {job.vacancy}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="p-4 space-y-4">
                      <div>
                        <h3>
                          <span className="font-medium">Job Title: </span>
                          {job.title}
                        </h3>
                        <h3>
                          <span className="font-medium">Location: </span>
                          {job.location.city}
                        </h3>
                        <h3>
                          <span className="font-medium">Job Type: </span>
                          {job.location.type}
                        </h3>
                        <h3>
                          <span className="font-medium">Salary: </span>
                          {job.salary}
                        </h3>
                        <h3>
                          <span className="font-medium">Vacancy: </span>
                          {job.vacancy}
                        </h3>
                      </div>
                      <div>
                        <h3 className="font-medium">Job Description:</h3>
                        <p>{job.aboutRole}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Key Responsibilities:</h3>
                        <ul className="list-disc text-[#4F5665] space-y-1 pl-6">
                          {job.responsibilities?.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium">
                          Required Skills & Experience:
                        </h3>
                        <ul className="list-disc text-[#4F5665] space-y-1 pl-6">
                          {job.requirements?.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium">Preferred Skills:</h3>
                        <ul className="list-disc text-[#4F5665] space-y-1 pl-6">
                          {job.niceToHave?.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      {job.whatWeOffer.length > 0 && (
                        <div>
                          <h3 className="font-medium">What We Offer:</h3>
                          <ul className="list-disc text-[#4F5665] space-y-1 pl-6">
                            {job.whatWeOffer?.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div>
                        <h3 className="font-medium">How to Apply:</h3>
                        <p>{job.howToApply}</p>
                      </div>
                      {job.applyLink && (
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">Apply Link:</h3>
                          <a href={job.applyLink}>{job.applyLink}</a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default AvailableJob;
