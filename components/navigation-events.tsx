"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ProgressBar from "@badrap/bar-of-progress";
// import Rout

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

// This component is intended to implement the router events to listen for page changes such as routeChangeStart
// and routeChangeComplete events which are fired when the user transitions to another page, that is
// whenever the systen begins pushing the user from one page to another page (former routeChangeStart event before Next.js 13)
// and when the destination page transition has been completed (former routeChangeComplete event before Next.js 13)
// Since Next.js 13 when using App Router, router.events are no longer supported and have been replaced by this approach.
// Here, we symplify the events on when the url changes, then start the progress bar and set a time out (setTimeOut) delay
// of 1000ms which is supposed to occur when the transition has been completed.
// For more info head over to https://nextjs.org/docs/app/api-reference/functions/use-router#router-events

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log("The url>>>", url);

    // start the progress bar:
    progress.start();
    // Set time out to finish the progress bar:
    setTimeout(() => {
      progress.finish();
    }, 1000);
  }, [pathname, searchParams]);

  return null;
}
