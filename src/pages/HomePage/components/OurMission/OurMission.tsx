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
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { motion } from "framer-motion";
import { homePageFadeInVertical } from "../homePageAnims";
import { Link, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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

                <Text
                  textAlign={"center"}
                  w={["90%", "90%", "90%", "4xl"]}
                  fontSize={["lg", "lg", "xl", "xl"]}
                  color={useColorModeValue("blackAlpha.600", "whiteAlpha.600")}
                >
                  This project was led by accessibility researchers from{" "}
                  <Link
                    style={{ color: "#FF7276" }}
                    isExternal
                    href={"https://www.kcl.ac.uk/"}
                  >
                    King's College London's
                  </Link>{" "}
                  Human-Centered Computing Group in partnership with Aphasia
                  Re-Connect.
                </Text>
              </VStack>
            </Center>
          </motion.span>
          <Divider />

          <SimpleGrid columns={1} spacing={"1rem"} mt="2rem" mb="2rem">
            <NavLink to={"/about"}>
              <Button colorScheme="orange" size={"lg"}>
                {" "}
                Project Description
              </Button>
            </NavLink>
            <NavLink to={"/people"}>
              <Button colorScheme="blue" size={"lg"} variant={"outline"}>
                View Contributors
              </Button>
            </NavLink>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Grid>
  );
};
