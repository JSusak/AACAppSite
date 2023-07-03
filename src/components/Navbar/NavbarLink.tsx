import { useColorModeValue, Heading, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Colours } from "../../colourScheme";
import "./navlink.scss";
import { motion } from "framer-motion";

const navLinkAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

export const NavbarLink = ({
  linkTo,
  linkText,
  onClick,
  linkSize,
}: {
  linkTo: string;
  onClick?: () => void;
  linkText: string;
  linkSize: string;
}): JSX.Element => {
  return (
    <NavLink
      to={"/" + linkTo.toLowerCase()}
      className={({ isActive }: { isActive: boolean }): string =>
        isActive ? "active" : "inactive"
      }
    >
      {" "}
      <motion.span variants={navLinkAnim} onClick={onClick}>
        <Box
          px={3}
          py={2}
          rounded={"lg"}
          borderRadius={"10px"}
          textTransform={"uppercase"}
          transition={"all 0.2s ease-in-out"}
          _hover={{
            textDecoration: "none",

            bg: useColorModeValue(
              Colours.lightModeNavColHighlight,
              Colours.darkModeNavColHighlight
            ),
          }}
        >
          <Heading
            as="h4"
            size={linkSize}
            textAlign={"center"}
            className="navName"
            transition={"all 0.2s ease-in-out"}
          >
            {linkText}
          </Heading>
        </Box>
      </motion.span>
    </NavLink>
  );
};
