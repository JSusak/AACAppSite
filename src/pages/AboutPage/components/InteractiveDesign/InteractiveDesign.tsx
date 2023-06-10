import { Box, Center, Heading, SimpleGrid, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { InteractiveDesignIcon } from "./InteractiveDesignIcon";
import Xarrow from "react-xarrows";
//   width={"850px"}
//height={"800px"}
export const InteractiveDesign = (): JSX.Element => {
  return (
    <Box
      position={"relative"}
      width={"90vw"}
      height="90vh"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      overflow={"auto"}
      borderRadius={"10px"}
    >
      <VStack>
        <Heading fontSize={"7xl"} mt="2rem">
          Project Diagram
        </Heading>
        <SimpleGrid
          mt="-2rem"
          columns={3}
          display={"flex"}
          justifyContent={"center"}
          spacing={"5%"}
        >
          <div className="individualsWithAphasia">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <InteractiveDesignIcon
                width={300}
                height={300}
                text="Individuals living with Aphasia"
                id="box1"
              />
            </div>
          </div>

          <Box
            mt="2rem"
            mb="2rem"
            width="90%"
            backgroundColor={"orange.200"}
            borderRadius={"50px"}
            id="codesign"
            boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
            borderColor={"blue.100"}
            borderWidth={"5px"}
          >
            <Center>
              <VStack>
                <Heading mt="2rem">Co-Design Process</Heading>

                <SimpleGrid
                  columns={2}
                  spacing={"2rem"}
                  padding={"0rem"}
                  mt="1rem"
                  mb="1rem"
                  id="codesign"
                >
                  <InteractiveDesignIcon
                    width={230}
                    height={230}
                    text="Storyboarding"
                    id="box2"
                  />
                  <InteractiveDesignIcon
                    width={230}
                    height={230}
                    text="Group Discussion"
                    id="box3"
                  />
                  <InteractiveDesignIcon
                    width={230}
                    height={230}
                    text="High-Fidelity Prototyping"
                    id="box4"
                  />
                  <InteractiveDesignIcon
                    width={230}
                    height={230}
                    text="Experience Prototyping & Role Play"
                    id="box5"
                  />

                  <Xarrow start="box1" end="codesign" color={"orange"} />
                  <Xarrow start="codesign" end="apps" color={"orange"} />
                </SimpleGrid>
              </VStack>
            </Center>
          </Box>

          <Box
            mt="2rem"
            mb="2rem"
            mr="1rem"
            width="600px"
            backgroundColor={"orange.200"}
            borderRadius={"50px"}
            borderColor={"blue.100"}
            borderWidth={"5px"}
            id="apps"
            boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
          >
            <Center>
              <VStack>
                <Heading mt="1rem" paddingTop={"1rem"}>
                  Final Apps
                </Heading>
                <Heading fontSize={"2xl"}>Watch Out</Heading>
                <Image
                  src="./phrases.png"
                  width={"230px"}
                  borderRadius={"10%"}
                  fallbackSrc="https://via.placeholder.com/300x300"
                  id="phrases"
                  boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
                />
                <Heading fontSize={"2xl"}>Watch In</Heading>
                <Image
                  src="./dialogue.png"
                  width={"230px"}
                  mb="1rem"
                  borderRadius={"10%"}
                  fallbackSrc="https://via.placeholder.com/300x300"
                  id="dialogue"
                  boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
                />
              </VStack>
            </Center>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
