import {
  Heading,
  Grid,
  VStack,
  Text,
  SimpleGrid,
  Image,
  Center,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { motion } from "framer-motion";
import { AboutPageVerticalAnim } from "../AboutPageVerticalAnim";
import { Colours } from "../../../../colourScheme";

export const VisionAndValues = (): JSX.Element => {
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
              Charity Partner -- Aphasia Re-Connect
            </Heading>
          </motion.span>

          <motion.span
            variants={AboutPageVerticalAnim}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={["3xl", "4xl", "5xl", "6xl"]}
              textAlign={"center"}
            >
              What is Aphasia?
            </Heading>
          </motion.span>

          <Divider
            maxW={"70%"}
            borderColor={useColorModeValue(
              Colours.lightModeHeader,
              Colours.darkModeHeader
            )}
          />

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
              Every 11 minutes, three people in the UK have a stroke. About a
              third of these people will have Aphasia. This amounts to over
              367,000 people in the UK, a figure that increases by 20,000 each
              year. There are more people living with Aphasia than MS and
              Parkinson’s disease combined. Aphasia can affect the ability to
              read, write, speak or use numbers. It affects each person
              differently. It can affect anyone at any time and at any age. When
              aphasia strikes, it changes people’s lives in an instant. Aphasia
              can lead to isolation, the breakdown of relationships and, at
              times, depression and anxiety.
            </Text>
          </motion.span>

          <motion.span
            variants={AboutPageVerticalAnim}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={["3xl", "4xl", "5xl", "6xl"]}
              textAlign={"center"}
            >
              Who is Aphasia-Reconnect?
            </Heading>
          </motion.span>

          <Divider
            maxW={"70%"}
            borderColor={useColorModeValue(
              Colours.lightModeHeader,
              Colours.darkModeHeader
            )}
          />

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
              Aphasia Re-Connect is one of the most established aphasia
              charities in the UK. Aphasia Reconnect's mission is to create a
              peer support network of people living with aphasia and other
              acquired communication disabilities, to enable them to live life,
              discover opportunity, develop confidence and find wellbeing and
              mutual engagement within the wider community. Aphasia Re-Connect's
              vision is to see a world where people with aphasia and acquired
              communication disability enjoy a life more ordinary; with
              opportunity, freedom of choice, responsibility, and a quality of
              life and wellbeing. Supported conversation and good communication
              access are at the foundation of Aphasia Re-connect's practice --
              by supporting and helping remove many barriers to communication.
            </Text>
          </motion.span>
        </VStack>
        <Center>
          <Image
            width={"90%"}
            height={"90%"}
            src="./peopleIcons/reconnect.jpg"
            borderRadius={"10%"}
            fallbackSrc="https://via.placeholder.com/800x800"
          />
        </Center>
      </SimpleGrid>
    </Grid>
  );
};
