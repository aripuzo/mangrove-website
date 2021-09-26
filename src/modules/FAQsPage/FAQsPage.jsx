import { AddIcon, MinusIcon } from "@chakra-ui/icons";
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
  useToast,
} from "@chakra-ui/react";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Logo } from "../../components/Logo";
import { BASE_API_URL } from "../../utils/constants";
import TrustedCompanies from "../LandingPage/components/TrustedCompanies";
import { PropagateLoader } from "react-spinners";
import theme from "../../theme";

export default function FAQsPage() {
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = () => {
    setIsLoading(true);
    Axios.get(BASE_API_URL + "/faqs")
      .then(({ data }) => {
        console.log(data.data);
        setIsLoading(false);

        setFaqs(data.data);
      })
      .catch(({ response }) => {
        toast({
          title: "Something went wrong",
          description: response.data.message,
          status: "error",
          position: "top",
          duration: 4000,
          isClosable: true,
        });
        setIsLoading(false);
        console.log(response);
      });
  };

  return (
    <Stack
      color="gray.600"
      // pt={[32, 32, 40]}
      pb={32}
      pt={[10, 10, 10]}
      // px="5%"
    >
      <VStack spacing={[8, 8, 8]}>
        <VStack>
          {/* <Logo notLinked /> */}
          <Heading fontSize="2xl" textAlign="center">
            Frequently Asked Questions
          </Heading>
        </VStack>
        <VStack justify="center" mt={10}>
          {isLoading && <PropagateLoader color={theme.colors.teal[500]} />}
          <Box w={["sm", "xl", "3xl", "4xl"]}>
            <Accordion defaultIndex={[]} allowMultiple>
              {faqs.map(({ question, answer, id }) => (
                <AccordionItem key={id}>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton px={6} py={6}>
                        <HStack
                          justify="space-between"
                          w="full"
                          spacing={[4, 8]}
                        >
                          <Text
                            fontWeight="bold"
                            textAlign="left"
                            fontSize={["md", "xl"]}
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
                        <Stack spacing={6}>
                          <Text textAlign="left" fontSize={["md", "md"]} ml={6}>
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
        </VStack>
      </VStack>
      {/* <TrustedCompanies pt={[20, 20, 40]} /> */}
      <Stack pt={[0, 0, 16]}></Stack>
    </Stack>
  );
}
