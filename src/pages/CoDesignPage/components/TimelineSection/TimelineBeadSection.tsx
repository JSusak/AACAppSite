import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { TimelineCard } from "./TimelineCard";
import Xarrow from "react-xarrows";
import { Colours } from "../../../../colourScheme";
import { motion } from "framer-motion";

const timelineBeadAnim = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

const timelineArrowAnim = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 2,
      type: "tween",
    },
  },
};

export const TimelineBeadSection = ({
  orderInTimeline,
  isOnLeft,
  cardImageURL,
  cardName,
  modalDescription,
  activityDate,
  taskList,
  activityLocation,
}: {
  orderInTimeline: number;
  isOnLeft: boolean;
  cardImageURL: string;
  cardName: string;
  modalDescription: string;
  activityLocation: string;
  activityDate: string;
  taskList: string[];
}): JSX.Element => {
  const SectionCard = (): JSX.Element => {
    return (
      <TimelineCard
        id={`workshop${orderInTimeline.toString()}`}
        imageURL={cardImageURL}
        cardName={cardName}
        modalDescription={modalDescription}
        activityDate={activityDate}
        taskList={taskList}
        activityLocation={activityLocation}
      />
    );
  };
  return (
    <Box className="timelineSection" zIndex={15}>
      <motion.div
        variants={timelineArrowAnim}
        initial="hidden"
        whileInView="visible"
      >
        <Xarrow
          start={`bead${orderInTimeline.toString()}`}
          end={`workshop${orderInTimeline.toString()}`}
          color={Colours.lightModeMainCol}
        />
      </motion.div>
      <SimpleGrid columns={3}>
        {isOnLeft ? <SectionCard /> : <Box></Box>}
        <Center>
          <motion.div
            variants={timelineBeadAnim}
            initial="hidden"
            whileInView="visible"
            className="circle bead"
            whileHover={{ scale: 1.5 }}
            style={{ position: "relative" }}
            id={`bead${orderInTimeline.toString()}`}
          >
            <Heading
              size="sm"
              zIndex={90}
              maxW={"100%"}
              textAlign={"center"}
              position={"absolute"}
              top="50%"
              transform={"translate(0,-50%)"}
            >
              {activityDate}
            </Heading>
          </motion.div>
        </Center>
        {isOnLeft ? <Box></Box> : <SectionCard />}
      </SimpleGrid>
    </Box>
  );
};
