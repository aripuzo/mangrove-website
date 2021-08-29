import { Image, Stack, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

export default function TrustedCompanies({ ...rest }) {
  return (
    <VStack
      w="full"
      px="5%"
      align="center"
      pb={20}
      pt={[0, 0, 24, 64]}
      {...rest}
    >
      <Stack align="center" justify="center" spacing={12} w="full" maxW="6xl">
        <Text color="gray.600" textAlign="center">
          Trusted by companies of all sizes and passionate individuals
        </Text>

        <Wrap spacing="30px" justify="center">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <WrapItem key={index}>
              <Image fallbackSrc="https://via.placeholder.com/150x70" />
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
    </VStack>
  )
}
