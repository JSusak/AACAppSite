import { Grid, Heading, VStack } from "@chakra-ui/react";
import { VideoEmbed } from "../../../components/VideoEmbed/VideoEmbed";

import { DownloadGrid } from "../DownloadGrid/DownloadGrid";

export const FurtherInfoSection = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative">
      <VStack mt="2rem" mb="2rem">
        <Heading fontSize={"6xl"}>Further Info...</Heading>
        <VideoEmbed link="https://www.youtube.com/watch?v=SNsdeS8VKg4" />
        <DownloadGrid />
      </VStack>
    </Grid>
  );
};
