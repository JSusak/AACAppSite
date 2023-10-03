import {
  Grid,
  Heading,
  VStack,
  HStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { WatchOutLogoAnim } from "../WatchOutLogoAnim/WatchOutLogoAnim";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";
import { Colours } from "../../../../../colourScheme";
import { FaGithub } from "react-icons/fa";
import { ResponsiveSizes } from "../../../../../responsiveSizes";
import { gridStagger, verticalFade } from "../../../../../Animations";

export const WatchOutHero = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <VStack
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        textAlign={"center"}
        as={motion.div}
        variants={gridStagger}
        initial="hidden"
        animate="visible"
      >
        {" "}
        <WatchOutLogoAnim />
        <Heading
          fontSize={ResponsiveSizes.HeroHeaderSizes}
          as={motion.span}
          variants={verticalFade}
        >
          Watch Out AAC
        </Heading>
        <Heading
          fontSize={ResponsiveSizes.SecondaryHeaderSizes}
          as={motion.span}
          variants={verticalFade}
        >
          Supporting{" "}
          <Heading
            as="span"
            fontSize={ResponsiveSizes.SecondaryHeaderSizes}
            color={useColorModeValue(
              Colours.lightModeWatchOutAccent,
              Colours.darkModeWatchOutAccent
            )}
          >
            face-to-face
          </Heading>{" "}
          interactions.
        </Heading>
        <HStack mt="2rem" spacing={"2rem"}>
          <motion.div
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring" }}
            variants={verticalFade}
          >
            <Link>
              <Image src="./appstore.svg" width={"150px"} />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring" }}
            variants={verticalFade}
          >
            <Link
              _hover={{
                bg: "none",
                borderColor: "none",
                color: Colours.lightModeNavColHighlight,
              }}
            >
              <FaGithub size="60px" />
            </Link>
          </motion.div>
        </HStack>
      </VStack>
    </Grid>
  );
};
