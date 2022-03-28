import { Image, Stack, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

export default function TrustedCompanies({ ...rest }) {
  return (
    <VStack
      w="full"
      px="5%"
      align="center"
      pb={20}
      pt={[0, 0, 0, 0]}
      {...rest}
    >
      <Stack align="center" justify="center" spacing={12} w="full" /* maxW="6xl" */>
        <Text color="gray.600" textAlign="center">
          Trusted by companies of all sizes and passionate individuals
        </Text>

        <Wrap spacing="0" justify="center">
          <WrapItem>
            <Image src='/images/companies/Ideo.png' fallbackSrc="https://via.placeholder.com/150x70" />
          </WrapItem>
          <WrapItem>
            <Image src='/images/companies/PayPal.png' fallbackSrc="https://via.placeholder.com/150x70" />
          </WrapItem>
          <WrapItem>
            <Image src="/images/companies/King.png" fallbackSrc="https://via.placeholder.com/150x70" />
          </WrapItem>
          <WrapItem>
            <Image src="/images/companies/Amazon.png" fallbackSrc="https://via.placeholder.com/150x70" />
          </WrapItem>
          <WrapItem>
            <Image src="/images/companies/Nordstrom.png" fallbackSrc="https://via.placeholder.com/150x70" />
          </WrapItem>
          <WrapItem>
            <Image src="/images/companies/Showtime.png" fallbackSrc="https://via.placeholder.com/150x70" />
          </WrapItem>
        </Wrap>
      </Stack>
    </VStack>
  );
}
