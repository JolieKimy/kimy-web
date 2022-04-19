// theme.js
import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: (props) => ({
    bg: props.colorMode === "dark" ? "yellow.500" : "gray.300",
  }),
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    "with-shadow": {
      bg: "red.400",
      boxShadow: "0 0 2px 2px #efdfde",
    },
    // 4. We can override existing variants
    solid: (props) => ({
      bg: props.colorMode === "dark" ? "yellow.500" : "gray.300",
    }),
  },
};

export default Button;
