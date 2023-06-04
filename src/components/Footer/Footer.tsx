import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Heading,
} from "@chakra-ui/react";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <Box
        w="100%"
        backgroundColor={"red.200"}
        style={{ position: "fixed", left: "0", bottom: "0" }}
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
          <HStack align={"flex-start"} spacing="4px">
            <Button>social button</Button>
            <Button>social button</Button>
            <Button>social button</Button>
            <Button>social button</Button>
          </HStack>
        </Container>
      </Box>
    </>
  );
};
