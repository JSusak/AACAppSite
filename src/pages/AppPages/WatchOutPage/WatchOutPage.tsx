import "./watchOutPage.scss";
import { WatchOutHero } from "./components/WatchOutHero/WatchOutHero";
import { PageTransition } from "../../../PageTransition";
import { watchOutFeatureList } from "./watchOutFeatureList";
import { AppFeatureSection } from "../components/AppFeatureSection/AppFeatureSection";
import { watchOutColourScheme } from "../appFeatureColourSchemes";

export const WatchOutPage = (): JSX.Element => {
  return (
    <>
      <PageTransition>
        <WatchOutHero />

        {watchOutFeatureList.map((feature, index) => {
          return (
            <AppFeatureSection
              key={`watchOutFeature${index}`}
              sectionId={`watchOutFeature${index}`}
              featureName={feature.featureName}
              featureDescription={feature.featureDescription}
              isOnLeft={index % 2 == 0}
              initialFeatureImageURL={feature.initialFeatureImageURL}
              featureSteps={feature.featureCarouselSteps}
              colourScheme={watchOutColourScheme}
            />
          );
        })}
        {/**Further info section, can be added back when needed        <WatchOutFurtherInfoSection /> */}
      </PageTransition>
    </>
  );
};
