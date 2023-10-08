import { AboutTop } from "./components/AboutTop/AboutTop";
import { ProjectOverview } from "./components/ProjectOverview/ProjectOverview";
import { VisionAndValues } from "./components/VisionAndValues/VisionAndValues";
import { PublicationSection } from "./components/PublicationSection/PublicationSection";
import { PageTransition } from "../../PageTransition";
import { TimelineSection } from "../CoDesignPage/components/TimelineSection/TimelineSection";

export const AboutPage: React.FC = (): JSX.Element => {
  return (
    <>
      <PageTransition>
        {/* Top section */}
        <AboutTop />
        {/* Project Overview section */}
        <ProjectOverview />

        {/* Interactive Diagram section  <InteractiveSection /> (removed in favour of timeline)*/}

        {/* Vision & Values section */}
        <VisionAndValues />

        {/* Timeline section from co-design page. Makes co-design page redundant. */}
        <TimelineSection />

        {/* Academic Publications section */}
        <PublicationSection />
      </PageTransition>
    </>
  );
};
