/**
 * Based on https://chakra-templates.dev/templates/navigation/navbar/withDarkModeSwitcher
 */
import { FC } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  Image,
  Stack,
  useColorMode,
  useStyleConfig,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

type NavLinkProps = {
  route?: string;
}
const NavLink: FC<NavLinkProps> = ({ route = '#', children }) => {
  const styles = useStyleConfig("NavLink");

  return (
    <Link href={route}
      __css={styles}>
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const styles = useStyleConfig("Navbar");

  return (
    <Box __css={styles}>
      <Image
        boxSize={"100px"}
        src=""
        alt="KB" />
      <NavLink>
        About
      </NavLink>
      <NavLink>
        Projects
      </NavLink>
      <NavLink>
        Contact
      </NavLink>
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
