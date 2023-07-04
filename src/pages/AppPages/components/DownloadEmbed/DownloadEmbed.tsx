import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Colours } from "../../../../colourScheme";

const downloadVariants = {
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    y: -50,
    x: -25,
  },
};

//In order to link to a download, the file should be available in the 'public'
//folder which you can then pass in as a parameter, such as './appstore.svg'
export const DownloadEmbed = ({
  embedIcon,
  embedName,
  embedText,
  embedLink,
}: {
  embedIcon: JSX.Element;
  embedName: string;
  embedText: string;
  embedLink: string;
}): JSX.Element => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, textDecoration: "none" }}
      variants={downloadVariants}
      viewport={{ once: true }}
    >
      <Link
        download
        isExternal
        href={embedLink}
        _hover={{
          "#embedHeading": {
            textDecoration: `underline dashed ${embedIcon.props.color}`,
          },
          textDecoration: "none",
        }}
      >
        <Card
          w="100%"
          borderRadius={"10px"}
          backgroundColor={useColorModeValue(
            "blackAlpha.100",
            Colours.darkModeMainCol
          )}
        >
          <CardHeader>
            <VStack>
              {embedIcon}
              <Heading size="lg" id="embedHeading">
                {embedName}
              </Heading>
            </VStack>
          </CardHeader>
          <CardBody>
            <Center>
              <Text maxW="md" mt="-0.5rem">
                {embedText}
              </Text>
            </Center>
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
};
