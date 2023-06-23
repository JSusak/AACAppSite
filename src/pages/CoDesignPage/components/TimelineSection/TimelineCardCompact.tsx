import {
  Card,
  Heading,
  Image,
  VStack,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

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
    <Card id={id} width={"90%"}>
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
        <Heading fontSize={"5xl"}>{`${cardName}`}</Heading>
        <Text fontSize={"3xl"}>{`${activityLocation} • ${activityDate}`}</Text>
        <Heading fontSize={"3xl"}>What happened?</Heading>

        <Text textAlign={"center"} fontSize={"xl"}>
          {modalDescription}
        </Text>

        <Heading fontSize={"3xl"}>Main tasks:</Heading>

        <UnorderedList>
          {taskList.map((task, key) => {
            return <ListItem key={key}>{task}</ListItem>;
          })}
        </UnorderedList>
      </VStack>
    </Card>
  );
};
