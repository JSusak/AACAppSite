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
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navbarAnims = {
  hidden: {
    opacity: 0.8,
    translateY: -55,
  },
  active: {
    opacity: 1,
    translateY: 0,
  },
};

export const Navbar: React.FC = (): JSX.Element => {
  const [scrollPos, setScrollPos] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(false);
  //Determines if the user is scrolling down or up. Checks current window scroll position to
  //the last recorded scroll position - If it is greater it means the user has scrolled down
  //and therefore the navbar should be hidden.
  const checkScrollPos = (): void => {
    window.scrollY > scrollPos ? setIsScrollDown(true) : setIsScrollDown(false);
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPos);

    return () => {
      window.removeEventListener("scroll", checkScrollPos);
    };
  });

  return (
    <motion.div
      style={{
        position: "sticky",
        top: "0px",
        zIndex: 9000,
      }}
      variants={navbarAnims}
      animate={isScrollDown ? "hidden" : "active"}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <Box
        w="100%"
        backgroundColor={Colours.lightModeMainCol}
        p={6}
        boxShadow={
          "rgba(0, 0, 0, 0.2) 0px 10px 30px -10px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
        }
        zIndex={9000}
        scrollBehavior={"smooth"}
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
              <NavbarLink linkText="Co-Design" linkTo="contact" />
              <NavbarLink linkText="Watch In" linkTo="watchin" />
              <NavbarLink linkText="Watch Out" linkTo="watchout" />
            </HStack>
          </HStack>
        </Container>
      </Box>
    </motion.div>
  );
};
