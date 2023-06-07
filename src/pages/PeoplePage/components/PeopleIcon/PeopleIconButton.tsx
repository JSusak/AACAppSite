import { Button, Link } from "@chakra-ui/react";
import { Colours } from "../../../../colourScheme";

export const PeopleIconButton = ({
  icon,
  webLink,
}: {
  icon: JSX.Element;
  webLink: string;
}): JSX.Element => {
  return (
    <Link isExternal href={webLink}>
      {" "}
      <Button
        size="lg"
        display={webLink === "" ? "none" : ""}
        bg={"none"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"all 0.3s ease-in-out"}
        borderRadius={"100%"}
        isDisabled={webLink === ""}
        _hover={{
          bg: "none",
          color: webLink === "" ? "none" : Colours.lightModeNavColHighlight,
          boxShadow: "none",
          outline: "none",
        }}
        _focus={{ boxShadow: "none", borderColor: "transparent" }}
      >
        {icon}
      </Button>
    </Link>
  );
};
