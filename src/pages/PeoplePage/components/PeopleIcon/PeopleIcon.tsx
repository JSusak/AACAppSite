import {
  Text,
  Box,
  Center,
  VStack,
  Heading,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { PeopleIconButton } from "./PeopleIconButton";
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
}: {
  imagePath: string;
  personName: string;
  organisationName: string;
  projectRoles: string[];
  primaryWebLink: string;
  secondaryWebLink: string;
  primaryIcon: JSX.Element;
  secondaryIcon: JSX.Element;
}): JSX.Element => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="personIconContainer"
      style={{
        width: "400px",
        height: "400px",
        position: "relative",
      }}
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
        backgroundColor={"orange.100"}
        boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
      >
        <Center>
          <VStack zIndex={isHover ? 11 : 1}>
            <Heading fontSize={"3xl"}>{personName}</Heading>
            <Heading fontSize={"xl"}>{organisationName}</Heading>
            {projectRoles.map((role, index) => {
              return (
                <Text fontSize={"xl"} key={index}>
                  {`• ${role}`}
                </Text>
              );
            })}

            <Heading fontSize={"xl"} mt="1rem">
              Get in Touch:
            </Heading>
            <SimpleGrid
              columns={secondaryWebLink === "" ? 1 : 2}
              spacing={"2rem"}
            >
              <PeopleIconButton webLink={primaryWebLink} icon={primaryIcon} />
              <PeopleIconButton
                webLink={secondaryWebLink}
                icon={secondaryIcon}
              />
            </SimpleGrid>
          </VStack>
        </Center>
      </Box>
    </Box>
  );
};
