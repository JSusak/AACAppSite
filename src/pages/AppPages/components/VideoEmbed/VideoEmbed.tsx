import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { Colours } from "../../../../colourScheme";

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

export const VideoEmbed = ({ link }: { link: string }): JSX.Element => {
  return (
    <motion.div
      variants={videoEmbedVariants}
      initial="hidden"
      whileInView={"visible"}
      style={{
        width: "90%",
      }}
    >
      <Box borderWidth={"3px"} borderColor={Colours.lightModeHeader}>
        <ReactPlayer url={link} width={"100%"} height={"700px"} />
      </Box>
    </motion.div>
  );
};
