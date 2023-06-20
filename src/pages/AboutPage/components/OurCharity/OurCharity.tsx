import {
  Heading,
  Grid,
  VStack,
  Text,
  SimpleGrid,
  Image,
  Button,
} from "@chakra-ui/react";
export const OurCharity = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <VStack mt="2rem">
        <Heading fontSize={"7xl"}>Our Charity</Heading>
        <Text
          fontSize={"xl"}
          maxW={["90%", "90%", "3xl", "3xl"]}
          textAlign={"left"}
        >
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
          width={"95%"}
          height={"800px"}
          src="./kcl.png"
          borderRadius={"10px"}
          objectFit={"cover"}
          fallbackSrc="https://via.placeholder.com/1500x800"
        />
      </VStack>
    </Grid>
  );
};
