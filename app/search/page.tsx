"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
// This date-fns library, which is used to format dates was automatically installed with the react-date-range library.
import { format } from "date-fns";
import InfoCard from "@/components/InfoCard";

//RCCC: Routing Using App Router in Next.js 13: For more info head over to https://nextjs.org/docs/app/building-your-application/routing
// RCCC: Mor info about useSearchParams in App Router: https://nextjs.org/docs/app/api-reference/functions/use-search-params
function Search() {
  const queryParams = useSearchParams();
  console.log("the params>>>", queryParams);
  // Get the destructured queryParams
  // const { location, startDate, endDate, noGuests } =
  //   queryParams.
  console.log("The location>>>", queryParams.get("location"));
  const location = queryParams.get("location");
  const startDate = queryParams.get("startDate");
  const endDate = queryParams.get("endDate");
  const numberOfGuests = queryParams.get("noGuests");

  const [searchResults, setSearchResults] = useState<InfoCardData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      // Fetch the mock search results from the api:
      const { props } = await fetch("/api/searchresults").then((res) =>
        res.json()
      );

      setSearchResults(props.searchResults);
      setIsLoading(false);
      // console.log("The searchResults:>>>", props);
      return props;
      // console.log('The results>>>')
    };

    fetchSearchResults();
  }, []);

  console.log("The searchResults>>>>", searchResults);

  const formattedStartdate = format(
    startDate ? new Date(startDate.toString()) : new Date(),
    "dd MMMM yy"
  );
  const formattedEndDate = format(
    endDate ? new Date(endDate.toString()) : new Date(),
    "dd MMMM yy"
  );

  const strDateRange = formattedStartdate + " - " + formattedEndDate;

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="h-screen">
      <Header
        placeholder={`${location} | ${strDateRange} | ${numberOfGuests} guests`}
      />
      <main className="flex">
        {/* flex-grow --> Take as much space as possible */}
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {strDateRange} - for {numberOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {/* buttonP custom utility class defined in app/globals.css  */}
            <p className="buttonP">Cancellation Flexibility</p>
            <p className="buttonP">Type of Place</p>
            <p className="buttonP">Price</p>
            <p className="buttonP">Rooms and Beds</p>
            <p className="buttonP">More filters</p>
          </div>
          <div className="flex flex-col">
            {/* {searchResults.map((data) => ( */}
            {/* Destructure the data: */}
            {/* {searchResults.map(({img,location,title,star,price,total,long,lat,attribution,}) */}
            {searchResults.map((data) => (
              // Here, in order to pass the whole object (data) as props to the InfoCard component
              // we need to use the spread operator
              <InfoCard key={data.img} {...data} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

// async function getServerSideProps() {
//   const searchResults = await fetch(
//     "https://firebasestorage.googleapis.com/v0/b/multiple-apps2.appspot.com/o/airbnb-react2%2FSearchResults.json?alt=media&token=1608f044-15dc-453c-bd9f-8ef15ddff21b&_gl=1*cafgt3*_ga*MTk4MzE3OTM0NS4xNjg2ODQxNTQ5*_ga_CW55HF8NVT*MTY5Njk2NjA1MS4yNy4xLjE2OTY5NjYxMDUuNi4wLjA."
//   ).then((res) => res.json());

//   return {
//     props: {
//       searchResults,
//     },
//   };
// }
