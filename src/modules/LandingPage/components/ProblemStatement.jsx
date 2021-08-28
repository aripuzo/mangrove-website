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
    <Stack pt={64} w="full" {...rest}>
      <HStack
        w="full"
        px="5%"
        h="xl"
        align="flex-start"
        justify="center"
        bg="teal.700"
        py={12}
      >
        <HStack spacing={16} w="full" maxW="6xl" justify="space-between">
          <Stack pos="relative" w="full">
            <Image mt="-16.5rem" w="33rem" src="/images/frowning-lady.png" />
          </Stack>

          <Stack textAlign="left" spacing={6} color="white" w="full" py={8}>
            <Heading>
              These kind of statements <br /> should no longer exist in 2021
            </Heading>
            <Text>
              Our journey started based on personal experience. Ari had worked
              as a freelancer for many clients and had issues with a few not
              paying the full agreed amount or none at all, after work had been
              done and delivered. Joseph on the other hand had been a client and
              faced challenges with the freelancer not delivering on the agreed
              task but expecting full payment because of the time spent.
              <br />
              <br />
              The bone of contention in all these issues is money, and a lot of
              time (and money too!) can be wasted following up with either
              unreliable clients or service providers.
            </Text>
            <Link href="about-us">
              <ChakraLink color="orange.300">Read more about us</ChakraLink>
            </Link>
          </Stack>
        </HStack>
      </HStack>
    </Stack>
  )
}
