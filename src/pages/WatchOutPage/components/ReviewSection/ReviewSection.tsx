import { Grid, Heading, VStack } from "@chakra-ui/react";
import { ReviewGrid } from "../ReviewGrid/ReviewGrid";

export const ReviewSection = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative">
      <VStack mt="2rem">
        <Heading fontSize={"6xl"}>What our users think...</Heading>
        <ReviewGrid />
      </VStack>
    </Grid>
  );
};
