import { Heading } from "@chakra-ui/react";

export const TimelineCardCompact = ({
  id,
  cardImageURL,
  cardName,
  modalDescription,
  activityLocation,
  activityDate,
  taskList,
}: {
  id: number;
  cardImageURL: string;
  cardName: string;
  modalDescription: string;
  activityLocation: string;
  activityDate: string;
  taskList: string[];
}): JSX.Element => {
  return (
    <Heading>
      {id},{cardImageURL},{cardName},{modalDescription},{activityLocation},
      {activityDate},{taskList}
    </Heading>
  );
};
