import { TimelineSection } from "./components/TimelineSection/TimelineSection";

import { CodesignExplanationSection } from "./components/CodesignExplanationSection/CodesignExplanationSection";
import { PageTransition } from "../../PageTransition";

export const CoDesignPage = (): JSX.Element => {
  return (
    <>
      <PageTransition>
        <CodesignExplanationSection />
        <TimelineSection />
      </PageTransition>
    </>
  );
};
