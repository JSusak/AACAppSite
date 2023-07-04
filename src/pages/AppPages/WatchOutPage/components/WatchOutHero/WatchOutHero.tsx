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

export const WatchOutHero = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <VStack
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        textAlign={"center"}
      >
        {" "}
        <WatchOutLogoAnim />
        <Heading fontSize={ResponsiveSizes.HeroHeaderSizes}>
          Watch Out AAC
        </Heading>
        <Heading fontSize={ResponsiveSizes.SecondaryHeaderSizes}>
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
          >
            <Link>
              <Image src="./appstore.svg" width={"150px"} />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring" }}
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
