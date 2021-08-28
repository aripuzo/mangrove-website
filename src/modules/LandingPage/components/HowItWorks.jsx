import {
  Circle,
  Grid,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { RiUserAddLine } from 'react-icons/ri'

const howItWorks = [
  {
    icon: <Icon as={RiUserAddLine} fontSize="4xl" color="gray.600" />,
    text: ' Create an account, either as a Client or as a Contractor',
  },
  {
    icon: (
      <Image src="/illustrations/contract.svg" boxSize={10} color="gray.600" />
    ),
    text: ' Create an account, either as a Client or as a Contractor',
  },
  {
    icon: (
      <Image src="/illustrations/cocktail.svg" boxSize={10} color="gray.600" />
    ),
    text: ' Create an account, either as a Client or as a Contractor',
  },
]

export default function HowItWorks({ ...rest }) {
  return (
    <VStack py={24} px="5%" {...rest}>
      <Stack w="full" maxW="6xl" spacing={16} align="center">
        <Heading color="teal.700">How it works</Heading>

        <Grid w="full" templateColumns="repeat(3, 1fr)" gap={20}>
          {howItWorks.map(({ icon, text }, index) => (
            <Stack
              border="1px solid lightgray"
              w="100%"
              h="22rem"
              align="center"
              py={8}
              spacing={8}
              px={4}
              rounded="6px"
            >
              <Circle bg="dullTeal.100" size={32}>
                <Circle border="3px solid" borderColor="teal.700" size={24}>
                  <Circle
                    border="0.5rem solid"
                    borderColor="teal.500"
                    size="5.6rem"
                    ml="0.5px"
                  >
                    {icon}
                  </Circle>
                </Circle>
              </Circle>
              <VStack color="gray.600">
                <Heading fontSize="3xl">Step {index + 1}</Heading>
                <Text maxW={56} textAlign="center">
                  {text}
                </Text>
              </VStack>
            </Stack>
          ))}
        </Grid>
      </Stack>
    </VStack>
  )
}
