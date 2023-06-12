import { Box, Center, Divider, Heading } from "@chakra-ui/layout";

import { Text } from "@chakra-ui/layout";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Colours } from "../../../../colourScheme";
import { useEffect } from "react";

export const AppFeature = ({
  featureName,
  featureDescription,
  numericFacts,
  usefulWhen,
  catchyLine,
  isOnLeft,
}: {
  featureName: string;
  featureDescription: string;
  numericFacts: string[];
  usefulWhen: string[];
  catchyLine: string;
  isOnLeft: boolean;
}): JSX.Element => {
  let numericFactConcat = "";
  //Appending all numeric facts into a single string before render.
  useEffect(() => {
    numericFacts.forEach((fact, index, arr) =>
      index === arr.length - 1
        ? numericFactConcat.concat(`${fact}`)
        : numericFactConcat.concat(`${fact} | `)
    );
  });
  return (
    <Center>
      <Box>
        <Heading
          fontSize={"6xl"}
          textAlign={isOnLeft ? "left" : "right"}
          m="2rem"
        >
          {featureName}
        </Heading>
        <Center>
          <Text textAlign={"left"} fontSize={"xl"} maxW="3xl" mb="2rem">
            {featureDescription}
          </Text>
        </Center>
        <Divider borderColor={Colours.lightModeHeader} />
        <Center>
          <Heading fontSize={"2xl"} m="2rem">
            Numeric Fact 1 | Numeric Fact 2 | Numeric Fact 3
          </Heading>
        </Center>
        <Divider borderColor={Colours.lightModeHeader} />

        <Heading fontSize={"5xl"} m="2rem" textAlign={"center"}>
          Useful when...
        </Heading>

        <Center>
          <UnorderedList fontSize={"xl"}>
            {usefulWhen.map((useful, key) => {
              return <ListItem key={key}>{useful}</ListItem>;
            })}
          </UnorderedList>
        </Center>

        <Heading
          fontSize={"xl"}
          mt="2rem"
          textAlign={isOnLeft ? "left" : "right"}
        >
          {catchyLine}
        </Heading>
        <Divider borderColor={Colours.lightModeHeader} />
      </Box>
    </Center>
  );
};
