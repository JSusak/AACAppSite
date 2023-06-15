import {
  Heading,
  Grid,
  VStack,
  Text,
  SimpleGrid,
  Image,
  Center,
} from "@chakra-ui/react";

export const AboutTop = (): JSX.Element => {
  return (
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
        <VStack display={"flex"} justifyContent={"center"} alignItems="center">
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
  );
};
