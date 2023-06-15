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

export const VisionAndValues = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <SimpleGrid columns={2}>
        <VStack display={"flex"} justifyContent={"center"} alignItems="center">
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
            height={"90%"}
            src="./kcl.png"
            borderRadius={"10%"}
            fallbackSrc="https://via.placeholder.com/850x800"
          />
        </Center>
      </SimpleGrid>
    </Grid>
  );
};
