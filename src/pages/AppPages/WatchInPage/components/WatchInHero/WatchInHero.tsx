import { Grid, HStack, Heading, Link } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { WatchInLogoAnim } from "../WatchInLogoAnim/WatchInLogoAnim";
import { ResponsiveSizes } from "../../../../../responsiveSizes";
import { Colours } from "../../../../../colourScheme";

export const WatchInHero = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <VStack
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        textAlign={"center"}
      >
        {" "}
        <WatchInLogoAnim />
        <Heading fontSize={ResponsiveSizes.HeroHeaderSizes}>Watch In.</Heading>
        <Heading fontSize={ResponsiveSizes.SecondaryHeaderSizes}>
          Aiding{" "}
          <Heading
            as="span"
            fontSize={ResponsiveSizes.SecondaryHeaderSizes}
            color={Colours.lightModeWatchInAccent}
          >
            cognitive support.
          </Heading>{" "}
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
                color: Colours.lightModeWatchInAccent,
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
