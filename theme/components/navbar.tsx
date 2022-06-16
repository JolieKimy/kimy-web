import { ComponentStyleConfig } from "@chakra-ui/react";

const Navbar : ComponentStyleConfig = {
  baseStyle: (props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    h: 16,
    px: 4,
    borderBottom: "solid 1px",
    borderBottomColor: props.colorMode === "dark" ? "gray.900": "gray.100", 
  })
}

export default Navbar;
