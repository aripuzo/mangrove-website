import { Image } from "@chakra-ui/image";
import Router from "next/router";

export const Logo = ({ white, notLinked, ...rest }) => {
  return (
    <Image
      cursor="pointer"
      onClick={() => !notLinked && Router.push(`/`)}
      src={white ? "/icons/logo-white.svg" : "/logo.svg"}
      {...rest}
    />
  );
};
