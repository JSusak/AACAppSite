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
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { motion } from "framer-motion";
import { AboutPageVerticalAnim } from "../AboutPageVerticalAnim";

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
              Overall Vision & Values
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
            src="./images.jpg"
            borderRadius={"10%"}
            fallbackSrc="https://via.placeholder.com/800x800"
          />
        </Center>
      </SimpleGrid>
    </Grid>
  );
};
