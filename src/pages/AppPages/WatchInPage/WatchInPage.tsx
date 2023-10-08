import { WatchInHero } from "./components/WatchInHero/WatchInHero";


import { PageTransition } from "../../../PageTransition";
import { AppFeatureSection } from "../components/AppFeatureSection/AppFeatureSection";
import { watchInFeatureList } from "./watchInFeatureList";
import { watchInColourScheme } from "../appFeatureColourSchemes";

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
              isOnLeft={index % 2 == 0}
              initialFeatureImageURL={feature.initialFeatureImageURL}
              featureSteps={feature.featureCarouselSteps}
              colourScheme={watchInColourScheme}
            />
          );
        })}
        {/**Further Info component and download components. Removed for now, can be added back.   <WatchInFurtherInfoSection />*/}
      </PageTransition>
    </>
  );
};
