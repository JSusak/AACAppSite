import {
  Grid,
  SimpleGrid,
  Center,
  VStack,
  Heading,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { Colours } from "../../../../colourScheme";

export const CodesignExplanationSection = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <SimpleGrid columns={1}>
        <Center>
          <VStack>
            <Heading
              fontSize={ResponsiveSizes.HeroHeaderSizes}
              textAlign={"center"}
            >
              Co-Design Process
            </Heading>

            <SimpleGrid columns={[1, 1, 2, 2]} spacing="2rem">
              <VStack>
                <Heading
                  fontSize={ResponsiveSizes.SecondaryHeaderSizes}
                  textAlign={"center"}
                >
                  What is it?
                </Heading>
                <Divider borderColor={Colours.lightModeMainCol} />
                <Text fontSize={"xl"} maxW="2xl" textAlign={"center"} w="90%">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda maxime, suscipit ut in tempora adipisci ea
                  repellendus aliquam ducimus? Distinctio necessitatibus ea,
                  perspiciatis fugit officiis minus earum nihil a. Quos. Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
                  autem sunt similique adipisci vero corporis doloremque quasi
                  illum obcaecati quia explicabo, itaque minima non officia
                  repellat omnis labore. Perferendis, quisquam.
                </Text>
              </VStack>
              <VStack>
                <Heading
                  fontSize={ResponsiveSizes.SecondaryHeaderSizes}
                  textAlign={"center"}
                >
                  How did we use it?
                </Heading>
                <Divider borderColor={Colours.lightModeMainCol} />
                <Text fontSize={"xl"} maxW="2xl" textAlign={"center"} w="90%">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda maxime, suscipit ut in tempora adipisci ea
                  repellendus aliquam ducimus? Distinctio necessitatibus ea,
                  perspiciatis fugit officiis minus earum nihil a. Quos. Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
                  autem sunt similique adipisci vero corporis doloremque quasi
                  illum obcaecati quia explicabo, itaque minima non officia
                  repellat omnis labore. Perferendis, quisquam.
                </Text>
              </VStack>
            </SimpleGrid>

            <SimpleGrid columns={1} spacing={"1rem"}>
              <Button colorScheme="orange">Learn More</Button>
              <Button colorScheme="blue" variant={"outline"}>
                Project Facts
              </Button>
            </SimpleGrid>
          </VStack>
        </Center>
      </SimpleGrid>
    </Grid>
  );
};
