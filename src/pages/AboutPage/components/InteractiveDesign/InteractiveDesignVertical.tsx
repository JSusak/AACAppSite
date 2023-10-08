import {
  Box,
  Center,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/layout";
import { InteractiveDesignIcon } from "./InteractiveDesignIcon";
import Xarrow from "react-xarrows";
import { FinalImageIcon } from "./FinalImageIcon";
import { useColorModeValue } from "@chakra-ui/react";

export const InteractiveDesignVertical = (): JSX.Element => {
  return (
    <>
      <Box
        position={"relative"}
        width={"95vw"}
        height="90vh"
        borderWidth={"5px"}
        overflow={"auto"}
        borderRadius={"10px"}
        borderColor={useColorModeValue("orange.300", "whiteAlpha.300")}
      >
        <Xarrow
          start="box1"
          end="codesign"
          color={useColorModeValue("orange", "white")}
        />
        <Xarrow
          start="codesign"
          end="apps"
          color={useColorModeValue("orange", "white")}
        />
        <VStack mt="2rem">
          <Heading fontSize={"5xl"} textAlign={"center"}>
            Project Diagram
          </Heading>

          <div className="individualsWithAphasia">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <InteractiveDesignIcon
                width={200}
                height={200}
                text="Individuals living with Aphasia"
                id="box1"
                imageSRC={"./codesign/storyboarding.jpg"}
              />
            </div>
          </div>

          <Box
            mt="2rem"
            mb="2rem"
            width={["80%", "95%", "70%", "90%"]}
            backgroundColor={useColorModeValue("orange.200", "whiteAlpha.500")}
            borderRadius={"50px"}
            id="codesign"
            boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
            borderColor={useColorModeValue("blue.100", "whiteAlpha.500")}
            borderWidth={"5px"}
          >
            <Center>
              <VStack>
                <Heading mt="2rem">Co-Design Process</Heading>

                <SimpleGrid
                  mt="1rem"
                  mb="1rem"
                  id="codesign"
                  columns={[1, 2, 2, 4]}
                  spacing={"2rem"}
                >
                  <InteractiveDesignIcon
                    width={180}
                    height={180}
                    text="Storyboarding"
                    id="box2"
                    imageSRC={"./codesign/storyboarding.jpg"}
                  />
                  <InteractiveDesignIcon
                    width={180}
                    height={180}
                    text="Group Discussion"
                    id="box3"
                    imageSRC={"./codesign/discussions.png"}
                  />
                  <InteractiveDesignIcon
                    width={180}
                    height={180}
                    text="High-Fidelity Prototyping"
                    id="box4"
                    imageSRC="./codesign/highfid.png"
                  />
                  <InteractiveDesignIcon
                    width={180}
                    height={180}
                    text="Experience Prototyping/Role Play"
                    id="box5"
                    imageSRC={"./codesign/experienceproto.png"}
                  />
                </SimpleGrid>
              </VStack>
            </Center>
          </Box>

          <Box
            mb="2rem"
            width={["90%", "90%", "75%", "60%"]}
            backgroundColor={useColorModeValue("orange.200", "whiteAlpha.500")}
            borderRadius={"50px"}
            id="apps"
            boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
            borderColor={useColorModeValue("blue.100", "whiteAlpha.500")}
            borderWidth={"5px"}
          >
            <VStack>
              <Heading mt="1rem">Final Apps</Heading>

              <HStack padding={5} spacing={5}>
                <FinalImageIcon
                  headerName={"Watch Out"}
                  id={"phrases"}
                  imageURL={"./phrases.png"}
                  width={180}
                  height={180}
                  linkTo={"watchOut"}
                />
                <FinalImageIcon
                  headerName={"Watch In"}
                  id={"dialogue"}
                  imageURL={"./dialogue.png"}
                  width={180}
                  height={180}
                  linkTo={"watchIn"}
                />
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};
