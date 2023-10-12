import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";
import Image from "next/image";

// Static server rendering. Here, in Nextjs 13 instead of using the classic function getStaticProps, by default
// the page is server side rendered. Therefore, we can only declare the function as async and fetch either from the
// inside or from another auxiliary function. In the app directory, data fetching with fetch() will default
// to cache: 'force-cache', which will cache the request data until manually invalidated.
// This is similar to getStaticProps in the pages directory.
// For more info about upgrading to App Router from Pages router head over to
// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration

export default async function Home() {
  let { smallCards, mediumCards } = await getData();
  // console.log("the explore data:>>>", exploreData);
  return (
    <div className="">
      {/* <Head>
        <title>Airbnb React Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <h1>Let's build an AirBNB clone in React 😎☕🍫😋</h1> */}
      <Header />
      <Banner />
      {/* set the max width of the main section 
      mx-auto --> to center the section*/}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Pull data from the server to display the cards - API endpoints */}
            {/* Go through all of the items inside the exploreData structure: */}
            {smallCards?.map((item: SmallCardData) => (
              // <h1>{item.location}</h1>
              <SmallCard
                key={item.img} //whenever we map in react, we need to pass a key in order to make react more effective by not re-rendering the entire component.
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          {/* Here, we add the p-3 (padding:12px) so that when the image size is increased when 
          hovering the mouse the top, left and right of the image won't be cut off by the div borders;
          -ml-3 is to compensate the extra space of the padding so that this dive will be alighed with 
          the h2 above 👆*/}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {mediumCards?.map(
              ({ img, title, imgAttribution }: MediumCardData) => {
                return (
                  <MediumCard
                    key={img}
                    img={img}
                    title={title}
                    imgAttribution={imgAttribution}
                  />
                );
              }
            )}
          </div>
        </section>
        <section>
          <LargeCard
            img={
              "https://firebasestorage.googleapis.com/v0/b/multiple-apps2.appspot.com/o/airbnb-react2%2Fmaldives-cropped.jpg?alt=media&token=d7fad2ad-62aa-4572-826a-9615d90c75ff"
            }
            title={"The Greatest Outdoors"}
            description={"Whishlists created by users"}
            imgAttribution={
              "Photo by Asad Photo Maldives: https://www.pexels.com/photo/brown-wooden-bench-surrounded-by-palm-trees-1591362/"
            }
            buttonText="Get Inspired"
          />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}

// This function will be called from Home function. It is a replacement of the
// getStaticProps used in PagesRouter methodology

// NOTE: Initially the function declaration was with export. However, when trying to build (npm run build)
// Next.js throwed this error:
// #####################################################################################
// ".next/types/app/page.ts:8:13
// Type error: Type 'OmitWithTag<typeof import("C:/Files/Work/Projects/..../airbnb-react/app/page"), "metadata"
// | "default" | "config" | "generateStaticParams" | "revalidate" | "dynamic" | ... 5 more ... | "generateMetadata", "">' does not satisfy the constraint '{ [x: string]: never; }'.
// Property 'getData' is incompatible with index signature.
// Type '() => Promise<{ smallCards: SmallCardData[]; mediumCards: MediumCardData[]; }>' is not assignable to type 'never'.  "
// ###########################################################################################################
// After some research it turned out that this error was due that the page.tsx file had two export functions
// as described here: https://stackoverflow.com/questions/76619329/my-nextjs-app-isnt-building-and-returing-a-type-error-relative-to-layout-page-t
// the problem was similar: the NextJS app wasn't building because there were two exported variables.
// Removing the export in this function and keeping only the export default solves the problem.
// export async function getData(): Promise<{
async function getData(): Promise<{
  smallCards: SmallCardData[];
  mediumCards: MediumCardData[];
}> {
  // the json file is stored in Firebase account. It could also be stored at https://jsonkeeper.com.
  // However, I prefer to store locally in firebase account so we can have more control over the json file.
  let smallCards: SmallCardData[] = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/multiple-apps2.appspot.com/o/airbnb-react2%2Furls.json?alt=media&token=ad8f3b00-6689-4a6a-b56e-bddcc2a31e4c"
  ).then((res) => res.json());

  const mediumCards: MediumCardData[] = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/multiple-apps2.appspot.com/o/airbnb-react2%2FMediumCard.json?alt=media&token=278ef265-b61d-4a82-99c4-6e9a847db3dc"
  ).then((res) => res.json());

  // Since we are not working with PagesRouter, it is not necessary to return a props object. This function
  // is by default running in the server side.
  // return {
  //   props: {
  //     exploreData: exploreData,
  //   },
  // };

  // console.log("The exploreData>>", typeof smallCards);

  return {
    smallCards,
    mediumCards,
  };
}
