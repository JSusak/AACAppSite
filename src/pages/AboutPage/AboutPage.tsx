import { AboutTop } from "./components/AboutTop/AboutTop";
import { ProjectOverview } from "./components/ProjectOverview/ProjectOverview";
import { VisionAndValues } from "./components/VisionAndValues/VisionAndValues";
import { InteractiveSection } from "./components/InteractiveSection/InteractiveSection";
import { OurCharity } from "./components/OurCharity/OurCharity";
import { PublicationSection } from "./components/PublicationSection/PublicationSection";

export const AboutPage: React.FC = (): JSX.Element => {
  return (
    <>
      {/* Top section */}
      <AboutTop />
      {/* Project Overview section */}
      <ProjectOverview />

      {/* Vision & Values section */}
      <VisionAndValues />

      {/* Academic Publications section */}
      <PublicationSection />

      {/* Interactive Diagram section */}
      <InteractiveSection />

      {/* Aphasia Reconnectsection */}
      <OurCharity />
    </>
  );
};
