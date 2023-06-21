import {
  Grid,
  SimpleGrid,
  VStack,
  Heading,
  Highlight,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
import { ResponsiveSizes } from "../../../../responsiveSizes";

export const PeopleTop = (): JSX.Element => {
  return (
    <Grid minH="43vh" position="relative">
      <SimpleGrid columns={[1, 1, 1, 3]} mt="1rem" spacingY="2rem">
        <Center>
          <Image
            width={"300px"}
            display={["none", "none", "none", "block"]}
            src="./kcl.png"
            fallbackSrc="https://via.placeholder.com/300"
            borderRadius={"20px"}
          />
        </Center>

        <Center>
          <VStack>
            <Heading fontSize={ResponsiveSizes.HeroHeaderSizes}>People</Heading>
            <Text fontSize={"xl"} maxW="90%" textAlign={"center"}>
              <Highlight
                query={[
                  "Department of Informatics",
                  "Speech & Language Therapists",
                  "independent charities",
                ]}
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "blue.100",
                }}
              >
                The main team for 'Watch Your Language' is comprised of a
                handful of specialist PhD students and professors in
                Human-Computer Interaction, based at King's College London's
                Department of Informatics. We are grateful to work alongside
                expert Speech & Language Therapists and independent charities,
                who provide regular feedback as the project evolves, ensuring we
                don't leave any hidden gaps in your upcoming apps.
              </Highlight>
            </Text>
          </VStack>
        </Center>

        <Center>
          <Image
            src=""
            fallbackSrc="https://via.placeholder.com/300"
            borderRadius={"20px"}
          />
        </Center>
      </SimpleGrid>
    </Grid>
  );
};
