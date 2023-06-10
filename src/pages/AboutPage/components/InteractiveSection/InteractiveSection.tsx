import { Center, Grid } from "@chakra-ui/layout";
import { InteractiveDesign } from "../InteractiveDesign/InteractiveDesign";
import { InteractiveDesignVertical } from "../InteractiveDesign/InteractiveDesignVertical";
import { useMediaQuery } from "@chakra-ui/media-query";

export const InteractiveSection = (): JSX.Element => {
  const [isLargerThan1360] = useMediaQuery("(min-width: 1360px)");
  return (
    <Grid minH="93vh" position="relative" backgroundColor={"red.100"}>
      <Center>
        {isLargerThan1360 ? (
          <InteractiveDesign />
        ) : (
          <InteractiveDesignVertical />
        )}
      </Center>
    </Grid>
  );
};
