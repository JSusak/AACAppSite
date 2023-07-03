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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              maxime, suscipit ut in tempora adipisci ea repellendus aliquam
              ducimus? Distinctio necessitatibus ea, perspiciatis fugit officiis
              minus earum nihil a. Quos. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Facilis, autem sunt similique adipisci vero
              corporis doloremque quasi illum obcaecati quia explicabo, itaque
              minima non officia repellat omnis labore. Perferendis, quisquam.
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
              Research Funding
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              maxime, suscipit ut in tempora adipisci ea repellendus aliquam
              ducimus? Distinctio necessitatibus ea, perspiciatis fugit officiis
              minus earum nihil a. Quos. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Facilis, autem sunt similique adipisci vero
              corporis doloremque quasi illum obcaecati quia explicabo, itaque
              minima non officia repellat omnis labore. Perferendis, quisquam.
            </Text>
          </motion.span>
        </VStack>
        <Center>
          <SimpleGrid columns={2} spacingX={"0.5rem"} p="0.5rem">
            <Image
              src="./kcl.png"
              fallbackSrc="https://via.placeholder.com/300x300"
              borderRadius={"10%"}
            />
            <Image
              src="./kcl.png"
              fallbackSrc="https://via.placeholder.com/300x300"
              borderRadius={"10%"}
            />
          </SimpleGrid>
        </Center>
      </SimpleGrid>
    </Grid>
  );
};
