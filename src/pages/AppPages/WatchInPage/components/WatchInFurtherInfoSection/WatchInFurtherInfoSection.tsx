import { Grid, Heading, VStack } from "@chakra-ui/react";
import { VideoEmbed } from "../../../components/VideoEmbed/VideoEmbed";
import { DownloadGrid } from "../../../components/DownloadGrid/DownloadGrid";
import {
  FaAccessibleIcon,
  FaGlasses,
  FaRegNewspaper,
  FaSignLanguage,
} from "react-icons/fa";
import { DownloadEmbed } from "../../../components/DownloadEmbed/DownloadEmbed";
import { Colours } from "../../../../../colourScheme";

export const WatchInFurtherInfoSection = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative">
      <VStack mt="2rem" mb="2rem">
        <Heading fontSize={"6xl"}>Further Info...</Heading>
        <VideoEmbed link="https://www.youtube.com/watch?v=15Rjg7Vbax0" />
        <DownloadGrid
          children={
            <>
              <DownloadEmbed
                embedIcon={
                  <FaSignLanguage
                    color={Colours.lightModeWatchInAccent}
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
                  <FaAccessibleIcon
                    color={Colours.lightModeWatchInAccent}
                    size="40px"
                  />
                }
                embedName={"Download Material 2"}
                embedText={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
                embedLink={"test"}
              />
              <DownloadEmbed
                embedIcon={
                  <FaRegNewspaper
                    color={Colours.lightModeWatchInAccent}
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
                  <FaGlasses
                    color={Colours.lightModeWatchInAccent}
                    size="40px"
                  />
                }
                embedName={"Download Material 4"}
                embedText={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
                embedLink={"test"}
              />
            </>
          }
        />
      </VStack>
    </Grid>
  );
};
