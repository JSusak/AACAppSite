import { useColorModeValue, Heading, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Colours } from "../../colourScheme";
import "./navlink.scss";

export const NavbarLink = ({
  linkTo,
  linkText,
}: {
  linkTo: string;
  linkText: string;
}): JSX.Element => {
  return (
    <NavLink
      to={"/" + linkTo.toLowerCase()}
      className={({ isActive }: { isActive: boolean }): string =>
        isActive ? "active" : "inactive"
      }
    >
      <Box
        px={3}
        py={2}
        rounded={"lg"}
        borderRadius={"10px"}
        textTransform={"uppercase"}
        transition={"all 0.2s ease-in-out"}
        _hover={{
          textDecoration: "none",

          bg: useColorModeValue(Colours.lightModeNavColHighlight, "red"),
        }}
      >
        <Heading
          as="h4"
          size="md"
          className="navName"
          transition={"all 0.2s ease-in-out"}
        >
          {linkText}
        </Heading>
      </Box>
    </NavLink>
  );
};
