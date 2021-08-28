import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Input,
  Link as ChakraLink,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import Router from 'next/router'
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
} from 'react-icons/ri'
import { Logo } from './Logo'

export const Footer = ({ ...rest }) => (
  <Box>
    <Stack pt={24} pb={36} bg="pink.50" align="center" px="5%" spacing={0}>
      <VStack w="full" maxW="6xl">
        <Heading textAlign="center" color="teal.700" fontSize="6xl">
          Get&nbsp;
          <Box as="span" color="dullTeal.200">
            Value&nbsp;
          </Box>
          for your&nbsp;
          <Box as="span" color="dullTeal.200">
            money
          </Box>
        </Heading>
        <Text pb={4} color="gray.600" fontSize="4xl">
          with&nbsp;
          <Box as="span" fontWeight="bold" color="teal.500">
            0.5%
          </Box>
          &nbsp;platform fee
        </Text>
        <Button
          onClick={() => Router.push('/signup')}
          colorScheme="teal"
          w={40}
          h={12}
          rounded={4}
        >
          Get Started
        </Button>
      </VStack>
    </Stack>
    <Stack w="full" align="center">
      <HStack
        py={16}
        w="full"
        maxW="6xl"
        justify="space-between"
        align="flex-start"
      >
        <Stack spacing={6}>
          <Logo w={40} />
          <HStack spacing={12}>
            <HStack spacing={12} pt={2}>
              <Link href="/about-us">
                <ChakraLink fontWeight="600" color="teal.400">
                  About Us
                </ChakraLink>
              </Link>

              <Link href="/how-it-works">
                <ChakraLink fontWeight="600" color="teal.400">
                  How it works
                </ChakraLink>
              </Link>
              <Link href="/pricing">
                <ChakraLink fontWeight="600" color="teal.400">
                  Pricing
                </ChakraLink>
              </Link>
              <Link href="/pricing">
                <ChakraLink fontWeight="600" color="teal.400">
                  FAQs
                </ChakraLink>
              </Link>
            </HStack>
          </HStack>
        </Stack>
        <Stack spacing={4}>
          <Text color="teal.700" fontWeight="bold">
            Subscribe to get the latest mangrove news
          </Text>

          <HStack as="form" spacing={0}>
            <Input
              roundedRight="none"
              w={52}
              placeholder="Your Email"
              isRequired
              name="email"
              variant="filled"
              fontSize="md"
              size="lg"
            />
            <Button colorScheme="teal" w={32} h={12} roundedLeft="none">
              Subscribe
            </Button>
          </HStack>
        </Stack>
      </HStack>
    </Stack>

    <Stack borderTop="1px solid" borderColor="gray.200" w="full" align="center">
      <HStack
        py={8}
        w="full"
        maxW="6xl"
        justify="space-between"
        align="flex-start"
      >
        <Text color="gray.600">© 2021 Mangrove. All rights reserved</Text>
        <HStack>
          <ChakraLink>
            <IconButton
              variant="ghost"
              fontSize="3xl"
              color="gray.400"
              icon={<RiFacebookCircleLine />}
            />
          </ChakraLink>
          <ChakraLink>
            <IconButton
              variant="ghost"
              fontSize="3xl"
              color="gray.400"
              icon={<RiTwitterLine />}
            />
          </ChakraLink>
          <ChakraLink>
            <IconButton
              variant="ghost"
              fontSize="3xl"
              color="gray.400"
              icon={<RiLinkedinBoxLine />}
            />
          </ChakraLink>
          <ChakraLink>
            <IconButton
              variant="ghost"
              fontSize="3xl"
              color="gray.400"
              icon={<RiInstagramLine />}
            />
          </ChakraLink>
        </HStack>
      </HStack>
    </Stack>
  </Box>
)
