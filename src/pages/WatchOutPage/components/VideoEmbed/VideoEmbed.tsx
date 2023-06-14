import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export const VideoEmbed = (): JSX.Element => {
  return (
    <Box borderWidth={"3px"} borderColor={"blue.100"} width={"90%"}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=C_sb2KYbi-4"
        width={"100%"}
      />
    </Box>
  );
};
