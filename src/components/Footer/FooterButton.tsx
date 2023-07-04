import { Link, Button, useColorModeValue } from "@chakra-ui/react";
import { Colours } from "../../colourScheme";

export const FooterButton = ({
  linkTo,
  buttonIcon,
}: {
  linkTo: string;
  buttonIcon: JSX.Element;
}): JSX.Element => {
  return (
    <Link isExternal href={linkTo}>
      {" "}
      <Button
        size="md"
        bg={"none"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"all 0.3s ease-in-out"}
        borderRadius={"100%"}
        _hover={{
          bg: "none",
          color: useColorModeValue(
            Colours.lightModeNavColHighlight,
            Colours.darkModeNavColHighlight
          ),
          boxShadow: "none",
          outline: "none",
        }}
        _focus={{ boxShadow: "none", borderColor: "transparent" }}
      >
        {buttonIcon}
      </Button>
    </Link>
  );
};
