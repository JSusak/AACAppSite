import { Link } from "@chakra-ui/react";
import { Colours } from "../../../../colourScheme";
import { motion } from "framer-motion";

export const PeopleIconButton = ({
  icon,
  webLink,
}: {
  icon: JSX.Element;
  webLink: string;
}): JSX.Element => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link
        isExternal
        href={webLink}
        display={webLink === "" ? "none" : ""}
        bg={"none"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"all 0.3s ease-in-out"}
        borderRadius={"100%"}
        _hover={{
          bg: "none",
          color: webLink === "" ? "none" : Colours.lightModeNavColHighlight,
          boxShadow: "none",
          outline: "none",
        }}
        _focus={{ boxShadow: "none", borderColor: "transparent" }}
      >
        {" "}
        {icon}
      </Link>
    </motion.div>
  );
};
