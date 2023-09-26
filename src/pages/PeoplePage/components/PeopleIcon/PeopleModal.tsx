import {
  Button,
  Center,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ModalTemplate } from "../../../../components/ModalTemplate/ModalTemplate";
import { PeopleIconButton } from "./PeopleIconButton";
import { FaChevronCircleRight } from "react-icons/fa";

export const PeopleModal = ({
  imagePath,
  personName,
  projectRoles,
  furtherInfo,
  primaryWebLink,
  primaryIcon,
  secondaryWebLink,
  secondaryIcon,
  onModalClose,
}: {
  imagePath: string;
  personName: string;
  projectRoles: string[];
  primaryWebLink: string;
  secondaryWebLink: string;
  primaryIcon: JSX.Element;
  furtherInfo: string;
  secondaryIcon: JSX.Element;
  onModalClose: () => void;
}): JSX.Element => {
  return (
    <ModalTemplate>
      <Button
        onClick={onModalClose}
        position={"absolute"}
        top="2rem"
        right="2rem"
        leftIcon={<FaChevronCircleRight />}
        colorScheme="orange"
      >
        Back
      </Button>
      <Center>
        <VStack w="80%" spacing={"1rem"}>
          <Image
            boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
            borderRadius={"15px"}
            width={"800px"}
            height={"500px"}
            objectFit={"cover"}
            zIndex={9}
            transition={"all 0.2s ease-in-out"}
            src={imagePath}
            fallbackSrc="https://via.placeholder.com/400"
            m="2rem"
          />

          <Heading
            textAlign={"center"}
            fontSize={["4xl", "5xl", "6xl", "7xl"]}
            textDecor={"underline"}
          >
            {personName}
          </Heading>
          <Text textAlign={"center"} fontSize={["lg", "xl", "xl", "3xl"]}>
            {furtherInfo}
          </Text>
          <Heading textAlign={"center"} fontSize={["1xl", "2xl", "3xl", "4xl"]}>
            Get in touch:
          </Heading>
          <SimpleGrid
            columns={secondaryWebLink === "" ? 1 : 2}
            spacing={"2rem"}
          >
            <PeopleIconButton webLink={primaryWebLink} icon={primaryIcon} />
            <PeopleIconButton webLink={secondaryWebLink} icon={secondaryIcon} />
          </SimpleGrid>

          <Heading
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
            as={motion.span}
            textAlign={"center"}
          >
            Project Roles
          </Heading>
          {projectRoles.map((role, index) => {
            return (
              <Text fontSize={["lg", "xl", "xl", "3xl"]} key={index}>
                {`• ${role}`}
              </Text>
            );
          })}
        </VStack>
      </Center>
    </ModalTemplate>
  );
};
