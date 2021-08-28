import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import TrustedCompanies from '../LandingPage/components/TrustedCompanies'

const questions = [
  {
    question: 'How can i signup?',
    answer:
      'Currently we have Igbo, Yoruba, Pidgin and English. We hope to scale very soon to accommodate other Nigerian and African languages.',
  },

  {
    question: 'Do i need to pay any fee?',
    answer:
      'Once you request for an iRant session, we search for available buddies and then prepare a conversation between the two of you',
  },
  {
    question: 'Can it work for any industry?',
    answer:
      'Of course it can. We have the best qualified and certified psychological experts and would like you to be sure of that. Just click on our rant buddies and you have access to their profiles',
  },
]

export default function FAQsPage() {
  return (
    <Stack color="gray.600" pt={40} px="5%">
      <VStack spacing={24}>
        <Heading>Frequently Asked Questions</Heading>
        <Flex justify="center" mt={10}>
          <Box w={['sm', 'xl', '3xl', '4xl']}>
            <Accordion defaultIndex={[]} allowMultiple>
              {questions.map(({ question, answer }, index) => (
                <AccordionItem key={index}>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton py={6}>
                        <HStack
                          justify="space-between"
                          w="full"
                          spacing={[4, 8]}
                        >
                          <Text
                            fontWeight="bold"
                            textAlign="left"
                            fontSize={['md', 'xl']}
                          >
                            {question}
                          </Text>

                          <Icon
                            boxSize={3}
                            color="primary.500"
                            as={isExpanded ? MinusIcon : AddIcon}
                          />
                        </HStack>
                      </AccordionButton>
                      <AccordionPanel pl={[6, 6]} pt={4} pb={8}>
                        <Stack
                          isInline
                          pos="relative"
                          align="center"
                          spacing={6}
                        >
                          <Text fontSize={['md', 'md']} ml={6}>
                            {answer}
                          </Text>
                        </Stack>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Flex>
      </VStack>
      <TrustedCompanies pt={40} />
      <Stack pt={16}></Stack>
    </Stack>
  )
}
