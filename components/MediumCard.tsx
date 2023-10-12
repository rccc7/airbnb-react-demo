import Image from "next/image";
import React from "react";

function MediumCard({ img, title, imgAttribution }: MediumCardData) {
  return (
    // Here, transform transition duration-300 ease-out manages the transitions effects
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out text-center">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          layout="fill"
          alt={imgAttribution}
          className="rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
