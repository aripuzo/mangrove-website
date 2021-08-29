import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import Router from 'next/router'
import React from 'react'
import { RiUserAddLine } from 'react-icons/ri'

export default function Intro({ ...rest }) {
  return (
    <Box
      h={['120vh', '130vh']}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage="url(/illustrations/hero-gradient.png)"
      pt={40}
      spacing={0}
      align="center"
      {...rest}
    >
      <VStack spacing={6}>
        <VStack px="5%">
          <Heading
            textAlign="center"
            fontSize={['3rem', '3rem', '4rem']}
            color="dullTeal.200"
          >
            Get&nbsp;
            <Box as="span" color="teal.700">
              money&nbsp;
            </Box>
            for your&nbsp;
            <Box as="span" color="teal.700">
              value&nbsp;
            </Box>
          </Heading>
          <Text color="gray.600" maxW="2xl" fontSize="lg" textAlign="center">
            A happy transaction is one that ensures the client pays and knows
            they shall receive the desired service, and the service provider
            works knowing that payment is assured.
          </Text>
        </VStack>
        <HStack spacing={4}>
          <Button
            onClick={() => Router.push('/signup')}
            colorScheme="teal"
            w={36}
            h={12}
            rounded={4}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            onClick={() => Router.push('/demo')}
            colorScheme="teal"
            w={36}
            h={12}
            rounded={4}
          >
            Demo
          </Button>
        </HStack>

        <Image pt={4} src="/illustrations/dashboard-preview.png" />
      </VStack>
    </Box>
  )
}
