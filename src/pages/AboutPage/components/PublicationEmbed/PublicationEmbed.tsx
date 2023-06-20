import {
  Card,
  Heading,
  Link,
  VStack,
  Text,
  Divider,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Colours } from "../../../../colourScheme";

const publicationEmbedAnim = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      type: "spring",
    },
  },
};

export const PublicationEmbed = ({
  publicationName,
  publicationImage,
  publicationAuthors,
  inProceedingsOf,
  paperURL,
}: {
  publicationName: string;
  publicationImage: string;
  publicationAuthors: string[];
  inProceedingsOf: string;
  paperURL: string;
}): JSX.Element => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring" }}
      variants={publicationEmbedAnim}
      viewport={{ once: true }}
    >
      <Link isExternal href={paperURL} style={{ textDecoration: "none" }}>
        <Card w="100%" borderRadius={"10px"}>
          <VStack>
            <Box overflow={"hidden"} w={"95%"} m="0.5rem">
              <Image
                height={"300px"}
                src={publicationImage}
                fallbackSrc="https://via.placeholder.com/1000"
                borderRadius={"10px"}
                width={"100%"}
                objectFit={"cover"}
              />
            </Box>
            <Heading fontSize="3xl" textAlign={"center"} maxW="90%">
              {publicationName}
            </Heading>
            <Divider />
            <Heading fontSize={"2xl"} color={Colours.lightModeMainCol}>
              Authors:
            </Heading>
            <SimpleGrid columns={[2, 2, 3, 3]} spacing="2rem" mb="0.5rem">
              {publicationAuthors.map((author, key) => {
                return (
                  <Text fontSize={"xl"} key={key}>
                    {author}
                  </Text>
                );
              })}
            </SimpleGrid>
            <Divider />
          </VStack>

          <Text
            m="1rem"
            textAlign={"center"}
            fontSize={"md"}
            color="blackAlpha.500"
          >
            {inProceedingsOf}
          </Text>
        </Card>
      </Link>
    </motion.div>
  );
};
