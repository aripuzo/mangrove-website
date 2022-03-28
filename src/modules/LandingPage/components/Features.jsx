import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { useMemo } from "react";

const Feature = ({ accent, description, title }) => (
  <Box
    boxShadow="0px 4px 20px 0px #00000012"
    maxW="100%"
    overflow="hidden"
    rounded="10px"
    flexShrink={0}
    w="320px"
    whiteSpace="normal"
  >
    <Box bgColor={accent} h="10px" />
    <VStack align="flex-start" py="10" px="5" spacing="5">
      <Heading color="#435A70" fontSize="27px" fontWeight="black">
        {title}
      </Heading>
      <Text>{description}</Text>
    </VStack>
  </Box>
);

export default function Features() {
  const features = useMemo(
    () => [
      {
        accent: "#249EA0",
        description:
          "Our contract builder helps both Contractors and Clients to create free customizable contracts that can easily be executed shared and downloaded",
        title: "Free Smart Contract Creation",
      },
      {
        accent: "#F78104",
        description:
          "Mangrove Shelter is our fraud-prevention tool, which receives total or milestone payment from a client and holds until the contractor has completed his task, after which the money is paid to the Contractor’s wallet.",
        title: "Mangrove Shelter",
      },
      {
        accent: "#249EA0",
        description:
          "Mangrove automatically generates invoices for Contractors on every amount to be paid by Clients. Clients can view and download receipts generated for every payment made to Contractors.",
        title: "Invoices/Receipts",
      },
      {
        accent: "#435A70",
        description:
          "Manage and Automate payments of contractors and payment collection for contractors",
        title: "Auto Payments",
      },
      {
        accent: "#F78104",
        description:
          "We provide live mediation support that helps to resolve conflicts that arise between Clients and Contractors in the course of their transactions.",
        title: "Mediation Support",
      },
      {
        accent: "#249EA0",
        description:
          "Mangrove generates a detailed report with insights on your contractors performance and spending reports",
        title: "Report",
      },
    ],
    []
  );
  return (
    <Box py="32">
      <Box maxW="full" ml="auto" w="8xl" overflowX="hidden">
        <Box overflowX="auto" pr="40px">
          <Box
            alignItems="flex-end"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            gridGap="20px"
            pl="20px"
            py="10"
            whiteSpace="nowrap"
          >
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
            <Box
              flexShrink={0}
              h="1px"
              w="40px"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
