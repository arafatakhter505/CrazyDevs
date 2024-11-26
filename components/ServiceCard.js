import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white hover:border-orange-500 border-2 border-white-300 p-10 shadow rounded-lg text-left transition-all">
      <Image src={service.icon} width={80} height={91} alt={service.name} />
      <h3 className="font-medium">{service.name}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
