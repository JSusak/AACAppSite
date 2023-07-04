import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { TimelineCard } from "./TimelineCard";
import Xarrow from "react-xarrows";
import { Colours } from "../../../../colourScheme";
import { motion } from "framer-motion";
import { useState } from "react";
import { timelineArrowAnim, timelineBeadAnim } from "./timelineAnims";

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
  const [arrow, setArrow] = useState(false);

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
        onImageLoad={function (): void {
          setArrow(true);
        }}
      />
    );
  };
  return (
    <Box className="timelineSection" zIndex={15}>
      {arrow ? (
        <motion.div
          variants={timelineArrowAnim}
          initial="hidden"
          whileInView="visible"
        >
          <Xarrow
            start={`bead${orderInTimeline.toString()}`}
            end={`workshop${orderInTimeline.toString()}`}
            color={useColorModeValue(
              Colours.lightModeMainCol,
              Colours.darkModeMainCol
            )}
          />
        </motion.div>
      ) : null}
      <SimpleGrid columns={3}>
        {isOnLeft ? <SectionCard /> : <Box></Box>}
        <Center>
          <motion.div
            variants={timelineBeadAnim}
            initial="hidden"
            whileInView="visible"
            className="circle bead"
            whileHover={{ scale: 1.5 }}
            style={{
              background: useColorModeValue("#ffd5a4", Colours.darkModeMainCol),
            }}
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
