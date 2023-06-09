import { Heading, VStack, Grid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export const VideoPreview = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative">
      <VStack mt="6rem">
        <Heading fontSize={"8xl"}>Video Demonstration</Heading>
        <Heading fontSize={"4xl"}>
          See the apps for yourself! (embedded yt vid maybe)
        </Heading>

        <Image mt="4rem" fallbackSrc="https://via.placeholder.com/1000x500" />
      </VStack>
    </Grid>
  );
};
