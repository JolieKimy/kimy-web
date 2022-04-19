import { ComponentStyleConfig } from "@chakra-ui/react";

const NavLink: ComponentStyleConfig = {
  baseStyle: (props) => ({
    px: 2,
    py: 1,
    rounded: "md",
    _hover: {
      textDecoration: "none",
      bg: props.colorMode === "dark" ? "red.700" : "gray.200",
    },
  }),
};

export default NavLink;
