import {
  Box,
  Container,
  HStack,
  Heading,
  IconButton,
  Link,
  VStack,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Colours } from "../../colourScheme";
import { NavbarLink } from "./NavbarLink";
import { NavLink as RouterLink } from "react-router-dom";

import { useState, useEffect, useRef } from "react";
import { FaGithub, FaHamburger } from "react-icons/fa";
import { FooterButton } from "../Footer/FooterButton";

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

const navHamGridAnim = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
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

    //Apple 'bouncing' bug.
    if (window.scrollY < 50) {
      setIsScrollDown(false);
    }

    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPos);

    return () => {
      window.removeEventListener("scroll", checkScrollPos);
    };
  });

  //All links within the navbar, to avoid code duplication between desktop and mobile bars.
  const navbarContents: string[] = [
    "About",
    "People",
    "Co-Design",
    "Watch In",
    "Watch Out",
  ];

  const LogoLink = (): JSX.Element => {
    return (
      <Link
        as={RouterLink}
        _hover={{
          textDecoration: "none",

          bg: "none",
          ".navLogoText": {
            color: useColorModeValue(Colours.lightModeNavColHighlight, "red"),
          },
        }}
        to={"/"}
        id="homeLink"
      >
        <Heading
          className="navLogoText"
          fontSize={"5xl"}
          transition={"all 0.2s ease-in-out"}
        >
          WYL
        </Heading>
      </Link>
    );
  };

  //Hamburger drawer logic for checking the status of the mobile sidebar.
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hamRef = useRef<HTMLButtonElement>(null);

  return (
    <motion.div
      style={{
        position: "sticky",
        top: "0px",
        zIndex: 1000,
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
        <Container
          minW={"100%"}
          display={"flex"}
          alignItems={"center"}
          h={5}
          justifyContent={"space-between"}
        >
          {/*Desktop Navbar - show all subpages in a row */}
          <HStack alignItems={"center"}>
            <LogoLink />
            <HStack
              spacing={5}
              display={{ base: "none", lg: "flex" }}
              paddingLeft={7}
            >
              {navbarContents.map((link, index) => {
                return (
                  <NavbarLink
                    linkText={link}
                    linkSize="md"
                    linkTo={link
                      .replace(/-/g, "")
                      .replace(/\s/g, "")
                      .toLowerCase()}
                    key={`navDesktop${index}`}
                  />
                );
              })}
            </HStack>
          </HStack>
          {/*Mobile Navbar - show all subpages behind a hamburger menu*/}
          <Box display={["block", "block", "block", "none"]}>
            <IconButton
              color={"current"}
              backgroundColor={"transparent"}
              icon={<FaHamburger />}
              aria-label={"Open Hamburger"}
              ref={hamRef}
              onClick={onOpen}
            />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={hamRef}
            size={"xs"}
          >
            <DrawerOverlay
              background={"rgba(0,0,0,0.7)"}
              filter={"blur(10px)"}
              backdropFilter="auto"
              backdropBlur="6px"
            />
            <DrawerContent zIndex={9999}>
              <DrawerBody
                background={useColorModeValue(
                  `linear-gradient(109.6deg, ${Colours.lightModeMainCol} 11.2%, ${Colours.lightModeNavColHighlight} 100.2%);`,
                  `linear-gradient(109.6deg, #ff0000 11.2%, #ff0000 100.2%);`
                )}
                boxShadow={"-3px 0px 20px 1px #000000"}
              >
                <motion.div
                  variants={navHamGridAnim}
                  initial="hidden"
                  animate="visible"
                >
                  <VStack spacing={10} mt="20%">
                    <NavbarLink
                      linkSize="3xl"
                      linkText={"home"}
                      linkTo=""
                      key={`navMobileHome`}
                      onClick={onClose}
                    />
                    {navbarContents.map((link, index) => {
                      return (
                        <NavbarLink
                          linkSize="3xl"
                          linkText={link}
                          linkTo={link
                            .replace(/-/g, "")
                            .replace(/\s/g, "")
                            .toLowerCase()}
                          key={`navMobile${index}`}
                          onClick={onClose}
                        />
                      );
                    })}
                    <HStack>
                      <FooterButton
                        linkTo="https://github.com/JSusak/AACAppSite"
                        buttonIcon={<FaGithub size="50px" />}
                      />
                      <FooterButton
                        linkTo="https://github.com/JSusak/AACAppSite"
                        buttonIcon={<FaGithub size="50px" />}
                      />
                      <FooterButton
                        linkTo="https://github.com/JSusak/AACAppSite"
                        buttonIcon={<FaGithub size="50px" />}
                      />
                    </HStack>
                  </VStack>
                </motion.div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Container>
      </Box>
    </motion.div>
  );
};
