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
} from "@chakra-ui/react";
import { InteractiveDesign } from "./components/InteractiveDesign/InteractiveDesign";

export const AboutPage: React.FC = (): JSX.Element => {
  return (
    <>
      {/* Top section */}
      <Grid minH="93vh" position="relative" backgroundColor={"red.100"}>
        <SimpleGrid columns={3}>
          <Center>
            <VStack>
              <Image
                width={"300px"}
                src="./kcl.png"
                fallbackSrc="https://via.placeholder.com/300"
                borderRadius={"10%"}
              />
              <Image
                width={"300px"}
                src="./kcl.png"
                borderRadius={"10%"}
                fallbackSrc="https://via.placeholder.com/300"
              />
            </VStack>
          </Center>
          <VStack
            display={"flex"}
            justifyContent={"center"}
            alignItems="center"
          >
            <Heading fontSize={"9xl"}>About</Heading>

            <Text fontSize={"xl"} maxW="2xl" textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              maxime, suscipit ut in tempora adipisci ea repellendus aliquam
              ducimus? Distinctio necessitatibus ea, perspiciatis fugit officiis
              minus earum nihil a. Quos. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Facilis, autem sunt similique adipisci vero
              corporis doloremque quasi illum obcaecati quia explicabo, itaque
              minima non officia repellat omnis labore. Perferendis, quisquam.
            </Text>
          </VStack>
          <Center>
            <VStack>
              <Image
                width={"300px"}
                src="./kcl.png"
                fallbackSrc="https://via.placeholder.com/300"
                borderRadius={"10%"}
              />
              <Image
                width={"300px"}
                src="./kcl.png"
                fallbackSrc="https://via.placeholder.com/300"
                borderRadius={"10%"}
              />
            </VStack>
          </Center>
        </SimpleGrid>
      </Grid>

      {/* Project Overview section */}
      <Grid minH="93vh" position="relative" backgroundColor={"green.100"}>
        <SimpleGrid columns={2}>
          <VStack
            display={"flex"}
            justifyContent={"center"}
            alignItems="center"
          >
            <Heading fontSize={"7xl"} textAlign={"left"}>
              Project Description
            </Heading>

            <Text fontSize={"xl"} maxW="3xl" textAlign={"left"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              maxime, suscipit ut in tempora adipisci ea repellendus aliquam
              ducimus? Distinctio necessitatibus ea, perspiciatis fugit officiis
              minus earum nihil a. Quos. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Facilis, autem sunt similique adipisci vero
              corporis doloremque quasi illum obcaecati quia explicabo, itaque
              minima non officia repellat omnis labore. Perferendis, quisquam.
            </Text>
            <Heading fontSize={"5xl"} textAlign={"left"}>
              Research Funding
            </Heading>

            <Text fontSize={"xl"} maxW="3xl" textAlign={"left"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              maxime, suscipit ut in tempora adipisci ea repellendus aliquam
              ducimus? Distinctio necessitatibus ea, perspiciatis fugit officiis
              minus earum nihil a. Quos. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Facilis, autem sunt similique adipisci vero
              corporis doloremque quasi illum obcaecati quia explicabo, itaque
              minima non officia repellat omnis labore. Perferendis, quisquam.
            </Text>
          </VStack>
          <Center>
            <SimpleGrid columns={2} spacing={"20px"}>
              <Image
                src="./kcl.png"
                fallbackSrc="https://via.placeholder.com/400x400"
                borderRadius={"10%"}
              />
              <Image
                src="./kcl.png"
                fallbackSrc="https://via.placeholder.com/400x400"
                borderRadius={"10%"}
              />
            </SimpleGrid>
          </Center>
        </SimpleGrid>
      </Grid>

      {/* Vision & Values section */}
      <Grid minH="93vh" position="relative" backgroundColor={"blue.100"}>
        <SimpleGrid columns={2}>
          <VStack
            display={"flex"}
            justifyContent={"center"}
            alignItems="center"
          >
            <Heading fontSize={"7xl"} textAlign={"left"}>
              Overall Vision & Values
            </Heading>

            <Text fontSize={"xl"} maxW="3xl" textAlign={"left"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              maxime, suscipit ut in tempora adipisci ea repellendus aliquam
              ducimus? Distinctio necessitatibus ea, perspiciatis fugit officiis
              minus earum nihil a. Quos. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Facilis, autem sunt similique adipisci vero
              corporis doloremque quasi illum obcaecati quia explicabo, itaque
              minima non officia repellat omnis labore. Perferendis, quisquam.
            </Text>

            <UnorderedList>
              <ListItem fontSize={"2xl"}>Lorem ipsum dolor sit amet</ListItem>
              <ListItem fontSize={"2xl"}>Consectetur adipiscing elit</ListItem>
              <ListItem fontSize={"2xl"}>
                Integer molestie lorem at massa
              </ListItem>
              <ListItem fontSize={"2xl"}>
                Facilisis in pretium nisl aliquet
              </ListItem>
            </UnorderedList>
          </VStack>
          <Center>
            <Image
              width={"850px"}
              height={"800px"}
              src="./kcl.png"
              borderRadius={"10%"}
              fallbackSrc="https://via.placeholder.com/850x800"
            />
          </Center>
        </SimpleGrid>
      </Grid>

      {/* Interactive Diagram section */}
      <Grid minH="93vh" position="relative">
        <Center>
          <InteractiveDesign />
        </Center>
      </Grid>
    </>
  );
};
