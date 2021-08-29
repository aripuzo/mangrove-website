import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  Link as ChakraLink,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Logo } from './Logo'
import Link from 'next/link'
import Router from 'next/router'
import { FiMenu } from 'react-icons/fi'

const mobileNavLinks = [
  { name: 'About us', href: '/about-us' },
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Pricing', href: '/pricing' },
]

export default function Navbar({ ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
    <>
      <HStack
        bg={pastTop ? 'white' : 'transparent'}
        transition=".5s all"
        zIndex={100}
        shadow={pastTop ? 'md' : '0'}
        pos="fixed"
        top={0}
        w="full"
        py={pastTop ? [1, 2] : [0, 1]}
        justify="center"
        px="5%"
        {...rest}
      >
        <HStack w="full" maxW="6xl" justify="space-between">
          <Logo w={24} />
          <HStack
            display={['none', 'none', 'none', 'flex']}
            spacing={12}
            pt={2}
          >
            <Link href="/about-us">
              <ChakraLink fontWeight="600" color="gray.600">
                About Us
              </ChakraLink>
            </Link>

            <Link href="#how-it-works">
              <ChakraLink fontWeight="600" color="gray.600">
                How it works
              </ChakraLink>
            </Link>
            <Link href="/pricing">
              <ChakraLink fontWeight="600" color="gray.600">
                Pricing
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

          <HStack
            display={['inline-flex', 'inline-flex', 'inline-flex', 'none']}
            pt={5}
          >
            <IconButton
              onClick={onOpen}
              color="gray.600"
              icon={<FiMenu />}
              variant="ghost"
              fontSize="3xl"
            />
          </HStack>
        </HStack>
      </HStack>
      <Drawer size="2xs" placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton fontSize="xl" color="gray.600" top={8} right={4} />

          <DrawerBody pl={8} pt={16}>
            <VStack spacing={12}>
              <Logo w={36} />
              <VStack spacing={7}>
                {mobileNavLinks.map(({ name, href }, index) => (
                  <Link href={href} key={index}>
                    <ChakraLink fontSize="xl" fontWeight="600" color="gray.600">
                      {name}
                    </ChakraLink>
                  </Link>
                ))}
              </VStack>
              <VStack spacing={3}>
                <Link href="/signin">
                  <ChakraLink fontSize="xl" fontWeight="600" color="gray.600">
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
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
