import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Logo } from "../../components/Logo";

export default function AboutUsPage() {
  return (
    <Stack>
      <Stack
        w="full"
        px="5%"
        bg="teal.700"
        spacing={0}
        pt={40}
        pb={32}
        align="center"
      >
        <VStack spacing={6} w="full">
          <Heading
            textAlign="center"
            fontWeight="extrabold"
            fontSize={["2rem", "2rem", "2.5rem"]}
            color="white"
          >
            About Us
          </Heading>
          <Heading
            textAlign="center"
            maxW="4xl"
            lineHeight={["initial", "initial", "10"]}
            fontWeight="extrabold"
            fontSize={["1.5rem", "2rem", "2rem"]}
            color="dullTeal.200"
          >
            Joe and Pelumi formed a team to solve contracting and payment problems
            businesses and individuals experience. The idea was to design a
            product that allows clients and contractors focus on what really
            matters to them, while we do the legwork of handling contracts and
            payments.
          </Heading>
        </VStack>
      </Stack>
      <Stack pos="relative">
        {/* <Stack pos="absolute" w="full" align="center" px="5%" top={36} h="85%">
          <Heading
            w="full"
            maxW="6xl"
            pos="sticky"
            top={56}
            d={["none", "none", "none", "block"]}
            color="teal.500"
          >
            Our Mission
          </Heading>
        </Stack> */}
        <Stack>
          <Stack align="center" pt={[16, 16, 36]} pb={[12, 12, 28]} px="5%">
            <Stack justify="space-between" maxW="6xl" w="full" direction="row">
              <Stack>
                <Heading
                  pos="sticky"
                  top={32}
                  d={["none", "none", "none", "block"]}
                  color="teal.500"
                >
                  Our Mission
                </Heading>
              </Stack>

              <Stack maxW="2xl" w="full" spacing={0}>
                <Heading
                  d={["block", "block", "block", "none"]}
                  color="teal.500"
                >
                  Our Mission is to...
                </Heading>
                <Heading d={["none", "none", "none", "block"]} color="teal.500">
                  Is to...
                </Heading>
                <Text color="gray.600" pt={[4, 8]} fontSize="lg">
                  To create digital tools to ensure individuals and
                  organizations always get value for money and get money for
                  value.
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            align="center"
            bg="lightTeal"
            pt={[16, 16, 36]}
            pb={[12, 12, 28]}
            px="5%"
          >
            <Stack justify="space-between" maxW="6xl" w="full" direction="row">
              <Stack>
                <Heading
                  pos="sticky"
                  top={32}
                  d={["none", "none", "none", "block"]}
                  color="teal.500"
                >
                  Our Vision
                </Heading>
              </Stack>

              <Stack maxW="2xl" w="full" spacing={0}>
                <Heading
                  d={["block", "block", "block", "none"]}
                  color="teal.600"
                >
                  Our Vision is to...
                </Heading>
                <Heading d={["none", "none", "none", "block"]} color="teal.600">
                  Is to...
                </Heading>
                <Text color="gray.600" pt={[4, 8]} fontSize="lg">
                  Restoring confidence and satisfaction in every transaction
                  between business parties in Africa.
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack align="center" pt={[16, 16, 36]} pb={[12, 12, 28]} px="5%">
            <Stack justify="space-between" maxW="6xl" w="full" direction="row">
              <Stack>
                <Heading
                  pos="sticky"
                  top={32}
                  d={["none", "none", "none", "block"]}
                  color="teal.500"
                >
                  Core Values
                </Heading>
              </Stack>

              <Stack maxW="2xl" w="full" spacing={0}>
                <Heading
                  d={["block", "block", "block", "none"]}
                  color="teal.500"
                >
                  Core Values
                </Heading>
                {/* <Heading d={["none", "none", "none", "block"]} color="teal.500">
                  Is to...
                </Heading> */}
                <Text color="gray.600" pt={[4, 0]} fontSize="lg">
                  Trust, Transparency and Tenacity
                  <br />
                  <br />
                  We offer digital solutions to ease business transactions
                  between clients and contractors
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
