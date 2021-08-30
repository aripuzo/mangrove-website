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
            Ari and Joseph formed a team to create a solution to this problem,
            and that is how Mangrove was formed. The idea was to design a
            solution that allows our clients to focus on what really matters to
            them, while we do the legwork of handling payments.
          </Heading>
        </VStack>
      </Stack>
      <Stack pos="relative">
        <Stack pos="absolute" w="full" align="center" px="5%" top={36} h="85%">
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
        </Stack>
        <Stack>
          <Stack align="center" pt={[16, 16, 36]} pb={[12, 12, 28]} px="5%">
            <Stack justify="space-between" maxW="6xl" w="full" direction="row">
              <Stack>
                <Heading pos="sticky" top={32} d={["none"]} color="teal.500">
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
                  Our journey started based on personal experience. Ari had
                  worked as a freelancer for many clients and had issues with a
                  few not paying the full agreed amount or none at all, after
                  work had been done and delivered. Joseph on the other hand had
                  been a client and faced challenges with the freelancer not
                  delivering on the agreed task but expecting full payment
                  because of the time spent.
                  <br />
                  <br />
                  The bone of contention in all these issues is money, and a lot
                  of time (and money too!) can be wasted following up with
                  either unreliable clients or service providers.
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
                <Heading pos="sticky" top={32} d={["none"]} color="teal.600">
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
                  Our journey started based on personal experience. Ari had
                  worked as a freelancer for many clients and had issues with a
                  few not paying the full agreed amount or none at all, after
                  work had been done and delivered. Joseph on the other hand had
                  been a client and faced challenges with the freelancer not
                  delivering on the agreed task but expecting full payment
                  because of the time spent.
                  <br />
                  <br />
                  The bone of contention in all these issues is money, and a lot
                  of time (and money too!) can be wasted following up with
                  either unreliable clients or service providers.
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack align="center" pt={[16, 16, 36]} pb={[12, 12, 28]} px="5%">
            <Stack justify="space-between" maxW="6xl" w="full" direction="row">
              <Stack>
                <Heading pos="sticky" top={32} d={["none"]} color="teal.500">
                  Our Goal
                </Heading>
              </Stack>

              <Stack maxW="2xl" w="full" spacing={0}>
                <Heading
                  d={["block", "block", "block", "none"]}
                  color="teal.500"
                >
                  Our Goal is to...
                </Heading>
                <Heading d={["none", "none", "none", "block"]} color="teal.500">
                  Is to...
                </Heading>
                <Text color="gray.600" pt={[4, 8]} fontSize="lg">
                  Our journey started based on personal experience. Ari had
                  worked as a freelancer for many clients and had issues with a
                  few not paying the full agreed amount or none at all, after
                  work had been done and delivered. Joseph on the other hand had
                  been a client and faced challenges with the freelancer not
                  delivering on the agreed task but expecting full payment
                  because of the time spent.
                  <br />
                  <br />
                  The bone of contention in all these issues is money, and a lot
                  of time (and money too!) can be wasted following up with
                  either unreliable clients or service providers.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
