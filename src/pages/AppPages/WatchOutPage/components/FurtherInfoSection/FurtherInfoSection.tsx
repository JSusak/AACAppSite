import { Grid, Heading, VStack } from "@chakra-ui/react";
import { VideoEmbed } from "../VideoEmbed/VideoEmbed";

import { DownloadGrid } from "../DownloadGrid/DownloadGrid";

export const FurtherInfoSection = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative">
      <VStack mt="2rem" mb="2rem">
        <Heading fontSize={"6xl"}>Further Info...</Heading>
        <VideoEmbed />
        <DownloadGrid />
      </VStack>
    </Grid>
  );
};
