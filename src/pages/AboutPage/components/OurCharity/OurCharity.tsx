import {
  Heading,
  Grid,
  VStack,
  Text,
  SimpleGrid,
  Image,
  Button,
  Center,
} from "@chakra-ui/react";
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { motion } from "framer-motion";
import { AboutPageVerticalAnim } from "../AboutPageVerticalAnim";
export const OurCharity = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <VStack mt="2rem">
        <motion.span
          variants={AboutPageVerticalAnim}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <Heading fontSize={ResponsiveSizes.HeroHeaderSizes}>
            Our Charity
          </Heading>
        </motion.span>
        <motion.span
          variants={AboutPageVerticalAnim}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <Center>
            <Text
              fontSize={"xl"}
              maxW={["90%", "90%", "3xl", "3xl"]}
              textAlign={["center", "center", "center", "left"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto perspiciatis reprehenderit, veniam obcaecati
              consequatur, nostrum harum, vitae perferendis labore quisquam
              reiciendis atque nam earum? Ipsum amet fugiat quam pariatur vel.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae
              maiores, dolore tenetur corporis velit neque est, voluptatibus
              dicta doloremque fugit eum nulla beatae. Culpa facilis fuga
              corporis ipsam ratione. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit
            </Text>
          </Center>
        </motion.span>

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
          src="./images.jpg"
          borderRadius={"10px"}
          objectFit={"cover"}
          fallbackSrc="https://via.placeholder.com/1500x800"
        />
      </VStack>
    </Grid>
  );
};
