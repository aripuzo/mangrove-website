import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Router from "next/router";
import React from "react";
import { RiUserAddLine } from "react-icons/ri";
import FadeIn from "react-fade-in";
import TextSwitch from "../../../components/TextSwitch";

export default function Intro({ ...rest }) {
  return (
    <Box
      // miinH={["120vh", "130vh"]}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage="url(/illustrations/hero-gradient.png)"
      pt={40}
      spacing={0}
      align="center"
      {...rest}
    >
      <VStack spacing={6}>
        <FadeIn delay={400} transitionDuration={1500}>
          <VStack px="5%">
            <TextSwitch />
            <Text color="gray.600" maxW="2xl" fontSize="lg" textAlign="center">
              A happy transaction is one that ensures the client pays and knows
              they shall receive the desired service, and the service provider
              works knowing that payment is assured.
            </Text>
          </VStack>
          <HStack justify="center" mt={8} spacing={4}>
            <Button
              onClick={() => Router.push("https://dashboard.usemangrove.com")}
              colorScheme="teal"
              w={36}
              h={12}
              rounded={4}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              onClick={() => Router.push("/")}
              colorScheme="teal"
              w={36}
              h={12}
              rounded={4}
            >
              Demo
            </Button>
          </HStack>

          <Image pt={4} src="/images/dashboard-preview.svg" />
        </FadeIn>
      </VStack>
    </Box>
  );
}
