import { Grid, Heading, VStack } from "@chakra-ui/react";
import { VideoEmbed } from "../../../components/VideoEmbed/VideoEmbed";

import { DownloadGrid } from "../../../components/DownloadGrid/DownloadGrid";

import { watchOutMaterials } from "../../../watchInOutDownloadMaterials";
import { ResponsiveSizes } from "../../../../../responsiveSizes";

export const WatchOutFurtherInfoSection = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative">
      <VStack mt="2rem" mb="2rem">
        <Heading fontSize={ResponsiveSizes.SecondaryHeaderSizes}>
          Further Info...
        </Heading>
        <VideoEmbed link="https://www.youtube.com/watch?v=SNsdeS8VKg4" />
        <DownloadGrid listOfDownloads={watchOutMaterials} />
      </VStack>
    </Grid>
  );
};
