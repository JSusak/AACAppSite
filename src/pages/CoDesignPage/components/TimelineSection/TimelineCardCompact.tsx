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
        <Heading fontSize={"5xl"} textAlign={"center"}>{`${cardName}`}</Heading>
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

        <Text textAlign={"center"} fontSize={"xl"}>
          {modalDescription}
        </Text>

        <Heading fontSize={"3xl"}>Main tasks:</Heading>

        <UnorderedList fontSize={"lg"}>
          {taskList.map((task, key) => {
            return <ListItem key={key}>{task}</ListItem>;
          })}
        </UnorderedList>
      </VStack>
    </Card>
  );
};
