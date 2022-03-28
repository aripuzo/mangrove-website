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

export const Footer = ({ ...rest }) => {
  const year = (new Date()).getFullYear();
  
  return (
    <Box {...rest}>
      <Stack
        pt={[12, 24]}
        pb={[16, 36]}
        bg="orange.50"
        bgSize={["cover", "contain"]}
        bgRepeat="no-repeat"
        bgImage="url(/illustrations/footer-bg.png)"
        align="center"
        px="5%"
        spacing={0}
      >
        <VStack w="full" maxW="6xl">
          <Heading
            textAlign="center"
            color="teal.700"
            fontSize={["4xl", "4xl", "6xl"]}
          >
            Get&nbsp;
            <Box as="span" color="dullTeal.200">
              Value&nbsp;
            </Box>
            for your&nbsp;
            <Box as="span" color="dullTeal.200">
              money
            </Box>
          </Heading>
          <Text pb={4} color="gray.600" fontSize={["xl", "2xl", "4xl"]}>
            with&nbsp;
            <Box as="span" fontWeight="bold" color="teal.500">
              2%
            </Box>
            &nbsp;platform fee
          </Text>
          <Button
            onClick={() => Router.push("/signup")}
            colorScheme="teal"
            w={40}
            h={12}
            rounded={4}
          >
            Get Started
          </Button>
        </VStack>
      </Stack>
      <Stack px="5%" w="full" align="center">
        <Stack
          direction={["column", "column", "row"]}
          py={[8, 16]}
          w="full"
          spacing={[12, 12, 2]}
          maxW="6xl"
          justify="space-between"
        >
          <Stack spacing={[4, 0, 4]}>
            <Logo w={32} />
            <HStack spacing={12}>
              <Stack direction={["column", "row"]} spacing={[6, 12]} pt={2}>
                <Link href="/about-us" passHref={true}>
                  <ChakraLink fontWeight="600" color="teal.400">
                    About Us
                  </ChakraLink>
                </Link>

                <Link href="#how-it-works" passHref={true}>
                  <ChakraLink fontWeight="600" color="teal.400">
                    How it works
                  </ChakraLink>
                </Link>
                {/* <Link href="/pricing" passHref={true}>
                <ChakraLink fontWeight="600" color="teal.400">
                  Pricing
                </ChakraLink>
              </Link> */}
                <Link href="/faqs" passHref={true}>
                  <ChakraLink fontWeight="600" color="teal.400">
                    FAQs
                  </ChakraLink>
                </Link>
              </Stack>
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
              <Button
                type="submit"
                colorScheme="teal"
                w={32}
                h={12}
                roundedLeft="none"
              >
                Subscribe
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        px="5%"
        borderTop="1px solid"
        borderColor="gray.200"
        w="full"
        align="center"
      >
        <Stack
          py={8}
          w="full"
          direction={["column", "row"]}
          maxW="6xl"
          spacing={[4, 2]}
          justify="space-between"
          align="flex-start"
        >
          <Text color="gray.600">© {year} Mangrove. All rights reserved</Text>
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
        </Stack>
      </Stack>
    </Box>
  );
}
