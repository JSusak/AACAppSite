import {
  Box,
  Center,
  Heading,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { datesLongForm } from "./helpers/datesLongForm";
import { useState } from "react";
import { TimelineSectionModal } from "./TimelineSectionModal/TimelineSectionModal";

const timelineCardAnim = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const TimelineCard = ({
  id,
  imageURL,
  cardName,
  modalDescription,
  activityImages,
  activityDate,
  taskList,

  onImageLoad,
}: {
  id: string;
  imageURL: string;
  cardName: string;
  modalDescription: string;
  activityImages: string[];
  activityDate: string;

  taskList: string[];
  onImageLoad: () => void;
}): JSX.Element => {
  const [cardModalOpen, setCardModalOpen] = useState(false);

  const onModalClose = () => {
    document.body.style.overflow = "";
    setCardModalOpen(false);
  };
  const onModalOpen = () => {
    document.body.style.overflow = "hidden";
    setCardModalOpen(true);
  };

  useEffect(onImageLoad, []);
  useEffect(() => {
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      {/*Main Image Box, to be shown on the timeline before the modal*/}
      <motion.div
        whileHover={{ scale: 1.05, cursor: "pointer" }}
        variants={timelineCardAnim}
        initial="hidden"
        whileInView="visible"
      >
        <Box
          id={id}
          boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
          width={"100%"}
          height={[`200px`, `250px`, `300px`, `400px`]}
          borderRadius={"50px"}
          position={"relative"}
          onClick={onModalOpen}
          mt={["2rem", "2rem", "2rem", "0"]}
        >
          <Center>
            <Image
              src={imageURL}
              width={"100%"}
              height={"100%"}
              pos={"absolute"}
              objectFit={"cover"}
              top={0}
              borderRadius={"50px"}
              fallbackSrc={`https://via.placeholder.com/400x400`}
            />
            <Box
              position={"absolute"}
              top="0"
              width={"100%"}
              height={"100%"}
              borderRadius={"50px"}
              transition={"opacity 0.3s ease-in-out"}
              backgroundColor={useColorModeValue(
                "blackAlpha.600",
                "whiteAlpha.600"
              )}
              opacity={0}
              _hover={{ opacity: 1 }}
            >
              <Center>
                <VStack
                  position={"absolute"}
                  top="50%"
                  transform={"translate(0,-50%)"}
                >
                  {" "}
                  <Heading
                    textAlign={"center"}
                    fontSize={"3xl"}
                    color={useColorModeValue(
                      "whiteAlpha.700",
                      "blackAlpha.700"
                    )}
                  >
                    {cardName}
                  </Heading>
                  <Heading
                    textAlign={"center"}
                    fontSize={"xl"}
                    color={useColorModeValue(
                      "whiteAlpha.700",
                      "blackAlpha.700"
                    )}
                  >
                    {`${datesLongForm[activityDate.split(" ")[0]]} ${
                      activityDate.split(" ")[1]
                    }`}
                  </Heading>
                </VStack>
              </Center>
            </Box>
          </Center>
        </Box>
      </motion.div>

      {/*Modal containing the overall description of the activity, main tasks which occurreed, location...*/}

      <AnimatePresence mode="wait" initial={false}>
        {cardModalOpen && (
          <TimelineSectionModal
            sectionName={cardName}
            sectionImages={activityImages}
            sectionDate={activityDate}
            sectionDescription={modalDescription}
            sectionKeyTasks={taskList}
            onModalClose={onModalClose}
            featureImage={imageURL}
          />
        )}
      </AnimatePresence>
    </>
  );
};
