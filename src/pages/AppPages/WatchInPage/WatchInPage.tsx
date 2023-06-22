import { WatchInHero } from "./components/WatchInHero/WatchInHero";

import { WatchInFurtherInfoSection } from "./components/WatchInFurtherInfoSection/WatchInFurtherInfoSection";
import { PageTransition } from "../../../PageTransition";
import { AppFeatureSection } from "../components/AppFeatureSection/AppFeatureSection";
import { watchInFeatureList } from "./watchInFeatureList";
import { Colours } from "../../../colourScheme";

//Main component for the Watch In page, containing all sections.
export const WatchInPage = (): JSX.Element => {
  return (
    <>
      <PageTransition>
        <WatchInHero />

        {watchInFeatureList.map((feature, index) => {
          return (
            <AppFeatureSection
              key={`watchInFeature${index}`}
              sectionId={`watchInFeature${index}`}
              featureName={feature.featureName}
              featureDescription={feature.featureDescription}
              numericFacts={feature.numericFacts}
              catchyLine={feature.catchyLine}
              isOnLeft={index % 2 == 0}
              initialFeatureImageURL={feature.initialFeatureImageURL}
              featureSteps={feature.featureCarouselSteps}
              accentColour={Colours.lightModeWatchInAccent}
            />
          );
        })}
        {/**Further Info component */}
        <WatchInFurtherInfoSection />
      </PageTransition>
    </>
  );
};
