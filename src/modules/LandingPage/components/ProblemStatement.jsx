import {
  Heading,
  HStack,
  Image,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function ProblemStatement({ ...rest }) {
  return (
    <Stack pt={[12, 12, 20, 44]} w="full" {...rest}>
      <HStack
        w="full"
        px="5%"
        align="flex-start"
        justify="center"
        bg="teal.700"
      >
        <Stack
          direction={["column", "column", "column", "row"]}
          spacing={[4, 4, 4, 12]}
          w="full"
          maxW="6xl"
          // align="center"
          // justify="space-between"
        >
          <Stack
            overflow={["initial", "initial", "initial", "initial", "initial"]}
            h={["full", "full", "39rem", "39rem", "initial"]}
            align="center"
            w={["20rem", "20rem", "30rem", "55%"]}
            pos="relative"
            data-aos="fade-up"
          >
            <Image
              bottom="0"
              right="0"
              maxH={{ base: "100%", md: "initial" }}
              pos={{ md: "absolute" }}
              width={{ md: "110%" }}
              maxW={{ md: "initial" }}
              src="/images/frowning-lady.png"
            />
          </Stack>

          <Stack
            textAlign={["justify", "justify", "justify", "left"]}
            spacing={6}
            color="white"
            w={["full", "full", "full", "45%"]}
            py={[4, 4, 0, 12]}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Heading textAlign={["center", "center", "center", "left"]}>
              These kind of statements should no longer exist in this time and
              age
            </Heading>
            <Text>
              Our journey started based on personal experiences.
              <br />
              <br />
              Pelumi had worked as a freelancer for many clients and had issues
              with a few not paying the full agreed amount or none at all even
              after work had been done and deliverables had been met.
              <br />
              <br />
              Joseph on the other hand had been a client and faced challenges
              with a couple of freelancers not delivering on the agreed task but
              expecting full payment because of the time spent.
              <br />
              <br />
              We understand that these are real time issues you might have
              encountered. We are obsessed about creating innovative ways to
              solve these issues and mitigate risks with either unreliable
              clients or service providers.
            </Text>
            <Link href="about-us">
              <ChakraLink
                color="orange.300"
                textAlign={["center", "center", "center", "left"]}
              >
                Read more about us
              </ChakraLink>
            </Link>
          </Stack>
        </Stack>
      </HStack>
    </Stack>
  );
}
