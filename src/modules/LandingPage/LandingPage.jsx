import { Box } from '@chakra-ui/react'
import React from 'react'
import HowItWorks from './components/HowItWorks'
import Intro from './components/Intro'
import ProblemStatement from './components/ProblemStatement'
import Purpose from './components/Purpose'
import TrustedCompanies from './components/TrustedCompanies'

export default function LandingPage() {
  return (
    <Box>
      <Intro />

      <TrustedCompanies />

      <ProblemStatement />

      <Purpose />

      <HowItWorks />
    </Box>
  )
}
