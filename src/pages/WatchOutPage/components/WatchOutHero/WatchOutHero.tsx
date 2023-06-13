import { Grid, Heading, VStack, HStack, Link } from "@chakra-ui/react";
import { WatchOutLogoAnim } from "../WatchOutLogoAnim/WatchOutLogoAnim";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";
import { Colours } from "../../../../colourScheme";

export const WatchOutHero = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <VStack display={"flex"} justifyContent={"center"} alignItems="center">
        {" "}
        <WatchOutLogoAnim />
        <Heading fontSize={"9xl"}>Watch Out.</Heading>
        <Heading fontSize={"6xl"}>
          Supporting{" "}
          <Heading
            as="span"
            fontSize={"6xl"}
            color={Colours.lightModeWatchOutAccent}
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
        </HStack>
      </VStack>
    </Grid>
  );
};
