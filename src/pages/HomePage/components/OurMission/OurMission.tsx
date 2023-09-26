import { Button } from "@chakra-ui/button";
import {
  SimpleGrid,
  VStack,
  Grid,
  Center,
  Heading,
  Divider,
  Text,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { motion } from "framer-motion";
import { homePageFadeInVertical } from "../homePageAnims";
import { ListItem, UnorderedList } from "@chakra-ui/react";

export const OurMission = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative">
      <VStack
        mt="2rem"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack>
          <Heading
            fontSize={ResponsiveSizes.HeroHeaderSizes}
            textAlign={"center"}
          >
            Looking beyond tablet-based AAC.
          </Heading>
          <Divider />

          <motion.span
            variants={homePageFadeInVertical}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Center>
              <VStack>
                <Text
                  fontSize={["xl", "xl", "2xl", "2xl"]}
                  w={["90%", "90%", "90%", "4xl"]}
                  textAlign={["center", "center", "center", "left"]}
                >
                  Children, teens and adults who can't speak can use
                  tablet-based Augmentative and Alternative Communication (AAC)
                  apps to support and build their language skills. Based on
                  design insights from working directly with communities living
                  with aphasia we present two lightweight smartwatch apps to
                  support communication. In just a few taps, enrich confidence
                  in your communication and start exploring the world with a
                  wrist-based support!
                </Text>
                <UnorderedList>
                  <ListItem
                    w={["90%", "90%", "90%", "4xl"]}
                    fontSize={["lg", "lg", "xl", "xl"]}
                  >
                    This project was led by accessibility researchers from
                    King's College London's Human-Centered Computing Group in
                    partnership with Aphasia Re-Connect.
                  </ListItem>
                </UnorderedList>
              </VStack>
            </Center>
          </motion.span>
          <Divider />
          <SimpleGrid columns={2}>
            <Center>
              <Image
                src=""
                w="80%"
                fallbackSrc="https://via.placeholder.com/400"
                borderRadius={"20%"}
              />
            </Center>
            <Center>
              <Image
                src=""
                w="80%"
                fallbackSrc="https://via.placeholder.com/400"
                borderRadius={"20%"}
              />
            </Center>
          </SimpleGrid>
          <SimpleGrid columns={1} spacing={"1rem"} mt="2rem" mb="2rem">
            <Button colorScheme="orange" size={"lg"}>
              {" "}
              Project Description
            </Button>
            <Button colorScheme="blue" size={"lg"}>
              What is Aphasia?
            </Button>

            <Button colorScheme="blue" size={"lg"} variant={"outline"}>
              View Contributors
            </Button>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Grid>
  );
};
