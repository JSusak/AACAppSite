import {
  Heading,
  Grid,
  VStack,
  Text,
  SimpleGrid,
  Image,
  Center,
} from "@chakra-ui/react";

export const ProjectOverview = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <SimpleGrid columns={2}>
        <VStack display={"flex"} justifyContent={"center"} alignItems="center">
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
  );
};
