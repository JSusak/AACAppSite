import {
  Card,
  Heading,
  Image,
  VStack,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { datesLongForm } from "./datesLongForm";
import { motion } from "framer-motion";
import { timelineChildrenAnim } from "./timelineAnims";

export const TimelineCardCompact = ({
  id,
  cardImageURL,
  cardName,
  modalDescription,
  activityLocation,
  activityDate,
  taskList,
  onImageLoad,
}: {
  id: string;
  cardImageURL: string;
  cardName: string;
  modalDescription: string;
  activityLocation: string;
  activityDate: string;
  taskList: string[];
  onImageLoad: () => void;
}): JSX.Element => {
  return (
    <Card id={id} width={"100%"}>
      <Image
        onLoad={onImageLoad}
        src={cardImageURL}
        width={"100%"}
        height="300px"
        borderRadius={"10px"}
        fallbackSrc={`https://via.placeholder.com/400x400`}
        objectFit={"cover"}
      />
      <VStack p="1rem">
        <motion.span variants={timelineChildrenAnim}>
          <Heading
            fontSize={"5xl"}
            textAlign={"center"}
          >{`${cardName}`}</Heading>
        </motion.span>
        <VStack>
          <motion.span variants={timelineChildrenAnim}>
            <Text
              fontSize={"2xl"}
              textAlign={"center"}
            >{`${activityLocation}`}</Text>
          </motion.span>
          <motion.span variants={timelineChildrenAnim}>
            <Text
              fontSize={"lg"}
              textAlign={"center"}
              color={"blackAlpha.600"}
            >{`${datesLongForm[activityDate.split(" ")[0]]} ${
              activityDate.split(" ")[1]
            }`}</Text>
          </motion.span>
        </VStack>

        <motion.span variants={timelineChildrenAnim}>
          <Heading fontSize={"3xl"}>What happened?</Heading>
        </motion.span>

        <motion.span variants={timelineChildrenAnim}>
          <Text textAlign={"center"} fontSize={"xl"}>
            {modalDescription}
          </Text>
        </motion.span>

        <motion.span variants={timelineChildrenAnim}>
          <Heading fontSize={"3xl"}>Main tasks:</Heading>
        </motion.span>

        <UnorderedList fontSize={"lg"}>
          {taskList.map((task, key) => {
            return (
              <motion.span variants={timelineChildrenAnim}>
                <ListItem key={key}>{task}</ListItem>
              </motion.span>
            );
          })}
        </UnorderedList>
      </VStack>
    </Card>
  );
};
