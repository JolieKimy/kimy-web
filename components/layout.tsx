import { Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { FC } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Kim Aurore Biloni</title>
        <meta
          name="description"
          content="Personal Website of Kim Aurore Biloni"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" minH="100vh">
        <Navbar />
        <Container flex={1} as="main">{children}</Container>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
