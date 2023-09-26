import {
  Text,
  Box,
  Center,
  VStack,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { PeopleModal } from "./PeopleModal";

const peopleIconAnim = {
  hidden: {
    opacity: 0,

    scale: 0.8,
  },
  visible: {
    opacity: 1,

    scale: 1,
    transition: {
      duration: 0.8,
      type: "tween",
    },
  },
};
//Reusable individual person icon - Highly customisable, allowing you to define nearly every feature of the icon.
export const PeopleIcon = ({
  imagePath,
  personName,
  organisationName,
  projectRoles,
  primaryWebLink,
  primaryIcon,
  secondaryWebLink,
  secondaryIcon,
  furtherInfo,
}: {
  imagePath: string;
  personName: string;
  organisationName: string;
  projectRoles: string[];
  primaryWebLink: string;
  furtherInfo: string;
  secondaryWebLink: string;
  primaryIcon: JSX.Element;
  secondaryIcon: JSX.Element;
}): JSX.Element => {
  const [isHover, setIsHover] = useState(false);
  const [peopleModalOpen, setPeopleModalOpen] = useState(false);

  const onModalClose = () => {
    document.body.style.overflow = "";
    setPeopleModalOpen(false);
  };
  const onModalOpen = () => {
    document.body.style.overflow = "hidden";
    setPeopleModalOpen(true);
  };

  return (
    <>
      <motion.div
        variants={peopleIconAnim}
        whileInView={"visible"}
        initial="hidden"
        style={{ cursor: "pointer" }}
      >
        <Box
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="personIconContainer"
          width={["300px", "350px", "400px", "400px"]}
          height={["300px", "350px", "400px", "400px"]}
          style={{
            position: "relative",
          }}
          onClick={onModalOpen}
        >
          <div className="personImage">
            <Image
              boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
              borderRadius={"100%"}
              width={"100%"}
              height={"100%"}
              zIndex={9}
              opacity={isHover ? 0.2 : 1}
              filter={isHover ? "blur(1px)" : "none"}
              transition={"all 0.2s ease-in-out"}
              src={imagePath}
              position={"absolute"}
              fallbackSrc="https://via.placeholder.com/400"
            />
          </div>
          {/* Side containing all the info, to be show on hover/tap... */}
          <Box
            borderRadius={"100%"}
            opacity={isHover ? 1 : 0}
            width={"100%"}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            transition={"all 0.2s ease-in-out"}
            backgroundColor={useColorModeValue("orange.100", "blackAlpha.500")}
            boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
          >
            <Center>
              <VStack zIndex={isHover ? 11 : 1}>
                <Heading fontSize={"4xl"}>{personName}</Heading>
                <Heading fontSize={"xl"}>{organisationName}</Heading>

                <Text>Interact to learn more.</Text>
              </VStack>
            </Center>
          </Box>
        </Box>
      </motion.div>

      <AnimatePresence mode="wait" initial={false}>
        {peopleModalOpen && (
          <PeopleModal
            imagePath={imagePath}
            personName={personName}
            projectRoles={projectRoles}
            primaryWebLink={primaryWebLink}
            secondaryWebLink={secondaryWebLink}
            primaryIcon={primaryIcon}
            secondaryIcon={secondaryIcon}
            onModalClose={onModalClose}
            furtherInfo={furtherInfo}
          />
        )}
      </AnimatePresence>
    </>
  );
};
