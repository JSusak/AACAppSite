import { TopHero } from "./components/TopHero/TopHero";
import { OurMission } from "./components/OurMission/OurMission";
import { WatchOutPreview } from "./components/WatchOutPreview/WatchOutPreview";
import { WatchInPreview } from "./components/WatchInPreview/WatchInPreview";
import { PageTransition } from "../../PageTransition";

//import { useState } from "react";
//import { Colours } from "../../colourScheme";

export const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <PageTransition>
        <TopHero />
        <OurMission />
        <WatchOutPreview />
        <WatchInPreview />
      </PageTransition>
    </>
  );
};
