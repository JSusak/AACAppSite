import { AboutTop } from "./components/AboutTop/AboutTop";
import { ProjectOverview } from "./components/ProjectOverview/ProjectOverview";
import { VisionAndValues } from "./components/VisionAndValues/VisionAndValues";
import { InteractiveSection } from "./components/InteractiveSection/InteractiveSection";
import { OurCharity } from "./components/OurCharity/OurCharity";
import { PublicationSection } from "./components/PublicationSection/PublicationSection";
import { PageTransition } from "../../PageTransition";

export const AboutPage: React.FC = (): JSX.Element => {
  return (
    <>
      <PageTransition>
        {/* Top section */}
        <AboutTop />
        {/* Project Overview section */}
        <ProjectOverview />

        {/* Interactive Diagram section */}
        <InteractiveSection />

        {/* Vision & Values section */}
        <VisionAndValues />

        {/* Academic Publications section */}
        <PublicationSection />

        {/* Aphasia Reconnectsection */}
        <OurCharity />
      </PageTransition>
    </>
  );
};
