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
import { Image } from "@chakra-ui/image";

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
        borderColor={"orange.300"}
      >
        <VStack mt="2rem">
          <Heading fontSize={"5xl"}>Project Diagram</Heading>

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
              />
            </div>
          </div>

          <Box
            mt="2rem"
            mb="2rem"
            width={["80%", "95%", "70%", "90%"]}
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
                  />
                  <InteractiveDesignIcon
                    width={180}
                    height={180}
                    text="Group Discussion"
                    id="box3"
                  />
                  <InteractiveDesignIcon
                    width={180}
                    height={180}
                    text="High-Fidelity Prototyping"
                    id="box4"
                  />
                  <InteractiveDesignIcon
                    width={180}
                    height={180}
                    text="Experience Prototyping & Role Play"
                    id="box5"
                  />
                </SimpleGrid>
              </VStack>
            </Center>
          </Box>

          <Box
            mb="2rem"
            width={["75%", "75%", "60%"]}
            backgroundColor={"orange.200"}
            borderRadius={"50px"}
            id="apps"
            boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
            borderColor={"blue.100"}
            borderWidth={"5px"}
          >
            <VStack>
              <Heading mt="1rem">Final Apps</Heading>

              <HStack padding={5} spacing={5}>
                <Image
                  src="./phrases.png"
                  width={"150px"}
                  borderRadius={"10%"}
                  fallbackSrc="https://via.placeholder.com/150x150"
                  id="phrases"
                  boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
                />

                <Image
                  src="./dialogue.png"
                  width={"150px"}
                  borderRadius={"10%"}
                  fallbackSrc="https://via.placeholder.com/150x150"
                  id="dialogue"
                  boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
                />
              </HStack>
            </VStack>
          </Box>
        </VStack>
        <Xarrow start="box1" end="codesign" color={"orange"} />
        <Xarrow start="codesign" end="apps" color={"orange"} />
      </Box>
    </>
  );
};
