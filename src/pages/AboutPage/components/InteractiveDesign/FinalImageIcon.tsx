import { Image } from "@chakra-ui/image";
import { Box, Center, Heading, Link } from "@chakra-ui/layout";

import { NavLink as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

export const FinalImageIcon = ({
  headerName,
  id,
  width,
  height,
  imageURL,
  linkTo,
}: {
  headerName: string;
  id: string;
  imageURL: string;
  width: number;
  height: number;
  linkTo: string;
}): JSX.Element => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <Link as={RouterLink} to={"/" + linkTo.toLowerCase()}>
        <Box
          id={id}
          width={`${width.toString()}px`}
          height={`${height.toString()}px`}
          borderRadius={"50px"}
          display={"flex"}
          justifyContent={"center"}
          boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
          position={"relative"}
        >
          <Center>
            <Image
              src={imageURL}
              borderRadius={"10%"}
              fallbackSrc={`https://via.placeholder.com/${width}x${height}`}
            />

            <Box
              w={"100%"}
              h="100%"
              transition="all 0.5s ease-in-out"
              position="absolute"
              borderRadius={"44px"}
            >
              <Center>
                <Heading fontSize={"2xl"} mt="1rem">
                  {headerName}
                </Heading>
              </Center>
            </Box>
          </Center>
        </Box>
      </Link>
    </motion.div>
  );
};
