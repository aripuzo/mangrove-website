import { Button, HStack, Link as ChakraLink } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Logo } from './Logo'
import Link from 'next/link'
import Router from 'next/router'

export default function Navbar({ ...rest }) {
  const [pastTop, setPastTop] = useState(false)
  useEffect(() => {
    const event = () => {
      if (window.scrollY <= 80) {
        setPastTop(false)
      } else {
        setPastTop(true)
      }
    }

    window.addEventListener('scroll', event)
    return () => {
      window.removeEventListener('scroll', event)
    }
  }, [])

  return (
    <HStack
      bg={pastTop ? 'white' : 'transparent'}
      transition=".5s all"
      zIndex={100}
      shadow={pastTop ? 'md' : '0'}
      pos="fixed"
      top={0}
      w="full"
      py={pastTop ? 2 : 1}
      justify="center"
      px="5%"
      {...rest}
    >
      <HStack w="full" maxW="6xl" justify="space-between">
        <HStack spacing={12}>
          <Logo w={24} />
          <HStack spacing={12}>
            <Link href="/about-us">
              <ChakraLink fontWeight="600" color="gray.600">
                About Us
              </ChakraLink>
            </Link>

            <Link href="/how-it-works">
              <ChakraLink fontWeight="600" color="gray.600">
                How it works
              </ChakraLink>
            </Link>
            <Link href="/pricing">
              <ChakraLink fontWeight="600" color="gray.600">
                Pricing{' '}
              </ChakraLink>
            </Link>
          </HStack>
        </HStack>
        <HStack spacing={12} pt={2}>
          <Link href="/faqs">
            <ChakraLink fontWeight="600" color="gray.600">
              FAQs
            </ChakraLink>
          </Link>

          <Link href="/signin">
            <ChakraLink fontWeight="600" color="gray.600">
              Sign in
            </ChakraLink>
          </Link>

          <Button
            onClick={() => Router.push('/signup')}
            colorScheme="teal"
            w={36}
            h={12}
            rounded={4}
          >
            Get Started
          </Button>
        </HStack>
      </HStack>
    </HStack>
  )
}
