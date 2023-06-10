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

export const AboutPage: React.FC = (): JSX.Element => {
  const [isLargerThan1360] = useMediaQuery("(min-width: 1360px)");
  return (
    <>
      {/* Top section */}
      <Grid minH="93vh" position="relative">
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
      <Grid minH="93vh" position="relative">
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
      <Grid minH="93vh" position="relative">
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
              width={"90%"}
              height={"100%"}
              src="./kcl.png"
              borderRadius={"10%"}
              fallbackSrc="https://via.placeholder.com/850x800"
            />
          </Center>
        </SimpleGrid>
      </Grid>

      {/* Interactive Diagram section */}
      <Grid minH="93vh" position="relative" backgroundColor={"red.100"}>
        <Center>
          {isLargerThan1360 ? (
            <InteractiveDesign />
          ) : (
            <InteractiveDesignVertical />
          )}
        </Center>
      </Grid>

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
