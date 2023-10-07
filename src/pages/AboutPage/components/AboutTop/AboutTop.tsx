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
import { motion } from "framer-motion";
import { gridStagger, horizontalFade } from "../../../../Animations";

const aboutTopGridAnim = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const aboutTopItemAnim = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

//About Top Image, used to avoid code duplication in terms of animation and image properties.
const AboutTopImage = ({ imgSRC }: { imgSRC: string }): JSX.Element => {
  return (
    <motion.div variants={aboutTopItemAnim}>
      <Image
        width={["300px", "350px", "350px", "500px"]}
        height={["300px", "350px", "350px", "500px"]}
        p="0.5rem"
        src={imgSRC}
        fallbackSrc="https://via.placeholder.com/300"
        borderRadius={"10%"}
        objectFit={"cover"}
      />
    </motion.div>
  );
};

//Component for the About Top AKA 'about hero', provides a space to provide a set of
//images and a short description.
export const AboutTop = (): JSX.Element => {
  return (
    <motion.div
      variants={aboutTopGridAnim}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      <Grid
        minH="93vh"
        position="relative"
        as={motion.div}
        variants={gridStagger}
        initial="hidden"
        animate="visible"
      >
        <SimpleGrid columns={[1, 1, 1, 3]} spacingX="2rem">
          <Center>
            <SimpleGrid columns={1} display={["none", "none", "none", "block"]}>
              <AboutTopImage imgSRC="./watchOnHand.png" />
            </SimpleGrid>
          </Center>
          <VStack
            display={"flex"}
            justifyContent={"center"}
            alignItems="center"
            ml="1rem"
            mr="1rem"
          >
            <Heading
              fontSize={ResponsiveSizes.HeroHeaderSizes}
              as={motion.span}
              variants={horizontalFade}
            >
              About
            </Heading>

            <Text
              fontSize={"xl"}
              maxW="90%"
              textAlign={"center"}
              as={motion.span}
              variants={horizontalFade}
            >
              As smartwatches increase in global popularity with a host of
              fitness and lifestyle benefits. Now, is the optimal time to design
              smartwatch AAC apps that discreetly support communication of
              wearers "on the go". Indeed, communication in public spaces with
              social pressures is often most challenging. Importantly, both apps
              are flexible to unobtrusively support adapting communication
              needs. Directly co-designed with people living with the language
              impairment aphasia so as to ensure both apps meet people's daily
              language needs.
            </Text>
          </VStack>
          <Center>
            <SimpleGrid columns={1}>
              <AboutTopImage imgSRC="./situations.jpg" />
            </SimpleGrid>
          </Center>
        </SimpleGrid>
      </Grid>
    </motion.div>
  );
};
