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
        h={['full', 'full', 'full', '2xl', 'xl']}
        align="flex-start"
        justify="center"
        bg="teal.700"
        py={12}
      >
        <Stack
          direction={['column', 'column', 'column', 'row']}
          spacing={[4, 4, 4, 12]}
          w="full"
          maxW="6xl"
          align="center"
          justify="space-between"
        >
          <Stack
            overflow={['initial', 'initial', 'initial', 'hidden', 'initial']}
            h={['full', 'full', '39rem', '39rem', 'initial']}
            align="center"
            w={['20rem', '20rem', '30rem', '55%']}
          >
            <Image
              mt={['0', '0', '0', '2.4rem', '-12.6rem']}
              w="40rem"
              h={['initial', 'initial', 'initial', 'full', 'initial']}
              src="/images/frowning-lady.png"
            />
          </Stack>

          <Stack
            textAlign={['justify', 'justify', 'justify', 'left']}
            spacing={6}
            color="white"
            w={['full', 'full', 'full', '45%']}
            py={[4, 4, 0, 8]}
          >
            <Heading textAlign={['center', 'center', 'center', 'left']}>
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
              <ChakraLink
                color="orange.300"
                textAlign={['center', 'center', 'center', 'left']}
              >
                Read more about us
              </ChakraLink>
            </Link>
          </Stack>
        </Stack>
      </HStack>
    </Stack>
  )
}
