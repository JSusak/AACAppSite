import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const videoEmbedVariants = {
  visible: {
    opacity: 1,

    transition: {
      duration: 3,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const VideoEmbed = (): JSX.Element => {
  return (
    <motion.div
      variants={videoEmbedVariants}
      initial="hidden"
      whileInView={"visible"}
      style={{
        width: "90%",
      }}
    >
      <Box borderWidth={"3px"} borderColor={"blue.100"}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=C_sb2KYbi-4"
          width={"100%"}
          height={"700px"}
        />
      </Box>
    </motion.div>
  );
};
