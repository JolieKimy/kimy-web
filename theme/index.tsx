// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundational style overrides
import borders from "./foundations/borders";

// Component style overrides
import components from "./components";

const overrides = {
  styles,
  borders,
  // Other foundational style overrides go here
  components,
};

export default extendTheme(overrides);
