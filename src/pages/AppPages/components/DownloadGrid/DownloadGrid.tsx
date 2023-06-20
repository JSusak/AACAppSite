import { Center, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const downloadGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.17,
    },
  },
};

//Abstraction of a SimpleGrid to be used for download embeds.
export const DownloadGrid = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <Center>
      <motion.div
        variants={downloadGrid}
        initial="hidden"
        whileInView="visible"
      >
        <Center>
          <SimpleGrid
            columns={[1, 1, 1, 2]}
            spacing={"2rem"}
            mt="2rem"
            width={"90%"}
          >
            {children}
          </SimpleGrid>
        </Center>
      </motion.div>
    </Center>
  );
};
