import { useMediaQuery } from "@chakra-ui/react";
import { TimelineSection } from "./components/TimelineSection/TimelineSection";
import { TimelineSectionCompact } from "./components/TimelineSection/TimelineSectionCompact";

export const CoDesignPage = (): JSX.Element => {
  //Cutoff between a medium and large screen.
  const [isLargerThan991] = useMediaQuery("(min-width: 991px)");
  return (
    <>{isLargerThan991 ? <TimelineSection /> : <TimelineSectionCompact />}</>
  );
};
