import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

export default function PageLayout({ whiteNav, children, ...rest }) {
  return (
    <Stack spacing={0} {...rest}>
      <Navbar whiteNav={whiteNav} />
      <Box>{children}</Box>
      <Footer />
    </Stack>
  );
}
