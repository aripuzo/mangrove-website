import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Intro from './components/Intro'
import ProblemStatement from './components/ProblemStatement'
import Purpose from './components/Purpose'
import TrustedCompanies from './components/TrustedCompanies'
import AOS from 'aos'

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  
  return (
    <Box>
      <Intro />

      <TrustedCompanies />

      <ProblemStatement />

      <Features />

      <Purpose />

      <HowItWorks />
    </Box>
  )
}
