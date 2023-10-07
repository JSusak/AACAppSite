import {
  Grid,
  SimpleGrid,
  VStack,
  Heading,
  Center,
  Text,
  Box,
} from "@chakra-ui/react";
import { PublicationEmbed } from "../PublicationEmbed/PublicationEmbed";
import { publications } from "../../publications";
import { motion } from "framer-motion";
import { ResponsiveSizes } from "../../../../responsiveSizes";

import { AboutPageVerticalAnim } from "../AboutPageVerticalAnim";

const publicationSectionAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const PublicationSection = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <Center>
        <VStack>
          <motion.span
            variants={AboutPageVerticalAnim}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={ResponsiveSizes.SecondaryHeaderSizes}
              textAlign={["center", "center", "center", "left"]}
            >
              Academic Publications
            </Heading>
          </motion.span>

          <motion.span
            variants={AboutPageVerticalAnim}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Center>
              <Text
                fontSize={"xl"}
                maxW={["90%", "90%", "3xl", "3xl"]}
                textAlign={["center", "center", "center", "left"]}
              >
                This work is detailed in a 2023 academic publication entitled
                "Watch Your Language: Using Smartwatches to Support
                Communication". Published at the The 25th International ACM
                SIGACCESS Conference on Computers and Accessibility. The ASSETS
                conference is the premier forum for presenting research on the
                design, evaluation, use, and education related to computing for
                people with disabilities and older adults.
              </Text>
            </Center>
          </motion.span>

          <motion.div
            variants={publicationSectionAnim}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Box w="100%">
              <Center>
                <SimpleGrid
                  columns={[1, 1, 1, 1]} //Change to 2 if you want more publications to be displayed in a more concise way.
                  spacing={"2rem"}
                  mt="2rem"
                  mb="2rem"
                  width={"90%"}
                >
                  {publications.map((publication, index) => {
                    return (
                      <PublicationEmbed
                        key={`publication${index}`}
                        publicationName={publication.publicationName}
                        publicationImage={publication.publicationImage}
                        publicationAuthors={publication.publicationAuthors}
                        inProceedingsOf={publication.inProceedingsOf}
                        paperURL={publication.paperURL}
                      />
                    );
                  })}
                </SimpleGrid>
              </Center>
            </Box>
          </motion.div>
        </VStack>
      </Center>
    </Grid>
  );
};
