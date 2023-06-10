import {
  Heading,
  Grid,
  VStack,
  Text,
  ListItem,
  UnorderedList,
  SimpleGrid,
  Image,
  Center,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { InteractiveDesign } from "./components/InteractiveDesign/InteractiveDesign";
import { InteractiveDesignVertical } from "./components/InteractiveDesign/InteractiveDesignVertical";
import { AboutTop } from "./components/AboutTop/AboutTop";
import { ProjectOverview } from "./components/ProjectOverview/ProjectOverview";
import { VisionAndValues } from "./components/VisionAndValues/VisionAndValues";
import { InteractiveSection } from "./components/InteractiveSection/InteractiveSection";

export const AboutPage: React.FC = (): JSX.Element => {
  return (
    <>
      {/* Top section */}
      <AboutTop />
      {/* Project Overview section */}
      <ProjectOverview />

      {/* Vision & Values section */}
      <VisionAndValues />

      {/* Interactive Diagram section */}
      <InteractiveSection />

      {/* Aphasia Reconnectsection */}
      <Grid minH="93vh" position="relative">
        <VStack mt="2rem">
          <Heading fontSize={"7xl"}>Our Charity</Heading>
          <Text fontSize={"xl"} maxW="4xl" textAlign={"left"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            perspiciatis reprehenderit, veniam obcaecati consequatur, nostrum
            harum, vitae perferendis labore quisquam reiciendis atque nam earum?
            Ipsum amet fugiat quam pariatur vel. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Enim quae maiores, dolore tenetur
            corporis velit neque est, voluptatibus dicta doloremque fugit eum
            nulla beatae. Culpa facilis fuga corporis ipsam ratione. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit
          </Text>

          <SimpleGrid columns={2} spacing={5} mt="2rem">
            <Button size={"lg"} colorScheme="blue">
              View Site
            </Button>
            <Button size={"lg"} colorScheme="blue">
              Get Involved
            </Button>
          </SimpleGrid>

          <Image
            mt="2rem"
            mb="2rem"
            width={"1500px"}
            height={"800px"}
            src="./kcl.png"
            borderRadius={"10%"}
            fallbackSrc="https://via.placeholder.com/1500x800"
          />
        </VStack>
      </Grid>
    </>
  );
};
