import { Center, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { DownloadEmbed } from "../../../components/DownloadEmbed/DownloadEmbed";
import { Colours } from "../../../../../colourScheme";
import {
  FaAccessibleIcon,
  FaAudioDescription,
  FaImages,
  FaPaperclip,
} from "react-icons/fa";

const downloadGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.17,
    },
  },
};

export const DownloadGrid = (): JSX.Element => {
  return (
    <Center>
      <motion.div
        variants={downloadGrid}
        initial="hidden"
        whileInView="visible"
      >
        <Center>
          <SimpleGrid
            columns={[1, 1, 1, 2]}
            spacing={"2rem"}
            mt="2rem"
            width={"90%"}
          >
            <DownloadEmbed
              embedIcon={
                <FaPaperclip
                  color={Colours.lightModeWatchOutAccent}
                  size="40px"
                />
              }
              embedName={"Download Material 1"}
              embedText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              embedLink={"test"}
            />

            <DownloadEmbed
              embedIcon={
                <FaImages color={Colours.lightModeWatchOutAccent} size="40px" />
              }
              embedName={"Download Material 2"}
              embedText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              embedLink={"test"}
            />
            <DownloadEmbed
              embedIcon={
                <FaAccessibleIcon
                  color={Colours.lightModeWatchOutAccent}
                  size="40px"
                />
              }
              embedName={"Download Material 3"}
              embedText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              embedLink={"test"}
            />
            <DownloadEmbed
              embedIcon={
                <FaAudioDescription
                  color={Colours.lightModeWatchOutAccent}
                  size="40px"
                />
              }
              embedName={"Download Material 4"}
              embedText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              embedLink={"test"}
            />
          </SimpleGrid>
        </Center>
      </motion.div>
    </Center>
  );
};
