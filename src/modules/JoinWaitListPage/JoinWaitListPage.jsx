import {
  Button,
  Center,
  HStack,
  Input,
  Link as ChakraLink,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "../../components/Logo";
import TextSwitch from "../../components/TextSwitch";
import { BASE_API_URL } from "../../utils/constants";
import FAQsPage from "../FAQsPage/FAQsPage";

export default function JoinWaitListPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
    Axios.post(BASE_API_URL + "/waitlist", {
      email,
    })
      .then(({ data }) => {
        console.log(data);
        setIsLoading(false);
        toast({
          title:
            "Congratulations! You will be given early access once we launch",
          status: "success",
          position: "top",
          duration: null,
          isClosable: true,
        });
        setEmail("");
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
    <Center
      minH="100vh"
      bgSize="cover"
      w="full"
      px="5%"
      bgRepeat="no-repeat"
      bgImage="url(/illustrations/hero-gradient.png)"
      spacing={0}
      align="center"
    >
      <VStack w="full" spacing={6}>
        <VStack w="full">
          <Logo notLinked w={36} pb={3} />
          <TextSwitch
            fontWeight="extrabold"
            fontSize={["2.5rem", "3rem", "4rem"]}
          />

          <Text color="gray.600" maxW="2xl" fontSize="lg" textAlign="center">
            Mangrove ensures Clients and Contractors can easily create, sign and
            manage business contracts. With Mangrove, Contractors can be sure
            the client has money to pay before work starts and Clients can
            guarantee money is only paid to contractor’s when work is completed.
          </Text>
        </VStack>
        <HStack as="form" onSubmit={handleSubmit} pt={6} spacing={0}>
          <Input
            roundedRight="none"
            w={["full", 72]}
            placeholder="Your Email"
            isRequired
            bg="white"
            name="email"
            variant="filled"
            // type="email"
            fontSize="md"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            size="lg"
          />
          <Button
            isLoading={isLoading}
            loadingText="Saving..."
            type="submit"
            colorScheme="teal"
            w={[56, 40]}
            h={12}
            roundedLeft="none"
          >
            Get Early Access
          </Button>
        </HStack>
        {/* <ChakraLink textAlign="center" color="teal.500">
          Frequently Asked Questions
        </ChakraLink> */}
        <FAQsPage />
      </VStack>
    </Center>
  );
}
