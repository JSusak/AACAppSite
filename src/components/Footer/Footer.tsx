import { Box, Container, HStack, Heading } from "@chakra-ui/react";
import { FaGithub, FaFile } from "react-icons/fa";
import { FooterButton } from "./FooterButton";
import { Colours } from "../../colourScheme";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <Box
        w="100%"
        backgroundColor={Colours.lightModeMainCol}
        style={{ position: "relative", left: "0", bottom: "0" }}
      >
        <Container
          minW={"100%"}
          py={3}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading fontSize={"md"}>
            © 2023 King's College London{"\u00a0"}| All Rights Reserved.
          </Heading>
          <HStack align={"flex-start"} spacing="2px">
            <FooterButton
              linkTo="https://github.com/JSusak/AACAppSite"
              buttonIcon={<FaGithub size="20px" />}
            />
            <FooterButton linkTo="test" buttonIcon={<FaFile size="20px" />} />
          </HStack>
        </Container>
      </Box>
    </>
  );
};
