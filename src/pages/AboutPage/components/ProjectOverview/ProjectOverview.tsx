import {
  Heading,
  Grid,
  VStack,
  Text,
  SimpleGrid,
  Image,
  Center,
} from "@chakra-ui/react";
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { AboutPageVerticalAnim } from "../AboutPageVerticalAnim";
import { motion } from "framer-motion";

export const ProjectOverview = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <SimpleGrid columns={[1, 1, 1, 2]}>
        <VStack display={"flex"} justifyContent={"center"} alignItems="center">
          <motion.span
            variants={AboutPageVerticalAnim}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={ResponsiveSizes.SecondaryHeaderSizes}
              textAlign={"center"}
            >
              Project Description
            </Heading>
          </motion.span>

          <motion.span
            variants={AboutPageVerticalAnim}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            style={{ maxWidth: "90%" }}
          >
            <Text
              fontSize={"xl"}
              textAlign={["center", "center", "center", "left"]}
            >
              Communication has been described as the essence of human life and
              is integral to prevent social marginalisaton. Yet, our
              communication abilites are often most challenged with strangers
              and in public domains with significant social pressures. Within
              these domains, typically AAC devices are hard to use and very
              socially prominent creating further stigmas. In contrast,
              smartwatches are a more discreet wearable technology offering a
              host of health and wellness benefits.
            </Text>
          </motion.span>

          <motion.span
            variants={AboutPageVerticalAnim}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={ResponsiveSizes.SecondaryHeaderSizes}
              textAlign={"left"}
            >
              Co-design
            </Heading>
          </motion.span>

          <motion.span
            variants={AboutPageVerticalAnim}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            style={{ maxWidth: "90%" }}
          >
            <Text
              fontSize={"xl"}
              textAlign={["center", "center", "center", "left"]}
            >
              For both AAC smartwatch apps, our co-design process involved
              extensive collaboration with people living with aphasia recruited
              from the charity Aphasia Re-Connect over several months. We began
              with three co-design workshops that: (1) explored participants
              contextual communication challenges, (2) tangible prototyping of
              participants solutions and (3) iterating deployed smartwatch
              prototypes. With the smartwatch apps built, we then proceeded to
              complementary evaluation workshops. These workshops focused on
              testing in a multiltude of ways: role-playing communication
              scenarios with both smartwatch apps, session observation and
              discussion.
            </Text>
          </motion.span>
        </VStack>
        <Center>
          <SimpleGrid columns={2} spacingX={"0.5rem"} p="0.5rem">
            <Image
              src="./watchOnHand.png"
              width={"300px"}
              height="300px"
              fallbackSrc="https://via.placeholder.com/300x300"
              borderRadius={"10%"}
            />
            <Image
              src="./qrScan.png"
              width={"300px"}
              height="300px"
              fallbackSrc="https://via.placeholder.com/300x300"
              borderRadius={"10%"}
            />
          </SimpleGrid>
        </Center>
      </SimpleGrid>
    </Grid>
  );
};
