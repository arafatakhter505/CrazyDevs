import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Service = ({ url, icon, name }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(url)}
      className="bg-white hover:border-orange-500 border-2 border-white-300 p-10 shadow rounded-lg text-left transition-all cursor-pointer"
    >
      <Image src={icon} width={80} height={91} alt={name} />
      <h3 className="font-medium mt-6">{name}</h3>
    </div>
  );
};

export default Service;
