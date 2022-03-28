import { Box, Heading } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";

export default function TextSwitch({ ...rest }) {
  const [showMoneyFirst, setShowMoneyFirst] = useState(true);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (showMoneyFirst) {
        setShowMoneyFirst(false);
      } else {
        setShowMoneyFirst(true);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [showMoneyFirst]);

  return (
    <Heading
      textAlign="center"
      fontSize={["3rem", "3rem", "4rem"]}
      color="dullTeal.200"
      {...rest}
    >
      Get&nbsp;
      <Box as="span" color="teal.700">
        {showMoneyFirst ? 'value' : 'money'}&nbsp;
      </Box>
      for your&nbsp;
      <Box as="span" color="teal.700">
        {showMoneyFirst ? 'money' : 'value'}&nbsp;
      </Box>
    </Heading>
  );
}
