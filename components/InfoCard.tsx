import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  lat,
  long,
  attribution,
}: InfoCardData) {
  return (
    // pr-4: Add extra padding to the right
    // first:border-t:--> Only for the very first child add a border top (of 1px)
    <div
      className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg
    transition duration-200 ease-out first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="border rounded-xl"
          src={img}
          alt={attribution}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* flex-grow: --> "flex-grow: 1;"--> ocupy all the available space */}
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        {/* Little line: */}
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
