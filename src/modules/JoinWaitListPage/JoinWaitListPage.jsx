import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { Logo } from '../../components/Logo'

export default function JoinWaitListPage() {
  return (
    <Center
      minH="100vh"
      bgSize="cover"
      w="full"
      px="5%"
      bgRepeat="no-repeat"
      bgImage="url(/illustrations/hero-gradient.png)"
      spacing={0}
      align="center"
    >
      <VStack w="full" spacing={6}>
        <VStack w="full">
          <Logo notLinked w={36} pb={3} />
          <Heading
            textAlign="center"
            fontWeight="extrabold"
            fontSize={['2.5rem', '3rem', '4rem']}
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
        <HStack as="form" pt={6} spacing={0}>
          <Input
            roundedRight="none"
            w={['full', 72]}
            placeholder="Your Email"
            isRequired
            bg="white"
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
      </VStack>
    </Center>
  )
}
