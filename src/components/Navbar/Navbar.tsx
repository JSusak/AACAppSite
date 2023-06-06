import {
  Box,
  Container,
  HStack,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { Colours } from "../../colourScheme";
import { NavbarLink } from "./NavbarLink";
import { NavLink as RouterLink } from "react-router-dom";

export const Navbar: React.FC = (): JSX.Element => {
  return (
    <>
      <Box
        w="100%"
        backgroundColor={Colours.lightModeMainCol}
        p={6}
        boxShadow={
          "rgba(0, 0, 0, 0.2) 0px 10px 30px -10px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
        }
      >
        <Container minW={"100%"} display={"flex"} alignItems={"center"} h={5}>
          <HStack alignItems={"center"}>
            <Link
              as={RouterLink}
              _hover={{
                textDecoration: "none",

                bg: "none",
                ".navLogoText": {
                  color: useColorModeValue(
                    Colours.lightModeNavColHighlight,
                    "red"
                  ),
                },
              }}
              to={"/"}
              style={{ margin: "auto" }}
            >
              <Heading
                className="navLogoText"
                fontSize={"5xl"}
                transition={"all 0.2s ease-in-out"}
              >
                WYL
              </Heading>
            </Link>
            <HStack
              spacing={5}
              display={{ base: "none", lg: "flex" }}
              paddingLeft={7}
            >
              <NavbarLink linkText="About" linkTo="about" />
              <NavbarLink linkText="People" linkTo="people" />
              <NavbarLink linkText="Watch In" linkTo="watchin" />
              <NavbarLink linkText="Watch Out" linkTo="watchout" />
              <NavbarLink linkText="Contact" linkTo="contact" />
            </HStack>
          </HStack>
        </Container>
      </Box>
    </>
  );
};
