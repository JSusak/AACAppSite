import {
  Center,
  Grid,
  Heading,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { timelineCardContents } from "./timelineCardContents";
import { TimelineCardCompact } from "./TimelineCardCompact";
import Xarrow from "react-xarrows";
import { useState } from "react";
import { Colours } from "../../../../colourScheme";
import { motion } from "framer-motion";
import { timelineArrowAnim } from "./helpers/timelineAnims";

export const TimelineSectionCompact = (): JSX.Element => {
  const [arrow, setArrow] = useState(false);

  return (
    <Grid minH="93vh" position="relative">
      <VStack mt="2rem" mb="2rem">
        <Heading textAlign={"center"}>Project Timeline</Heading>
        <Heading textAlign={"center"} fontSize={"2xl"}>
          (Compact Version)
        </Heading>
        <Center mb="2rem">
          <Text maxW="md">
            Take a look at some of the activities we did! Interact with specific
            cards to find out more information about that certain activity.
          </Text>
        </Center>

        <VStack spacing={"5rem"}>
          {timelineCardContents.map((card, index) => {
            return (
              <>
                <motion.div
                  variants={timelineArrowAnim}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ width: "90%" }}
                >
                  {arrow && timelineCardContents.length != index + 1 ? (
                    <motion.div variants={timelineArrowAnim}>
                      <Xarrow
                        start={`compactCard${index}`}
                        end={`compactCard${index + 1}`}
                        color={useColorModeValue(
                          Colours.lightModeMainCol,
                          Colours.darkModeMainCol
                        )}
                      />
                    </motion.div>
                  ) : null}

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TimelineCardCompact
                      id={`compactCard${index}`}
                      cardImageURL={card.cardImageURL}
                      cardName={card.cardName}
                      modalDescription={card.modalDescription}
                      activityImages={card.activityImages}
                      activityDate={card.activityDate}
                      taskList={card.activityTasks}
                      onImageLoad={() => setArrow(true)}
                    />
                  </motion.div>
                </motion.div>
              </>
            );
          })}
        </VStack>
      </VStack>
    </Grid>
  );
};
