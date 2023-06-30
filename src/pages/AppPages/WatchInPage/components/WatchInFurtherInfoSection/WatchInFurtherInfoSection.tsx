import { Grid, Heading, VStack } from "@chakra-ui/react";
import { VideoEmbed } from "../../../components/VideoEmbed/VideoEmbed";
import { DownloadGrid } from "../../../components/DownloadGrid/DownloadGrid";
import { watchInMaterials } from "../../../watchInOutDownloadMaterials";
import { ResponsiveSizes } from "../../../../../responsiveSizes";

export const WatchInFurtherInfoSection = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative">
      <VStack mt="2rem" mb="2rem">
        <Heading fontSize={ResponsiveSizes.SecondaryHeaderSizes}>
          Further Info...
        </Heading>
        <VideoEmbed link="https://www.youtube.com/watch?v=15Rjg7Vbax0" />
        <DownloadGrid listOfDownloads={watchInMaterials} />
      </VStack>
    </Grid>
  );
};
