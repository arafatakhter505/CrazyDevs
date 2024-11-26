import Image from "next/image";
import React from "react";

const Service = ({ serialNum, icon, name }) => {
  return (
    <div className="bg-white hover:border-orange-500 border-2 border-white-300 p-10 shadow rounded-lg text-left transition-all">
      <div className="flex justify-between gap-6">
        <h4 className="text-gray-400 font-bold text-4xl">{serialNum}</h4>
        <Image src={icon} width={80} height={91} alt={name} />
      </div>
      <h3 className="font-medium mt-5">{name}</h3>
    </div>
  );
};

export default Service;
