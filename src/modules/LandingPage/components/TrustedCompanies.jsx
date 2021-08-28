import { Icon, Image, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { RiUserAddLine } from 'react-icons/ri'

export default function TrustedCompanies({ ...rest }) {
  return (
    <VStack w="full" px={16} pb={12} pt={64} spacing={12} {...rest}>
      <Text color="gray.600">
        Trusted by companies of all sizes and passionate individuals
      </Text>

      <Wrap spacing="30px" justify="center">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <WrapItem key={index}>
            <Image fallbackSrc="https://via.placeholder.com/150x70" />
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  )
}
