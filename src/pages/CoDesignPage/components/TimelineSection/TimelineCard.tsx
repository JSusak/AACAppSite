import {
  Box,
  Button,
  Center,
  Heading,
  VStack,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const timelineCardAnim = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const TimelineCard = ({
  id,
  imageURL,
  cardName,
  modalDescription,
  activityLocation,
  activityDate,
  taskList,
  onImageLoad,
}: {
  id: string;
  imageURL: string;
  cardName: string;
  modalDescription: string;
  activityLocation: string;
  activityDate: string;
  taskList: string[];
  onImageLoad: () => void;
}): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/*Main Image Box, to be shown on the timeline before the modal*/}
      <motion.div
        whileHover={{ scale: 1.1, cursor: "pointer" }}
        variants={timelineCardAnim}
        initial="hidden"
        whileInView="visible"
      >
        <Box
          id={id}
          width={`100%`}
          height={`100%`}
          borderRadius={"50px"}
          position={"relative"}
          onClick={() => {
            if (document.getElementById("navbar") != null) {
              document.getElementById("navbar")!.style.opacity = "0";
              document.getElementById("navbar")!.style.pointerEvents = "none";
            }
            onOpen();
          }}
        >
          <Center>
            <Image
              onLoad={onImageLoad}
              src={imageURL}
              width={"100%"}
              height={"100%"}
              borderRadius={"50px"}
              fallbackSrc={`https://via.placeholder.com/400x400`}
            />
            <Box position={"absolute"} top="0">
              <Heading>{cardName}</Heading>
            </Box>
          </Center>
        </Box>
      </motion.div>

      {/*Modal containing the overall description of the activity, main tasks which occurreed, location...*/}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          if (document.getElementById("navbar") != null) {
            console.log(document.getElementById("navbar"));
            document.getElementById("navbar")!.style.opacity = "1";
            document.getElementById("navbar")!.style.pointerEvents = "";
          }
          onClose();
        }}
        isCentered
        size={["md", "md", "lg", "xl"]}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <VStack>
              <Image
                src={imageURL}
                width={"100%"}
                height={"100%"}
                borderRadius={"10px"}
                fallbackSrc={`https://via.placeholder.com/400x400`}
              />
              <Heading>{cardName}</Heading>
              <Text
                fontSize={"xl"}
              >{`${activityLocation} • ${activityDate}`}</Text>
              <Heading fontSize={"3xl"}>What happened?</Heading>
              <Text maxW="lg" textAlign={"center"}>
                {modalDescription}
              </Text>

              <Heading fontSize={"3xl"}>Main tasks:</Heading>
              <UnorderedList>
                {taskList.map((task, key) => {
                  return <ListItem key={key}>{task}</ListItem>;
                })}
              </UnorderedList>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="orange"
              mr={3}
              onClick={() => {
                if (document.getElementById("navbar") != null) {
                  console.log(document.getElementById("navbar"));
                  document.getElementById("navbar")!.style.opacity = "1";
                  document.getElementById("navbar")!.style.pointerEvents = "";
                }
                onClose();
              }}
              variant={"outline"}
            >
              Back to timeline
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
