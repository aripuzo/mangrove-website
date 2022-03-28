import { Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from 'next/link';
import Router from "next/router";

const LogoImage = ({ white, ...rest }) => {
  return (
    <Image
      src={white ? "/icons/logo-white.svg" : "/logo.svg"}
      {...rest}
    />
  );
}

export const Logo = ({ white, notLinked, ...rest }) => {
  if (notLinked) return <LogoImage {...{ ...rest, white }} />;

  return (
    <Link href="/" passHref={true}>
      <ChakraLink>
        <LogoImage {...{ ...rest, white }} />
      </ChakraLink>
    </Link>
  );
};
