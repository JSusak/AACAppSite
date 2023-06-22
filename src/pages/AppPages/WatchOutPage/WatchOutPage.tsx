import "./watchOutPage.scss";
import { WatchOutHero } from "./components/WatchOutHero/WatchOutHero";
import { WatchOutFurtherInfoSection } from "./components/WatchOutFurtherInfoSection/WatchOutFurtherInfoSection";
import { PageTransition } from "../../../PageTransition";
import { watchOutFeatureList } from "./watchOutFeatureList";
import { AppFeatureSection } from "../components/AppFeatureSection/AppFeatureSection";

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
              numericFacts={feature.numericFacts}
              catchyLine={feature.catchyLine}
              isOnLeft={index % 2 == 0}
              initialFeatureImageURL={feature.initialFeatureImageURL}
              featureSteps={feature.featureCarouselSteps}
            />
          );
        })}

        <WatchOutFurtherInfoSection />
      </PageTransition>
    </>
  );
};
