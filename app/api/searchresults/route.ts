// RCCC: More info about route handlers in Nextjs 13 using App Route: 
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// More info about the route.js file structure convention in Next.js 13:
// https://nextjs.org/docs/app/api-reference/file-conventions/route
export async function GET(request: Request) {
    const searchResults = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/multiple-apps2.appspot.com/o/airbnb-react2%2FSearchResults.json?alt=media&token=1608f044-15dc-453c-bd9f-8ef15ddff21b&_gl=1*cafgt3*_ga*MTk4MzE3OTM0NS4xNjg2ODQxNTQ5*_ga_CW55HF8NVT*MTY5Njk2NjA1MS4yNy4xLjE2OTY5NjYxMDUuNi4wLjA."
      ).then((res) => res.json());
      
    //   console.log('The searchResults>>>', searchResults)
    
    //   return new Response(JSON.stringify({
    //     props: {
    //       searchResults,
    //     },
    //   }));

    // Return the response in JSON format
      return Response.json({props:{searchResults}});
   
  }
  
//   export async function POST