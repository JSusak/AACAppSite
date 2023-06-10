import { Image } from "@chakra-ui/image";
import { Box, Center, Heading, VStack } from "@chakra-ui/layout";

export const InteractiveDesignIcon = ({
  id,
  width,
  height,
  text,
}: {
  id: string;
  width: number;
  height: number;
  text: string;
}): JSX.Element => {
  return (
    <Box
      id={id}
      zIndex={20}
      backgroundColor={"orange.100"}
      width={`${width.toString()}px`}
      height={`${height.toString()}px`}
      borderRadius={"20%"}
      borderColor="blue.100"
      borderWidth={"5px"}
      display={"flex"}
      justifyContent={"center"}
      boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
    >
      <Center>
        <VStack>
          <Image
            src="./kcl.png"
            borderRadius={"20%"}
            fallbackSrc={`https://via.placeholder.com/${width / 2}x${
              height / 2
            }`}
          />

          <Heading
            fontSize={["8px", "13px", "13px", "15px"]}
            textAlign={"center"}
            maxW="100%"
            padding={2}
          >
            {text}
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
};
