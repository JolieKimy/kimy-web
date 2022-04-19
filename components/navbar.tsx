/**
 * Based on https://chakra-templates.dev/templates/navigation/navbar/withDarkModeSwitcher
 */
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  Stack,
  useColorMode,
  useStyleConfig,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({ children }: { children: ReactNode }) => {
  const styles = useStyleConfig("NavLink");

  return (
    <Link __css={styles} href={"#"}>
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const styles = useStyleConfig("Navbar");

  return (
    <Box __css={styles}>
      <Box>Logo</Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
    </Box>
  );
};

export default Navbar;
