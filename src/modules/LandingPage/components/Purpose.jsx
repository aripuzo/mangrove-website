import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'

export default function Purpose({ ...rest }) {
  return (
    <Stack
      pt={44}
      pb={36}
      bg="blue.50"
      align="center"
      px="5%"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage="url(/illustrations/purpose-bg.png)"
      spacing={0}
      {...rest}
    >
      <Stack w="full" maxW="5xl" justify="space-between">
        <Heading textAlign="left" color="dullTeal.200" fontSize="5xl">
          Just like the mangrove tree, we act as a buffer between you and
          uncertainty.&nbsp;
          <Box as="span" color="teal.700">
            We really want to save you time, money and stress.
          </Box>
        </Heading>
      </Stack>
    </Stack>
  )
}
