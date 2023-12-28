"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

import { GlobeAltIcon } from "@heroicons/react/24/outline";
// Styles required by react-date-range
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// Import the DateRangePicker:
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { useRouter } from "next/navigation";

interface Props {
  placeholder?: string; //Marked as optional
}

function Header({ placeholder }: Props) {
  console.log(placeholder);
  //Get the text that the user enters:
  const [searchInput, setSearchInput] = useState<string>("");
  // Define the start and end dates for the DateRangePicker selectionRange prop.
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const [numberOfGuests, setNumberOfGuests] = useState<Number>(1);

  const router = useRouter();

  // Selection range property which will be passed to the DateRangePicker component
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // Resets the input text to '' which will automatically hide the DateRangePicker
  const resetInput = () => {
    setSearchInput("");
  };

  // Handle the select date event in the DateRangePicker component
  const handleSelect = (ranges: RangeKeyDict) => {
    // console.log("The rangerrrrrs>>>", ranges);
    // console.log("The selection>>>", ranges.selection);
    // let { startDate, endDate } = ranges.selection;
    //  ranges.selection.endDate
    // let d1: Date = ranges.selection.startDate;
    setStartDate(ranges.selection.startDate ?? new Date());
    setEndDate(ranges.selection.endDate ?? new Date());
  };

  const search = () => {
    // router.push("/search"); //simple version, just push to the route

    // IMportant: Nextjs 13 App Router no longer suports router.push({object}) we
    // need to send directly the query params in the href string
    // router.push({
    //   pathname: "/search",
    //   query: {
    //     location: searchInput,
    //     startDate: startDate?.toISOString(),
    //     endDate: endDate.toISOString(),
    //     noOfGuests: numberOfGuests,
    //   },
    // });

    router.push(
      `/search?location=${searchInput}&startDate=${startDate?.toISOString()}&endDate=${endDate.toISOString()}&noGuests=${numberOfGuests}`
    );
  };

  return (
    // Since we are building a header component, we should use the header tag instead of the main div
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* left section (logo) 
        The position is set to relative in order to make it relative to the size of its container
       and not to the whole application size
       my-auto: centralize the component
      */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          // src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
          src="https://firebasestorage.googleapis.com/v0/b/multiple-apps2.appspot.com/o/airbnb-react2%2FAirbnbReactLogo.png?alt=media&token=984f3a69-4eea-46a2-9fbd-efbe0ec6aedc"
          layout="fill"
          objectFit="contain" //Keep the aspect ratio (don't stretch)
          objectPosition="left"
          //   width={100}
          //   height={20}
          alt="airbnb-react logo obtained from: https://commons.wikimedia.org/wiki/File:Airbnb_Logo_B%C3%A9lo.svg"
        />
      </div>
      {/* Middle section */}
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full px-1 py-2">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.currentTarget.value);
          }}
          className="flex-grow outline-none pl-5 bg-transparent text-sm text-gray-600 placeholder:text-gray-400 placeholder:text-[8px] sm:placeholder:text-[12px]"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex md:mx-2 h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer" />
      </div>
      {/* right section */}
      <div className=" flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        // Here, we can replace mx-auto with items-center. Either way this element will be centralized.
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()} //Today
            rangeColors={["#FD5B61"]}
            // onChange={(e) => handleSelect(e)}--> This was only used  is to check the type of parameter needed
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            {/* flex-grow --> flex-grow: 1; -->Ocupy the total remaining space  */}
            <h2 className="text-2xl pl-2 flex-grow font-semibold ">
              Number of Guests:
            </h2>
            <UsersIcon className="h-5" />
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
              value={numberOfGuests.toString()}
              onChange={(e) => {
                // Here, we add the + sign in order to parse the string value of e.target.value which into a number
                // We could also use the parseInt or parseFloat but in this particular case we will use the
                // unary + operator
                setNumberOfGuests(+e.target.value);
              }}
              min={1}
              max={99}
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-400">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
      {/* <h1 className="bg-green-400 grid col-span-2">hellos</h1> */}
    </header>
  );
}

export default Header;
