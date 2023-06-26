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

import { datesLongForm } from "./datesLongForm";

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
          boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
          width={"100%"}
          height={[`200px`, `200px`, `200px`, `400px`]}
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
              backgroundColor={"rgba(255, 213, 164, 0.6)"}
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
                  <Heading textAlign={"center"} fontSize={"3xl"}>
                    {cardName}
                  </Heading>
                  <Heading textAlign={"center"} fontSize={"xl"}>
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
              <VStack>
                <Text
                  fontSize={"2xl"}
                  textAlign={"center"}
                >{`${activityLocation}`}</Text>
                <Text
                  fontSize={"lg"}
                  textAlign={"center"}
                  color={"blackAlpha.600"}
                >{`${datesLongForm[activityDate.split(" ")[0]]} ${
                  activityDate.split(" ")[1]
                }`}</Text>
              </VStack>
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
