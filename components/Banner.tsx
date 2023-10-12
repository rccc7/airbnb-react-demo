import Image from "next/image";
import React from "react";

function Banner() {
  return (
    // This component will be relative to the size of its container. So, when we make a containter relative
    // we also have to define a height and width
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/multiple-apps2.appspot.com/o/20230616_112624.jpg?alt=media&token=27717952-46f9-4824-ab58-fa210e192aac"
        layout="fill"
        objectFit="cover"
        alt="Park in a sunny day"
      />

      {/* In order to make an element position absolute, we first need to make its parent realtive 
      With absolute positioning we can position the element wherever we want*/}
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm md:text-lg text-black font-bold bg-white/50 rounded-md px-2  max-w-fit relative mx-auto">
          Not sure where to go? Perfect... 😉
        </p>
        <button className="text-red-400 bg-white px-10 py-4 shadow-md rounded-3xl font-bold my-3 hover:shadow-lg hover:text-red-500 active:scale-90 transition duration-150">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
