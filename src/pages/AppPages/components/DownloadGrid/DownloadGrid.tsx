import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { DownloadEmbed } from "../DownloadEmbed/DownloadEmbed";

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

interface downloadEmbedType {
  embedIcon: JSX.Element;
  embedName: string;
  embedText: string;

  embedLink: string;
}

//Abstraction of a SimpleGrid to be used for download embeds.
export const DownloadGrid = ({
  listOfDownloads,
}: {
  listOfDownloads: downloadEmbedType[];
}): JSX.Element => {
  return (
    <Box w="100%">
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
              {listOfDownloads.map((download, index) => {
                return (
                  <DownloadEmbed
                    key={`embed${download.embedName}${index}`}
                    embedIcon={download.embedIcon}
                    embedName={download.embedName}
                    embedText={download.embedText}
                    embedLink={download.embedLink}
                  />
                );
              })}
            </SimpleGrid>
          </Center>
        </motion.div>
      </Center>
    </Box>
  );
};
