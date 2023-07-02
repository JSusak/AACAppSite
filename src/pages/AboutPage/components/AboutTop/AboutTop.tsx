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
        width={"300px"}
        p="0.5rem"
        src={imgSRC}
        fallbackSrc="https://via.placeholder.com/300"
        borderRadius={"10%"}
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
      <Grid minH="93vh" position="relative">
        <SimpleGrid columns={[1, 1, 1, 3]} spacingX="2rem">
          <Center>
            <SimpleGrid
              columns={[2, 2, 2, 1]}
              display={["none", "none", "none", "block"]}
            >
              <AboutTopImage imgSRC="./kcl.png" />
              <AboutTopImage imgSRC="./kcl.png" />
            </SimpleGrid>
          </Center>
          <VStack
            display={"flex"}
            justifyContent={"center"}
            alignItems="center"
            ml="1rem"
            mr="1rem"
          >
            <Heading fontSize={ResponsiveSizes.HeroHeaderSizes}>About</Heading>

            <Text fontSize={"xl"} maxW="90%" textAlign={"center"}>
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
            <SimpleGrid columns={[2, 2, 2, 1]}>
              <AboutTopImage imgSRC="./kcl.png" />
              <AboutTopImage imgSRC="./kcl.png" />
            </SimpleGrid>
          </Center>
        </SimpleGrid>
      </Grid>
    </motion.div>
  );
};
