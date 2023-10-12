import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 gap-y-10 px-16 py-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="cursor-pointer">How Airbnb-react works</p>
        <p className="cursor-pointer">Newsroom</p>
        <p className="cursor-pointer">Investors</p>
        <p className="cursor-pointer">Airbnb-react Plus</p>
        <p className="cursor-pointer">Airbnb-react Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMUNITY</h5>
        <p className="cursor-pointer">This is not the real Airbn site</p>
        <p className="cursor-pointer">Its a pretty clone made in React</p>
        <p className="cursor-pointer">& NextJS</p>
        <p className="cursor-pointer">For testing and practices</p>
        <p className="cursor-pointer">Purposes Only</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="cursor-pointer">2023 - RCCC</p>
        <p className="">
          Visit my{" "}
          <a
            href="https://rccc-resume1.web.app/"
            target="_blank"
            className="text-blue-500 font-semibold cursor-pointer"
          >
            Portfolio Page
          </a>
        </p>
        <p className="cursor-pointer">To see more about me</p>
        <p className="cursor-pointer">And more examples</p>
        <p className="cursor-pointer">In React</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="cursor-pointer">Help Centre</p>
        <p className="cursor-pointer">Trust & Safety</p>
        <p className="cursor-pointer">Privacy</p>
        <p className="cursor-pointer">Terms & Conditions</p>
        <p className="cursor-pointer">Cookies</p>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
