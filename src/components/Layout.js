import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'

export default function PageLayout({ children, ...rest }) {
  return (
    <Stack {...rest}>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </Stack>
  )
}
