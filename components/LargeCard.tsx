import Image from "next/image";
import React from "react";

interface ExtraProps {
  buttonText: string;
}
// Here, the original props were only the LargeCardData, then it was necessary to add the buttonText. Therefore, in order
// to add more than one property, on the props parameter we first need to create an interface or type to
// wrap the new props and then destructure all the props and use the "&" operator. Other option would be to create the
// interface and wrap inside it the LargeCardData props and the buttonText, but it was more straightforward this option
function LargeCard({
  img,
  title,
  description,
  imgAttribution,
  buttonText,
}: LargeCardData & ExtraProps) {
  return (
    <div className="relative py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout={"fill"}
          objectFit="cover"
          alt={imgAttribution}
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 bg-white/50 rounded-2xl p-4 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 active:scale-105 transition duration-300 hover:text-gray-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
