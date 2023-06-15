import { Link, useColorModeValue, Heading } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { Colours } from "../../colourScheme";

export const NavbarLink = ({
  linkTo,
  linkText,
}: {
  linkTo: string;
  linkText: string;
}): JSX.Element => {
  return (
    <Link
      as={RouterLink}
      px={3}
      py={2}
      rounded={"lg"}
      textTransform={"uppercase"}
      transition={"all 0.2s ease-in-out"}
      _hover={{
        textDecoration: "none",

        bg: useColorModeValue(Colours.lightModeNavColHighlight, "red"),
      }}
      to={"/" + linkTo.toLowerCase()}
      /*
      // @ts-ignore */ //A workaround for the unneccessary typing error.
      //Another error occurs here, to fix later... React has detected a change in the order of Hooks called by NavLink. This will lead to bugs and errors if not fixed.
      style={({ isActive }: { isActive: boolean }) => {
        return {
          backgroundColor: isActive
            ? useColorModeValue(Colours.lightModeNavColActive, "red")
            : undefined,
        };
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
    </Link>
  );
};
